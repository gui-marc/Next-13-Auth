import { Toaster } from "react-hot-toast";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="antialiased bg-zinc-900 text-zinc-300">
      <head>
        <title>Auth Test With Next 13</title>
      </head>
      <Toaster position="top-center" />
      <body>{children}</body>
    </html>
  );
}
