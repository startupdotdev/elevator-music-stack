import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { useEffect, useState } from "react";

const INFURA_ID = "709bb38868e74ec589d302a96b94450b";

/**
 * This because of infinite pain. AMA
 */
const providerOptions =
  typeof window !== "undefined"
    ? {
        walletconnect: {
          package: window.WalletConnectProvider, // required
          options: {
            infuraId: INFURA_ID,
          },
        },
      }
    : {};

async function connectWallet(web3Modal) {
  const instance = await web3Modal.connect();
  const provider = new ethers.providers.Web3Provider(instance);
  const signer = provider.getSigner();
  console.log(signer, provider);
}

export default function ConnectWallet() {
  let [web3Modal, setWeb3Modal] = useState();

  useEffect(() => {
    let w3m;
    try {
      w3m = new Web3Modal({
        disableInjectedProvider: true,
        network: "mainnet", // optional
        cacheProvider: false, // optional
        providerOptions, // required
      });
    } catch (e) {
      debugger;
      console.error(e);
    }

    // TODO: While testing
    // w3m.clearCachedProvider();

    setWeb3Modal(w3m);
  }, []);

  return (
    <div
      className="box bg-pink-300 p-4 inline-block rounded"
      onClick={() => connectWallet(web3Modal)}
    >
      Connecccct Wallet
    </div>
  );
}
