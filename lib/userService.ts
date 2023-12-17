import { db } from "@/lib/db";

export const getUserByUsername = async (username: string) => {
  const dbUser = await db.user.findUnique({
    where: {
      username,
    },
  });

  return dbUser;
};
