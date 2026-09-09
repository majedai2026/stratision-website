process.env.VERCEL_SERVERLESS = "1";
import type { Request, Response } from "express";
import app from "../server";

/**
 * Vercel Serverless Function Handler
 * Bridges incoming requests directly to the authoritative Express application.
 */
export default function handler(req: Request, res: Response) {
  // If Vercel rewrite stripped the /api prefix, restore it
  // so all existing Express routes (/api/health, /api/contact/request, etc.) match identically.
  if (req.url && !req.url.startsWith("/api")) {
    req.url = `/api${req.url.startsWith("/") ? "" : "/"}${req.url}`;
  }
  return app(req, res);
}

export { app };
