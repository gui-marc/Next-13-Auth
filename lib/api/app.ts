import { client } from "./client";

export async function login(email: string, password: string) {
  const response = await client.post("/auth/login", { email, password });
  return response.data;
}

export async function register(
  email: string,
  password: string,
  fullName: string
) {
  const res = await client.post("/register", { email, password, fullName });
  return res.data;
}
