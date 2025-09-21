import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const userWaitlist = pgTable("user_waitlist", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  contact: text("contact").notNull(),
  preferredPlan: text("preferred_plan").notNull(),
  location: text("location").notNull(),
  reason: text("reason").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const vendorWaitlist = pgTable("vendor_waitlist", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  contact: text("contact").notNull(),
  role: text("role").notNull(),
  portfolioLink: text("portfolio_link"),
  experience: text("experience").notNull(),
  location: text("location").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertUserWaitlistSchema = createInsertSchema(userWaitlist).omit({
  id: true,
  createdAt: true,
}).extend({
  name: z.string().min(1, "Name is required"),
  contact: z.string().email("Please enter a valid email address"),
  preferredPlan: z.string().min(1, "Please select a preferred plan"),
  location: z.string().min(1, "Location is required"),
  reason: z.string().min(10, "Please provide at least 10 characters explaining why you want to use this platform"),
});

export const insertVendorWaitlistSchema = createInsertSchema(vendorWaitlist).omit({
  id: true,
  createdAt: true,
}).extend({
  name: z.string().min(1, "Name is required"),
  contact: z.string().email("Please enter a valid email address"),
  role: z.string().min(1, "Please select a role"),
  portfolioLink: z.string().url("Please enter a valid URL").optional().or(z.literal("")).transform(val => val || null),
  experience: z.string().min(20, "Please provide at least 20 characters about yourself and your experience"),
  location: z.string().min(1, "Location is required"),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertUserWaitlist = z.infer<typeof insertUserWaitlistSchema>;
export type UserWaitlist = typeof userWaitlist.$inferSelect;
export type InsertVendorWaitlist = z.infer<typeof insertVendorWaitlistSchema>;
export type VendorWaitlist = typeof vendorWaitlist.$inferSelect;
