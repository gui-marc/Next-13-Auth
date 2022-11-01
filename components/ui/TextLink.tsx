import Link, { LinkProps } from "next/link";

const TextLink = Link;

TextLink.defaultProps = {
  ...Link.defaultProps,
  className:
    "text-indigo-500 transition-colors duration-100 hover:text-indigo-400",
};

export default TextLink;
