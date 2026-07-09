#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (/\.tsx$/.test(entry.name)) files.push(full);
  }
  return files;
}

const emptyReturn = /return \(\s*\n\s*\);/;

for (const file of walk(path.join(process.cwd(), 'src/components'))) {
  let content = fs.readFileSync(file, 'utf8');
  if (!emptyReturn.test(content)) continue;

  if (content.includes('const schemas =')) {
    content = content.replace(
      emptyReturn,
      `return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );`,
    );
  } else {
    const schemaVars = [...content.matchAll(/const (\w+)\s*=\s*\{[\s\S]*?'@context':/g)].map((m) => m[1]);
    const varName = schemaVars.at(-1);
    if (varName) {
      content = content.replace(
        emptyReturn,
        `return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(${varName}) }}
    />
  );`,
      );
    } else {
      content = content.replace(emptyReturn, 'return null;');
    }
  }

  if (!content.startsWith("'use client'") && content.includes('dangerouslySetInnerHTML')) {
    content = `'use client';\n\n${content}`;
  }

  fs.writeFileSync(file, content);
  console.log('Fixed', file);
}

console.log('Schema fix complete');
