"use client";

import AddTransactionModal from "./AddTransactionModal";

interface AddTransactionDrawerProps {
  children: React.ReactNode;
}

const AddTransactionDrawer = ({ children }: AddTransactionDrawerProps) => {
  return <AddTransactionModal>{children}</AddTransactionModal>;
};

export default AddTransactionDrawer;
