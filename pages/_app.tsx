import "../styles/globals.css";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

import "@rainbow-me/rainbowkit/styles.css";
import {
  Chain,
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const bscConfig: Chain = {
  id: 56,
  name: "BSC",
  nativeCurrency: { name: "BNB ", symbol: "BNB", decimals: 18 },
  network: "BNB Smart Chain",
  rpcUrls: { default: "https://bsc-dataseed.binance.org/" },
  iconUrl: "https://www.bscscan.com/images/svg/brands/bnb.svg?v=1.3",
  iconBackground: "#404040",
};

const bscTestnetConfig: Chain = {
  id: 97,
  name: "BSC (Testnet)",
  nativeCurrency: { name: "BNB ", symbol: "BNB", decimals: 18 },
  network: "BNB Smart Chain",
  rpcUrls: { default: "https://data-seed-prebsc-1-s1.binance.org:8545/" },
  iconUrl: "https://www.bscscan.com/images/svg/brands/bnb.svg?v=1.3",
  iconBackground: "#404040",
  testnet: true,
};

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, bscConfig, bscTestnetConfig],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Me | Roongpetch K.",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} coolMode={true} theme={darkTheme()}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
