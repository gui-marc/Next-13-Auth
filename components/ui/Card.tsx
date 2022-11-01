type Props = {} & React.HTMLAttributes<HTMLDivElement>;

export default function Card({ ...rest }: Props) {
  return (
    <div
      className="flex flex-col overflow-hidden rounded-md shadow-md bg-zinc-800"
      {...rest}
    />
  );
}
