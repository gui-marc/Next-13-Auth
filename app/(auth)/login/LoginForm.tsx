"use client";

import { Button } from "@components/form/Button";
import Input from "@components/form/Input";
import PasswordInput from "@components/form/PasswordInput";
import { login } from "@lib/api/app";
import { useAsync } from "@lib/hooks/useAsync";
import React, { useRef, useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { data, error, loading, onAction } = useAsync(() =>
    login(email, password)
  );

  return (
    <form className="grid gap-5" onSubmit={onAction}>
      <Input
        onChange={(e) => setEmail(e.target.value)}
        placeholder="example@email.com"
      />
      <PasswordInput onChange={(e) => setPassword(e.target.value)} />
      <Button type="submit" isLoading={loading} fullWidth>
        Login
      </Button>
    </form>
  );
}

export default LoginForm;
