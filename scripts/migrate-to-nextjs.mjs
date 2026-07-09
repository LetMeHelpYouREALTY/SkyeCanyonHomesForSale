#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const root = path.join(process.cwd(), 'src');

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (/\.(tsx|ts)$/.test(entry.name)) files.push(full);
  }
  return files;
}

const clientDirs = ['pages', 'components', 'hooks', 'lib'];

for (const dir of clientDirs) {
  const base = path.join(root, dir);
  if (!fs.existsSync(base)) continue;

  for (const file of walk(base)) {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;

    // wouter -> next
    if (content.includes('wouter')) {
      content = content.replace(
        /import\s+\{\s*Link\s*\}\s+from\s+['"]wouter['"];?\n?/g,
        "import Link from 'next/link';\n",
      );
      content = content.replace(
        /import\s+\{\s*Link,\s*useLocation\s*\}\s+from\s+['"]wouter['"];?\n?/g,
        "import Link from 'next/link';\nimport { usePathname } from 'next/navigation';\n",
      );
      content = content.replace(
        /import\s+\{\s*useLocation\s*\}\s+from\s+['"]wouter['"];?\n?/g,
        "import { usePathname } from 'next/navigation';\n",
      );
      content = content.replace(
        /import\s+\{\s*useRoute\s*\}\s+from\s+['"]wouter['"];?\n?/g,
        "import { useParams } from 'next/navigation';\n",
      );
      content = content.replace(/\buseLocation\(\)/g, 'usePathname()');
      content = content.replace(/\[\s*match\s*,\s*params\s*\]\s*=\s*useRoute\(/g, 'const params = useParams(');
      changed = true;
    }

    // react-helmet-async -> remove (metadata handled in app router)
    if (content.includes('react-helmet-async')) {
      content = content.replace(/import\s+\{[^}]*Helmet[^}]*\}\s+from\s+['"]react-helmet-async['"];?\n?/g, '');
      content = content.replace(/<Helmet>[\s\S]*?<\/Helmet>\s*/g, '');
      changed = true;
    }

    const needsClient =
      dir !== 'lib' &&
      (content.includes('useState') ||
        content.includes('useEffect') ||
        content.includes('useRef') ||
        content.includes('usePathname') ||
        content.includes('useParams') ||
        content.includes('useRouter') ||
        content.includes('onClick') ||
        content.includes('window.') ||
        content.includes('document.'));

    if (needsClient && !content.startsWith("'use client'") && !content.startsWith('"use client"')) {
      content = `'use client';\n\n${content}`;
      changed = true;
    }

    if (changed) fs.writeFileSync(file, content);
  }
}

console.log('Migration script complete');
