import { prisma } from "@lib/db";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import bcrypt, { compare } from "bcrypt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(404).send({ email: "User not found" });

  if (!(await bcrypt, compare(password, user.password)))
    return res.status(401).send({ invalid: "Invalid Credentials" });

  return res.status(200).send({
    user: {
      ...user,
      password: null,
    },
  });
}
