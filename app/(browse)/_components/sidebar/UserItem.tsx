"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { useSidebar } from "@/store/useSidebar";
import { Skeleton } from "@/components/ui/Skeleton";
import { UserAvatar } from "@/components/UserAvatar";
import { LiveBadge } from "@/components/LiveBadge";

interface UserItemProps {
  username: string;
  imageUrl: string;
  isLive?: boolean;
}

export const UserItem = ({ username, imageUrl, isLive }: UserItemProps) => {
  const pathname = usePathname();

  const { collapsed } = useSidebar((state) => state);

  const href = `/${username}`;
  const isActive = pathname === href;

  return (
    <Button
      asChild
      variant="ghost"
      className={cn(
        "h-12 w-full",
        collapsed ? "justify-center" : "justify-start",
        isActive && "bg-accent",
      )}
    >
      <Link href={href}>
        <div
          className={cn(
            "flex w-full items-center gap-x-4",
            collapsed && "justify-center",
          )}
        >
          <UserAvatar imageUrl={imageUrl} username={username} isLive={isLive} />
          {!collapsed && <p className="truncate uppercase">{username}</p>}
          {!collapsed && isLive && <LiveBadge className="ml-auto" />}
        </div>
      </Link>
    </Button>
  );
};

export const UserItemSkeleton = () => {
  return (
    <>
      <li className="flex items-center gap-x-4 px-3 py-2">
        <Skeleton className="min-h-[32px] min-w-[32px] rounded-full" />
        <div className="flex-1">
          <Skeleton className="h-6" />
        </div>
      </li>
    </>
  );
};
