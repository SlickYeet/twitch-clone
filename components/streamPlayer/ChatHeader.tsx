"use client";

import { Skeleton } from "@/components/ui/Skeleton";
import { ChatToggle } from "./ChatToggle";
import { VariantToggle } from "./VariantToggle";

export const ChatHeader = () => {
  return (
    <div className="relative border-b p-3">
      <div className="absolute left-2 top-2 hidden lg:block">
        <ChatToggle />
      </div>
      <p className="text-center font-semibold text-primary">Stream Chat</p>
      <div className="absolute right-2 top-2">
        <VariantToggle />
      </div>
    </div>
  );
};

export const ChatHeaderSkeleton = () => {
  return (
    <div className="relative hidden border-b p-3 md:block">
      <Skeleton className="absolute right-3 top-3 h-6 w-6" />
      <Skeleton className="absolute left-3 top-3 h-6 w-6" />
      <Skeleton className="mx-auto h-6 w-28" />
    </div>
  );
};
