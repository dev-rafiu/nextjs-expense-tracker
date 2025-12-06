"use server";

import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

interface TransactionData {
  text: string;
  amount: number;
  category?: string | null;
  transactionDate?: Date;
}

interface TransactionResult {
  data?: TransactionData;
  error?: string;
}

export default async function updateTransaction(
  id: string,
  formData: FormData
): Promise<TransactionResult> {
  const textValue = formData.get("text");
  const amountValue = formData.get("amount");
  const categoryValue = formData.get("category");
  const dateValue = formData.get("date");

  if (!textValue || textValue === "" || !amountValue) {
    return { error: "Missing required fields" };
  }

  const text: string = textValue.toString();
  const amount: number = parseFloat(amountValue.toString());
  const category: string | null = categoryValue
    ? categoryValue.toString()
    : null;
  const transactionDate = dateValue
    ? new Date(dateValue.toString())
    : undefined;

  // get logged in user
  const { userId } = await auth();

  if (!userId) {
    return { error: "User not found" };
  }

  try {
    const updateData: TransactionData = {
      text,
      amount,
      category,
    };

    if (transactionDate) {
      updateData.transactionDate = transactionDate;
    }

    const transactionData: TransactionData = await db.transaction.update({
      where: {
        id,
        userId,
      },
      data: updateData,
    });
    revalidatePath("/");
    revalidatePath("/transactions");
    return { data: transactionData };
  } catch (error) {
    return { error: "Failed to update transaction: " + error };
  }
}
