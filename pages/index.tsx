/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Profile from "../components/Profile";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Me | Roongpetch K.</title>
        <meta charSet="utf-8"></meta>
        <meta
          name="description"
          content="Get to know about me at http://ivrylobs.github.io/me"
        />
        <meta name="theme-color" content="#18181b"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        ></link>
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <main className="">
        <div className="grid grid-cols-1 lg:grid-cols-5">
          <div className="col-span-2 flex p-3 flex-col items-center lg:justify-end lg:items-end bg-zinc-900 pt-16 lg:p-16 lg:h-screen ">
            <Profile />
          </div>
          <div className="grid grow p-12 col-span-3 place-content-center">
            <a href="https://spiritpurge.com/">
              <div className="flex flex-col justify-center bg-zinc-800 p-3 drop-shadow-2xl rounded-2xl w-56 h-56 ">
                <img
                  src="/sp/Logo.png"
                  alt=""
                  className="h-32 mx-auto object-contain"
                />
                <div className="font-name text-center text-zinc-50 text-xl py-3">
                  SPIRIT PURGE
                </div>
              </div>
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
