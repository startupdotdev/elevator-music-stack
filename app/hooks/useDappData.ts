import { useState, useEffect } from "react";
import { useBalance } from "./useBalance";
import { DappContextType } from "./useDappContext";

interface DappDataType {
  balance: number;
}

function getDefaultDappData() {
  return {
    balance: 0,
  };
}

export function useDappData(dappContext: DappContextType): DappDataType {
  let [dappData, setDappData] = useState<DappDataType>(getDefaultDappData());
  // let balance = useBalance();

  const { web3Hooks } = dappContext;
  const provider = web3Hooks.useProvider();
  // const chainId = web3Hooks?.useChainId();

  useEffect(() => {
    // TODO: Can we guarantee these by now?
    // if (!signer || !chainId || !provider) {
    //   return;
    // }
    /**
     * Can we provide a set of hooks from here that
     * are appropriately connected to provider / signer?
     *
     * */
    // setDappData({
    //   balance,
    // });
  }, []);

  return dappData;
}
