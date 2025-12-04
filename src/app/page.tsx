import Guest from "@/features/auth/components/Guest";
import { currentUser } from "@clerk/nextjs/server";
import AddTransactions from "@/features/transactions/components/AddTransactions";
import Balance from "@/features/transactions/components/Balance";
import IncomeExpense from "@/features/transactions/components/IncomeExpense";
import TransactionList from "@/features/transactions/components/TransactionList";

export default async function Home() {
  const user = await currentUser();

  if (!user) return <Guest />;

  return (
    <main>
      <h2>Welcome {user.firstName}</h2>

      <Balance />
      <IncomeExpense />
      <AddTransactions />
      <TransactionList />
    </main>
  );
}
