"use client";

import React, { ElementRef, useRef, useState, useTransition } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

import { updateUser } from "@/actions/user";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import { Button } from "@/components/ui/Button";
import { Textarea } from "@/components/ui/Textarea";

interface BioModalProps {
  initialValue: string | null;
}

export const BioModal = ({ initialValue }: BioModalProps) => {
  const [value, setValue] = useState(initialValue || "");

  const [isPending, startTransition] = useTransition();

  const closeRef = useRef<ElementRef<"button">>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    startTransition(() => {
      updateUser({ bio: value })
        .then(() => {
          toast.success("Bio updated");
          closeRef.current?.click?.();
        })
        .catch(() => toast.error("Something went wrong"));
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" size="sm" className="ml-auto">
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit user bio</DialogTitle>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4">
          <Textarea
            disabled={isPending}
            placeholder="User bio"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            className="resize-none"
          />
          <div className="flex justify-between">
            <DialogClose ref={closeRef} asChild>
              <Button type="button" variant="ghost">
                Cancel
              </Button>
            </DialogClose>
            <Button disabled={isPending} type="submit" variant="primary">
              {isPending ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                "Save"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
