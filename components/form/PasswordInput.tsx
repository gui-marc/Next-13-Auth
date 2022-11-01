"use client";

import React from "react";
import { Button } from "./Button";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

type Props = {} & React.InputHTMLAttributes<HTMLInputElement>;

export default function PasswordInput({ ...rest }: Props) {
  const [show, setShow] = React.useState(false);
  const toggleShow = () => setShow((p) => !p);
  return (
    <div className="flex items-center w-full h-10 bg-transparent border-[1px] border-zinc-600 rounded-sm transition-all duration-100 placeholder:text-zinc-400 focus:ring-2 focus:ring-zinc-700 outline-none focus:border-white relative">
      <input
        className="w-full h-full px-4 bg-transparent border-none outline-none appearance-none"
        {...rest}
        type={show ? "text" : "password"}
        placeholder="**********"
      />
      <Button
        colorScheme="neutral"
        variant="ghost"
        className="absolute top-0 right-0 w-10 px-0"
        onClick={toggleShow}
        type="button"
      >
        <div className="w-4 h-4">{show ? <EyeIcon /> : <EyeSlashIcon />}</div>
      </Button>
    </div>
  );
}
