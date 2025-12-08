import getUserBalance from "../actions/getUserBalance";
import { formatCurrency } from "@/lib/utils";

const Balance = async () => {
  const { balance } = await getUserBalance();

  return (
    <div className="">
      <p className="text-base text-slate-600 font-medium">Total Balance:</p>
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mt-1">
        ${formatCurrency(balance ?? 0)}
      </h1>
    </div>
  );
};

export default Balance;
