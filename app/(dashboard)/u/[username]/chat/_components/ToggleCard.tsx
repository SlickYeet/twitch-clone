"use client";

import { useTransition } from "react";
import { toast } from "sonner";

import { updateStream } from "@/actions/stream";
import { Switch } from "@/components/ui/Switch";
import { Skeleton } from "@/components/ui/Skeleton";

type FieldTypes = "isChatEnabled" | "isChatDelayed" | "isChatFollowersOnly";

interface ToggleCardProps {
  label: string;
  value: boolean;
  field: FieldTypes;
}

export const ToggleCard = ({
  label,
  value = false,
  field,
}: ToggleCardProps) => {
  const [isPending, startTransition] = useTransition();

  const onChange = async () => {
    startTransition(() => {
      updateStream({ [field]: !value })
        .then(() => toast.success("Chat settings updated"))
        .catch(() => toast.error("Something went wrong"));
    });
  };

  return (
    <div className="rounded-xl bg-muted p-6">
      <div className="flex items-center justify-between">
        <p className="shrink-0 font-semibold">{label}</p>
        <div className="space-y-2">
          <Switch
            disabled={isPending}
            onCheckedChange={onChange}
            checked={value}
          >
            {value ? "On" : "Off"}
          </Switch>
        </div>
      </div>
    </div>
  );
};

export const ToggleCardSkeleton = () => {
  return <Skeleton className="w-full rounded-xl p-10" />;
};
