"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import { toast } from "sonner";
import { Heart, HeartOff } from "lucide-react";

import { cn } from "@/lib/utils";
import { onFollow, onUnfollow } from "@/actions/follow";
import { Button } from "@/components/ui/Button";
import { Hint } from "@/components/Hint";
import { Skeleton } from "@/components/ui/Skeleton";

interface ActionsProps {
  hostIdentity: string;
  isFollowing: boolean;
  isHost: boolean;
}

export const Actions = ({
  hostIdentity,
  isFollowing,
  isHost,
}: ActionsProps) => {
  const [isPending, startTransition] = useState();
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const label = isHovering ? "Unfollow" : isFollowing ? "Following" : "Follow";

  const router = useRouter();

  const { userId } = useAuth();

  const handleFollow = () => {
    startTransition(() => {
      onFollow(hostIdentity)
        .then((data) =>
          toast.success(`Your are now following ${data.following.username}`),
        )
        .catch(() => toast.error("Something went wrong"));
    });
  };

  const handleUnfollow = () => {
    startTransition(() => {
      onUnfollow(hostIdentity)
        .then((data) =>
          toast.success(
            `Your are no longer following ${data.following.username}`,
          ),
        )
        .catch(() => toast.error("Something went wrong"));
    });
  };

  const toggleFollow = () => {
    if (!userId) {
      return router.push("/login");
    }

    if (isHost) return;

    if (isFollowing) {
      handleUnfollow();
    } else {
      handleFollow();
    }
  };

  return (
    <>
      <Hint label={label} side="top" asChild>
        <Button
          disabled={isPending || isHost}
          onClick={toggleFollow}
          variant="primary"
          size="sm"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="w-full lg:w-auto"
        >
          {isHovering ? (
            <>
              <HeartOff className="h-4 w-4" />
            </>
          ) : (
            <>
              <Heart
                className={cn(
                  "h-4 w-4",
                  isFollowing ? "fill-white" : "fill-none",
                )}
              />
            </>
          )}
        </Button>
      </Hint>
    </>
  );
};

export const ActionsSkeleton = () => {
  return <Skeleton className="h-9 w-full lg:w-10" />;
};
