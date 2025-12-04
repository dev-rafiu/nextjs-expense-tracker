"use server";

import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export default async function deleteTransaction(id: string): Promise<{
  message?: string;
  error?: string;
}> {
  const { userId } = await auth();

  if (!userId) {
    return { error: "User not found" };
  }

  try {
    await db.transaction.delete({
      where: { userId, id },
    });
    revalidatePath("/");
    return { message: "Transaction deleted successfully" };
  } catch (error) {
    return { error: "Failed to delete transaction" + error };
  }
}
