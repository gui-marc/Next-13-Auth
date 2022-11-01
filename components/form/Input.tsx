"use client";

type Props = {} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ ...rest }: Props) {
  return (
    <input
      className="flex items-center w-full h-10 px-4 bg-transparent border-[1px] border-zinc-600 rounded-sm transition-all duration-100 placeholder:text-zinc-400 focus:ring-2 focus:ring-zinc-700 outline-none focus:border-white"
      {...rest}
    />
  );
}
