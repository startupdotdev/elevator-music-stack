import { BigNumber, ethers, Signer } from "ethers";
import { useState, useEffect } from "react";
import { hooks as Web3Hooks } from "~/connectors/meta-mask";
// import { useInterval } from "./use-interval";
import { useWeb3Signer } from "./useWeb3Signer";

async function getBalance({
  signer,
  provider,
}: {
  signer: Signer;
  provider: ethers.providers.Web3Provider;
}): Promise<number> {
  let address = await signer.getAddress();
  let bnBalance = await provider.getBalance(address);
  return parseFloat(ethers.utils.formatUnits(bnBalance, 18));
}

export function useBalance() {
  let provider = Web3Hooks.useProvider();
  let signer = useWeb3Signer(provider);

  let [balance, setBalance] = useState<number>(0);

  useEffect(() => {
    if (!signer || !provider) {
      return;
    }

    getBalance({ signer, provider }).then((b) => setBalance(b));
  }, [signer, provider]);

  return balance;
}
