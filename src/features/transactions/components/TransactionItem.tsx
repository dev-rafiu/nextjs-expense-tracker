"use client";

import { Transaction } from "../types/Transaction";
import { formatCurrency } from "@/lib/utils";
import { toast } from "sonner";
import deleteTransaction from "../actions/deleteTransaction";

function TransactionItem({ transaction }: { transaction: Transaction }) {
  const sign = transaction.amount > 0 ? "+" : "-";

  const handleDeleteTransaction = async (id: string) => {
    const { error, message } = await deleteTransaction(id);
    if (error) toast.error(error);

    toast.success(message);
  };

  return (
    <li className={transaction.amount > 0 ? "plus" : "minus"}>
      <p>{transaction.text}</p>
      <span>
        {sign}
        {formatCurrency(transaction.amount)}
      </span>

      <button
        onClick={() => handleDeleteTransaction(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
}

export default TransactionItem;
