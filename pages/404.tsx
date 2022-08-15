/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import { ReactElement } from "react";
import Custom404Layout from "../components/layouts/404";
import type { NextPageWithLayout } from "./_app";

const Custom404: NextPageWithLayout = () => {
  return (
    <>
      <div className="bg-zinc-900 flex flex-col justify-center h-[calc(100vh-80px)] items-center pb-20">
        <a href="/">
          <img
            src="/android-chrome-512x512.png"
            alt=""
            className="w-56 ring-1 mb-10 ring-zinc-50"
          />
        </a>
        <h1 className="text-zinc-50 text-center font-raleway text-4xl uppercase">
          what you are looking for?
        </h1>
        <h1 className="text-zinc-50 text-center font-jp text-4xl">
          なに さがしてるの？
        </h1>
      </div>
    </>
  );
};

Custom404.getLayout = function getLayout(page: ReactElement) {
  return <Custom404Layout>{page}</Custom404Layout>;
};

export default Custom404;
