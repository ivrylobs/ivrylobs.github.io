import { ReactElement } from "react";
import Custom404Layout from "../components/layouts/404";
import type { NextPageWithLayout } from "./_app";

const Custom404: NextPageWithLayout = () => {
  return (
    <>
      <div className="bg-zinc-900 flex flex-col justify-center h-[calc(100vh-80px)] items-center">
        <h1 className="text-zinc-50 text-center text-4xl uppercase">
          Page Not Found
        </h1>
      </div>
    </>
  );
};

Custom404.getLayout = function getLayout(page: ReactElement) {
  return <Custom404Layout>{page}</Custom404Layout>;
};

export default Custom404;
