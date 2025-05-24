import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema, insertQuoteRequestSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      res.json({ success: true, id: submission.id });
    } catch (error) {
      console.error("Contact submission error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Invalid form data. Please check all required fields." 
      });
    }
  });

  // Quote request submission
  app.post("/api/quote", async (req, res) => {
    try {
      const validatedData = insertQuoteRequestSchema.parse(req.body);
      const request = await storage.createQuoteRequest(validatedData);
      res.json({ success: true, id: request.id });
    } catch (error) {
      console.error("Quote request error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Invalid quote request data. Please check all required fields." 
      });
    }
  });

  // Get contact submissions (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve contact submissions" 
      });
    }
  });

  // Get quote requests (for admin purposes)
  app.get("/api/quotes", async (req, res) => {
    try {
      const requests = await storage.getQuoteRequests();
      res.json(requests);
    } catch (error) {
      console.error("Error fetching quote requests:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve quote requests" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
