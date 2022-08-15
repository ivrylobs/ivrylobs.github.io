import Link from "next/link";

type Props = {
  children: JSX.Element;
};

const Custom404Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <header>
        <div className="flex justify-center h-20 text-zinc-50 text-center items-center uppercase bg-zinc-900"></div>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Custom404Layout;
