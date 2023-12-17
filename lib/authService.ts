import { currentUser } from "@clerk/nextjs";

import { db } from "@/lib/db";

export const getSelf = async () => {
  const self = await currentUser();

  if (!self || !self.username) {
    throw new Error("Unauthorized");
  }

  const dbUser = await db.user.findUnique({
    where: {
      externalUserId: self.id,
    },
  });

  if (!dbUser) {
    throw new Error("Not found");
  }

  return dbUser;
};

export const getSelfByUsername = async (username: string) => {
  const self = await currentUser();

  if (!self || !self.username) {
    throw new Error("Unauthorized");
  }

  const dbUser = await db.user.findUnique({
    where: { username },
  });

  if (!dbUser) {
    throw new Error("User not found");
  }

  if (self.username !== dbUser.username) {
    throw new Error("Unauthorized");
  }

  return dbUser;
};
