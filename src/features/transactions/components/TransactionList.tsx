import TransactionItem from "./TransactionItem";
import getTransactions from "../actions/getTransactions";

async function TransactionList() {
  const { transactions, error } = await getTransactions();

  if (error) return <p className="error">{error}</p>;

  if (!transactions) return <p>No transactions found</p>;

  return (
    <>
      <h3>History</h3>

      <ul className="list">
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
}

export default TransactionList;
