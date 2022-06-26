import { BigNumber, ethers, Signer } from "ethers";
import { useState, useEffect } from "react";
import { hooks as Web3Hooks } from "~/connectors/meta-mask";
import { useBalance } from "./useBalance";
// import { useInterval } from "./use-interval";
import { useWeb3Signer } from "./useWeb3Signer";

export interface DappContextType {
  updateTransaction: Function;
  balance: number;
}

export function useDappContext() {
  let [currentTransaction, updateTransaction] = useState<string | null>(null);
  let [dappContext, setDappContext] = useState<DappContextType | null>(null);
  const chainId = Web3Hooks.useChainId();
  let provider = Web3Hooks.useProvider();
  const signer = useWeb3Signer(provider);
  let balance = useBalance();

  // TODO: organize maybe
  // let [balance, setBalance] = useState<number>(0);
  //   let pollingKey = useInterval(10_000);

  useEffect(() => {
    if (!signer || !chainId || !provider) {
      return;
    }

    setDappContext({
      updateTransaction,
      balance,
    });
  }, [
    signer,
    // pollingKey,
    chainId,
    currentTransaction,
    balance,
  ]);

  return dappContext;
}
