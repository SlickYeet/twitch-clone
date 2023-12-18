import { Ghost } from "lucide-react";

interface OfflineVideoProps {
  username: string;
}

export const OfflineVideo = ({ username }: OfflineVideoProps) => {
  return (
    <div className="flex h-full flex-col items-center justify-center space-y-4">
      <Ghost className="h-10 w-10 text-muted-foreground" />
      <p className="uppercase text-muted-foreground">{username} is offline</p>
    </div>
  );
};
