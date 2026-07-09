// Vercel Serverless Function - React App Router
// This function handles all non-static routes and serves the React app

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Create Express app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.get('/api/properties', (req, res) => {
  res.json([
    {
      id: 1,
      address: "123 Skye Canyon Drive, Las Vegas, NV 89166",
      price: 1250000,
      bedrooms: 4,
      bathrooms: "3.5",
      sqft: 3200,
      description: "Luxury Skye Canyon home with mountain views and TPC golf course access",
      imageUrl: "/images/luxury-home-1.jpg",
      status: "active",
      featured: true
    },
    {
      id: 2,
      address: "456 Skye Canyon Park Drive, Las Vegas, NV 89166",
      price: 1850000,
      bedrooms: 5,
      bathrooms: "4.5",
      sqft: 4200,
      description: "Premium estate with Red Rock Canyon views and resort amenities",
      imageUrl: "/images/luxury-home-2.jpg",
      status: "active",
      featured: true
    }
  ]);
});

app.get('/api/market-stats', (req, res) => {
  res.json({
    medianPrice: "$1,250,000",
    daysOnMarket: 15,
    homesSold: 24,
    activeListings: 8,
    appreciationRate: "8-12% annually",
    marketTrend: "Strong buyer demand"
  });
});

app.get('/api/featured-properties', (req, res) => {
  res.json([
    {
      id: 1,
      address: "123 Skye Canyon Drive, Las Vegas, NV 89166",
      price: 1250000,
      featured: true
    },
    {
      id: 2,
      address: "456 Skye Canyon Park Drive, Las Vegas, NV 89166",
      price: 1850000,
      featured: true
    }
  ]);
});

// Lead generation endpoint
app.post('/api/leads', (req, res) => {
  const { firstName, lastName, email, phone, message, timeframe, priceRange } = req.body;
  
  const lead = {
    id: Date.now(),
    firstName,
    lastName,
    email,
    phone,
    message,
    timeframe,
    priceRange,
    source: "Skye Canyon Website",
    createdAt: new Date().toISOString()
  };
  
  res.status(201).json({
    success: true,
    message: "Lead created successfully",
    lead
  });
});

// RealScout integration endpoint
app.get('/api/realscout/onboarding', (req, res) => {
  res.json({
    url: "https://drjanduffy.realscout.com/onboarding",
    agentId: "QWdlbnQtMjI1MDUw",
    location: "Skye Canyon, Las Vegas, NV 89166"
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Catch-all for unknown API routes - return 404 JSON response
// NOTE: Page routes are handled by Vercel's static file serving + SPA rewrite in vercel.json
app.use((req, res) => {
  res.status(404).json({ error: 'API endpoint not found', path: req.path });
});

// Export for Vercel
export default app;
