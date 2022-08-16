/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Profile from "../components/Profile";
import Head from "next/head";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Icon } from "@iconify/react";
import {
  useAccount,
  usePrepareSendTransaction,
  useSendTransaction,
} from "wagmi";
import { parseEther } from "ethers/lib/utils";

const Home: NextPage = () => {
  const { isConnected } = useAccount();

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
      <main>
        <div className="absolute top-0 right-0 p-3 flex">
          <DonateSection />
          <ConnectButton.Custom>
            {({
              account,
              chain,
              openAccountModal,
              openChainModal,
              openConnectModal,
              mounted,
            }) => {
              return (
                <div
                  {...(!mounted && {
                    "aria-hidden": true,
                    style: {
                      opacity: 0,
                      pointerEvents: "none",
                      userSelect: "none",
                    },
                  })}
                >
                  {(() => {
                    if (!mounted || !account || !chain || !isConnected) {
                      return (
                        <button
                          onClick={openConnectModal}
                          type="button"
                          className="flex h-10 text-sm items-center bg-zinc-800 text-zinc-50 drop-shadow-xl p-2 rounded-[11px]"
                        >
                          <Icon icon="bxs:wallet" className="w-5 h-5 mr-1" />
                          Connect Wallet
                        </button>
                      );
                    }

                    if (chain.unsupported) {
                      return (
                        <button
                          onClick={openChainModal}
                          type="button"
                          className="flex h-10 text-sm items-center bg-red-600 text-zinc-50 drop-shadow-xl p-2 rounded-[11px]"
                        >
                          <Icon
                            icon="akar-icons:circle-alert-fill"
                            className="w-5 h-5 mr-1"
                          />
                          Wrong network
                        </button>
                      );
                    }

                    return (
                      <div className="text-ellipsis overflow-hidden flex h-10 items-center gap-1 pl-2  rounded-[11px] text-zinc-50 drop-shadow-xl bg-zinc-700 text-sm">
                        <button
                          onClick={openChainModal}
                          style={{ display: "flex", alignItems: "center" }}
                          type="button"
                        >
                          {chain.hasIcon && chain.iconUrl && (
                            <img
                              alt={chain.name ?? "Chain icon"}
                              src={chain.iconUrl}
                              style={{
                                width: 24,
                                height: 24,
                                marginRight: "4px",
                              }}
                            />
                          )}
                          <div className="md:hidden">
                            {" "}
                            {account.displayBalance
                              ? ` (${account.displayBalance})`
                              : ""}
                          </div>
                          <div className="hidden md:flex">{chain.name}</div>
                        </button>

                        <button
                          onClick={openAccountModal}
                          type="button"
                          className="text-ellipsis text-sm h-10 overflow-hidden flex items-center bg-zinc-800 text-zinc-50 p-2 rounded-[11px]"
                        >
                          <Icon icon="bxs:wallet" className="w-5 h-5 mr-1" />
                          {account.displayName}
                          <div className="hidden md:flex">
                            {account.displayBalance
                              ? ` (${account.displayBalance})`
                              : ""}
                          </div>
                        </button>
                      </div>
                    );
                  })()}
                </div>
              );
            }}
          </ConnectButton.Custom>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5">
          <div className="col-span-2 flex p-3 flex-col items-center lg:justify-end lg:items-end bg-zinc-900 pt-32 lg:p-16 lg:h-screen ">
            <Profile />
          </div>
          <div className="grid grow p-12 col-span-3 place-content-center">
            <a href="https://spiritpurge.com/">
              <div className="flex flex-col justify-center bg-zinc-800 hover:bg-zinc-800/70 p-3 drop-shadow-2xl rounded-2xl w-56 h-56 ">
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

function DonateSection() {
  const { isConnected } = useAccount();
  const { config } = usePrepareSendTransaction({
    request: {
      to: "0x4a5096a3889c08A512552E2881b6beD328E1D12C",
      value: parseEther("1"),
    },
  });
  const { sendTransaction } = useSendTransaction(config);

  return (
    <div className="flex items-center">
      <button
        disabled={!isConnected}
        className="flex h-10 items-center bg-rose-400 drop-shadow-xl disabled:drop-shadow-none text-zinc-800 text-sm p-2 rounded-[11px] disabled:bg-rose-100 disabled:text-zinc-400 font-bold mr-2"
        onClick={() => sendTransaction?.()}
      >
        Donate
        <Icon icon="bxs:donate-heart" className="w-5 h-5 ml-1" />
      </button>
    </div>
  );
}

export default Home;
