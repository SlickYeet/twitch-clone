"use client";

import { Input } from "@/components/ui/Input";

import { CopyButton } from "./CopyButton";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface KeyCardProps {
  value: string | null;
}

export const KeyCard = ({ value }: KeyCardProps) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="rounded-xl bg-muted p-6">
      <div className="flex items-start gap-x-10">
        <p className="font-semibold shrink-0">Stream Key</p>
        <div className="space-y-2 w-full">
          <div className="w-full flex items-center gap-x-2">
            <Input
              value={value || ""}
              type={show ? "text" : "password"}
              disabled
              placeholder="Stream key"
            />
            <CopyButton value={value || ""} />
          </div>
          <Button
            onClick={() => {
              setShow(!show);
            }}
            size="sm"
            variant="link"
          >
            {show ? (
              <div className="flex">
                <p className="">Hide</p>
                <EyeOff className="h-5 w-5 ml-2" />
              </div>
            ) : (
              <div className="flex">
                <p className="">Show</p>
                <Eye className="h-5 w-5 ml-2" />
              </div>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};
