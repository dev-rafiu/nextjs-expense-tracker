import { formatCurrency } from "@/lib/utils";
import getIncomeExpense from "../actions/getIncomeExpense";

async function IncomeExpense() {
  const { expense, income } = await getIncomeExpense();

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">${formatCurrency(income ?? 0)}</p>
      </div>

      <div>
        <h4>Expense</h4>
        <p className="money minus">${formatCurrency(expense ?? 0)}</p>
      </div>
    </div>
  );
}

export default IncomeExpense;
