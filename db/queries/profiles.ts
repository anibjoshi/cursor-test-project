import { db } from "@/db/db";
import { profiles } from "@/db/schema/schema";
import { eq } from "drizzle-orm";

export async function getProfileByUserId(userId: string) {
  const [profile] = await db
    .select()
    .from(profiles)
    .where(eq(profiles.userId, userId))
    .limit(1);
  
  return profile;
}

export async function createProfile(userId: string) {
  const [profile] = await db
    .insert(profiles)
    .values({ userId })
    .returning();
  
  return profile;
}