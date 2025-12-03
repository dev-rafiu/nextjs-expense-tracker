import Guest from "@/app/components/Guest";
import { currentUser } from "@clerk/nextjs/server";
import AddTransactions from "@/app/components/AddTransactions";
import Balance from "@/app/components/Balance";
import IncomeExpense from "@/app/components/IncomeExpense";

export default async function Home() {
  const user = await currentUser();

  if (!user) return <Guest />;

  return (
    <main>
      <h2>Welcome {user.firstName}</h2>

      <Balance />
      <IncomeExpense />
      <AddTransactions />
    </main>
  );
}
