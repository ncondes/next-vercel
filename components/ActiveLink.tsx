import { CSSProperties, FC } from "react";
import Link from "next/link"
import { useRouter } from "next/router";


interface Props {
   href: string;
   text: string;
}

const style: CSSProperties = {
   color: "#0070F3",
   textDecoration: "underline",
};

export const ActiveLink: FC<Props> = ({ href, text }) => {
   const { asPath } = useRouter();

   return (
      <Link href={ href }>
         <a style={ asPath === href ? style : undefined }>{ text }</a>
      </Link>
   )
}
