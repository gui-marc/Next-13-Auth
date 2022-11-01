import { prisma } from "@lib/db";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password, fullName } = req.body;

  const found = await prisma.user.findUnique({ where: { email } });

  if (found) return res.status(400).send({ email: "User already exists" });

  const user = await prisma.user.create({
    data: { email, password: await bcrypt.hash(password, 10), fullName },
  });

  return res.status(200).send({
    user: {
      ...user,
      password: null,
    },
  });
}
