import { type User, type InsertUser, type UserWaitlist, type InsertUserWaitlist, type VendorWaitlist, type InsertVendorWaitlist } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createUserWaitlist(entry: InsertUserWaitlist): Promise<UserWaitlist>;
  createVendorWaitlist(entry: InsertVendorWaitlist): Promise<VendorWaitlist>;
  getUserWaitlist(): Promise<UserWaitlist[]>;
  getVendorWaitlist(): Promise<VendorWaitlist[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private userWaitlist: Map<string, UserWaitlist>;
  private vendorWaitlist: Map<string, VendorWaitlist>;

  constructor() {
    this.users = new Map();
    this.userWaitlist = new Map();
    this.vendorWaitlist = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createUserWaitlist(insertEntry: InsertUserWaitlist): Promise<UserWaitlist> {
    const id = randomUUID();
    const entry: UserWaitlist = { 
      ...insertEntry, 
      id, 
      createdAt: new Date() 
    };
    this.userWaitlist.set(id, entry);
    return entry;
  }

  async createVendorWaitlist(insertEntry: InsertVendorWaitlist): Promise<VendorWaitlist> {
    const id = randomUUID();
    const entry: VendorWaitlist = { 
      ...insertEntry, 
      id, 
      createdAt: new Date() 
    };
    this.vendorWaitlist.set(id, entry);
    return entry;
  }

  async getUserWaitlist(): Promise<UserWaitlist[]> {
    return Array.from(this.userWaitlist.values());
  }

  async getVendorWaitlist(): Promise<VendorWaitlist[]> {
    return Array.from(this.vendorWaitlist.values());
  }
}

export const storage = new MemStorage();
