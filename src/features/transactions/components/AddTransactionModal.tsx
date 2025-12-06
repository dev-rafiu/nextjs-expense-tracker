"use client";

import { useState, useEffect } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddTransactionForm from "./AddTransactionForm";

interface AddTransactionModalProps {
  children: React.ReactNode;
}

const AddTransactionModal = ({ children }: AddTransactionModalProps) => {
  const [open, setOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const handleSuccess = () => {
    setOpen(false);
  };

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Add Transaction</DialogTitle>
            <DialogDescription>
              Record your income or expense transaction
            </DialogDescription>
          </DialogHeader>
          <AddTransactionForm onSuccess={handleSuccess} isDialog />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{children}</DrawerTrigger>

      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Add Transaction</DrawerTitle>
          <DrawerDescription>
            Record your income or expense transaction
          </DrawerDescription>
        </DrawerHeader>
        <AddTransactionForm onSuccess={handleSuccess} />
      </DrawerContent>
    </Drawer>
  );
};

export default AddTransactionModal;
