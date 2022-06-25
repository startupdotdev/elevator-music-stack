import { StaticJsonRpcProvider } from "@ethersproject/providers";
import { useEthersAdaptorFromProviderOrSigners } from "eth-hooks";
import {
  TEthersModalConnector,
  useEthersAppContext,
  EthersModalConnector,
} from "eth-hooks/context";
import { useEffect } from "react";

import {
  TCreateEthersModalConnector,
  TEthersAdaptor,
  TEthersProvider,
  TNetworkInfo,
} from "eth-hooks/models";

export interface IScaffoldAppProviders {
  currentProvider: TEthersProvider | undefined;
  targetNetwork: TNetworkInfo;
  mainnetAdaptor: TEthersAdaptor | undefined;
  localAdaptor: TEthersAdaptor | undefined;
}

export const useProviders = (config: {
  mainnetProvider: StaticJsonRpcProvider | undefined;
  localProvider: StaticJsonRpcProvider | undefined;
  connectToBurnerAutomatically: boolean;
}): IScaffoldAppProviders => {
  const ethersAppContext = useEthersAppContext();
  const [mainnetAdaptor] = useEthersAdaptorFromProviderOrSigners(
    config.mainnetProvider
  );
  const [localAdaptor] = useEthersAdaptorFromProviderOrSigners(
    config.localProvider
  );

  const hasLocalProvider = config?.localProvider !== undefined;

  useEffect(() => {
    /**
     * This is for to auto connect to the burner wallet when there is no cached provier
     * you can turn it off by settting {@link const_ConnectToBurnerOnFirstLoad} to false
     * @param connector
     * @returns
     */
    const autoConnectToBurner = (
      connector: TEthersModalConnector | undefined
    ): TEthersModalConnector | undefined => {
      let newConnector = connector;
      if (
        config.connectToBurnerAutomatically &&
        connector &&
        connector?.loadWeb3Modal
      ) {
        connector.loadWeb3Modal();
        if (connector != null && !connector.hasCachedProvider()) {
          newConnector = new EthersModalConnector(
            {},
            { reloadOnNetworkChange: false, immutableProvider: false }
          );
        }
      }
      return newConnector;
    };

    if (!ethersAppContext.active && createLoginConnector) {
      let connector = createLoginConnector(undefined);
      connector = autoConnectToBurner(connector);
      if (connector) void ethersAppContext.activate(connector);
    }
  }, [config.connectToBurnerAutomatically]);

  return {
    currentProvider: ethersAppContext.provider ?? config.localProvider,
    mainnetAdaptor: mainnetAdaptor,
    localAdaptor: localAdaptor,
    targetNetwork: {
      name: "localhost",
      color: "#666666",
      chainId: 31337,
      blockExplorer: "",
      url: "http://localhost:8545",
    },
  };
};
