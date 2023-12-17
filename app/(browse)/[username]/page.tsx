import { notFound } from "next/navigation";

import { getUserByUsername } from "@/lib/userService";
import { isFollowingUser } from "@/lib/followService";
import { Actions } from "./_components/actions";
import { isBlockedByUser } from "@/lib/blockService";

interface UserPageProps {
  params: {
    username: string;
  };
}

const UserPage = async ({ params }: UserPageProps) => {
  const user = await getUserByUsername(params.username);

  if (!user) {
    notFound();
  }

  const isFollowing = await isFollowingUser(user.id);
  const isBlocked = await isBlockedByUser(user.id);

  return (
    <div className="flex flex-col gap-y-4">
      <p>Username: {user.username}</p>
      <p>User Id: {user.id}</p>
      <p>Is following: {`${isFollowing}`}</p>
      <p>Is blocked: {`${isBlocked}`}</p>
      <Actions isFollowing={isFollowing} userId={user.id} />
    </div>
  );
};

export default UserPage;
