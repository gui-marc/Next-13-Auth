type Props = {} & React.HTMLAttributes<HTMLParagraphElement>;

export default function CardDescription({ ...rest }: Props) {
  return <p className="" {...rest} />;
}
