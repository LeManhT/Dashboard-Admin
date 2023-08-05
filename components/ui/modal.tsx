"use client";
import * as React from "react";
import { Dialog, DialogContent, DialogHeader } from "./dialog";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";

export interface IModalProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal : React.FC<IModalProps> = ({
  title,
  description,
  isOpen,
  onClose,
  children,
}) => {
    const onChange = (isOpen : boolean) => {
        if(!isOpen) {
            onClose();  
        }
    }
  return <Dialog open={isOpen} onOpenChange={onChange}>
    <DialogContent>
        <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{title}</DialogDescription>
        </DialogHeader>
    </DialogContent>
  </Dialog>;
}
