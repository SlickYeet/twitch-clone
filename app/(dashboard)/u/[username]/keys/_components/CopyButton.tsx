"use client";

import { useState } from "react";
import { CheckCheck, Copy } from "lucide-react";

import { Button } from "@/components/ui/Button";

interface CopyButtonProps {
  value?: string;
}

export const CopyButton = ({ value }: CopyButtonProps) => {
  const [isCopied, SetIsCopied] = useState<boolean>(false);

  const onCopy = () => {
    if (!value) return;

    SetIsCopied(true);
    navigator.clipboard.writeText(value);
    setTimeout(() => SetIsCopied(false), 1000);
  };

  const Icon = isCopied ? CheckCheck : Copy;

  return (
    <Button
      disabled={!value || isCopied}
      onClick={onCopy}
      variant="ghost"
      size="sm"
    >
      <Icon className="h-4 w-4" />
    </Button>
  );
};
