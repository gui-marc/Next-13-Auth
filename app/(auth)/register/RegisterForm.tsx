"use client";

import { Button } from "@components/form/Button";
import Input from "@components/form/Input";
import PasswordInput from "@components/form/PasswordInput";
import { register } from "@lib/api/app";
import { useAsync } from "@lib/hooks/useAsync";
import React, { useState } from "react";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const { loading, error, onAction } = useAsync(() =>
    register(email, password, fullName)
  );

  return (
    <form className="grid gap-5" onSubmit={onAction}>
      <Input
        onChange={(e) => setFullName(e.target.value)}
        placeholder="Your full name"
      />
      <Input
        onChange={(e) => setEmail(e.target.value)}
        placeholder="example@gmail.com"
      />
      <PasswordInput onChange={(e) => setPassword(e.target.value)} />
      <Button isLoading={loading} fullWidth>
        Submit
      </Button>
    </form>
  );
}

export default RegisterForm;
