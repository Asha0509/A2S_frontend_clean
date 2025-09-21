import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertUserWaitlistSchema, insertVendorWaitlistSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // User waitlist routes
  app.post("/api/user-waitlist", async (req, res) => {
    try {
      const data = insertUserWaitlistSchema.parse(req.body);
      const entry = await storage.createUserWaitlist(data);
      res.json({ success: true, entry });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  app.get("/api/user-waitlist", async (req, res) => {
    try {
      const entries = await storage.getUserWaitlist();
      res.json({ success: true, entries });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Internal server error" 
      });
    }
  });

  // Vendor waitlist routes
  app.post("/api/vendor-waitlist", async (req, res) => {
    try {
      const data = insertVendorWaitlistSchema.parse(req.body);
      const entry = await storage.createVendorWaitlist(data);
      res.json({ success: true, entry });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  app.get("/api/vendor-waitlist", async (req, res) => {
    try {
      const entries = await storage.getVendorWaitlist();
      res.json({ success: true, entries });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Internal server error" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
