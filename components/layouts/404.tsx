import Link from "next/link";

type Props = {
  children: JSX.Element;
};

const Custom404Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <header>
        <div className="flex justify-center h-20 text-zinc-50 text-center items-center uppercase bg-zinc-900 border-b-2 border-zinc-50">
          <Link href="/">
            <a className="bg-orange-500 p-3 rounded-2xl shadow-md shadow-orange-500 border-2 hover:bg-orange-500/50">
              HOME
            </a>
          </Link>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Custom404Layout;
