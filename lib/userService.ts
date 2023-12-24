import { db } from "@/lib/db";

export const getUserByUsername = async (username: string) => {
  const dbUser = await db.user.findUnique({
    where: { username },
    include: {
      stream: true,
      _count: {
        select: {
          followedBy: true,
        },
      },
    },
  });

  return dbUser;
};

export const getUserById = async (id: string) => {
  const dbUser = await db.user.findUnique({
    where: { id },
    include: {
      stream: true,
    },
  });

  return dbUser;
};
