"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import BookADemoForm from "@/components/homePage/BookADemoForm";
import { ReactNode } from "react";

interface EnrollDialogProps {
  buttonText: string;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
}

export function EnrollDialog({
  buttonText,
  className,
  size = "lg",
  variant = "default",
}: EnrollDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size={size}
          variant={variant}
          className={className}
        >
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-gradient-to-br from-slate-50 to-blue-50">
        <DialogHeader>
          
        </DialogHeader>
        <BookADemoForm btnName={buttonText} />
      </DialogContent>
    </Dialog>
  );
}