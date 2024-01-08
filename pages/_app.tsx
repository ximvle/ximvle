import type { AppProps } from "next/app";
import { ThirdwebProvider, coinbaseWallet, embeddedWallet, metamaskWallet, smartWallet, walletConnect } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { SMART_WALLET_ADDRESS } from "../constants/addresses";


// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "polygon";

function MyApp({ Component, pageProps }: AppProps) {
  const smartWalletConfig = {
    factoryAddress: SMART_WALLET_ADDRESS,
    gasless: true,
  }

  const ximvleWallet = smartWallet(embeddedWallet({ recommended: true }), smartWalletConfig);
  ximvleWallet.meta.name = "Ximvle Wallet";
  ximvleWallet.meta.iconURL = "/images/logo-black.png";
  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      activeChain={activeChain}
      supportedWallets={[
        ximvleWallet,
        metamaskWallet(),
        coinbaseWallet(),
        walletConnect(),
      ]}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
