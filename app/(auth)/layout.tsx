import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen place-items-center">
      <div className="max-w-[450px] px-4 mx-auto w-full">{children}</div>
    </div>
  );
}
