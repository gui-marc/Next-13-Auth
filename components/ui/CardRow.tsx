type Props = {
  size?: "sm" | "md";
} & React.HTMLAttributes<HTMLDivElement>;

export default function CardRow({ ...rest }: Props) {
  return (
    <div
      {...rest}
      className={`p-6 border-t-[1px] border-t-zinc-700 first:border-t-0 ${rest.className}`}
    />
  );
}
