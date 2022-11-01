type Props = {} & React.HTMLAttributes<HTMLHeadingElement>;

export default function CardTitle({ ...rest }: Props) {
  return <h3 className="text-lg font-bold text-white" {...rest} />;
}
