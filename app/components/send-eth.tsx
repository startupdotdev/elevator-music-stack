// import { useEffect } from "react";
// import { hooks, metaMask } from "~/connectors/meta-mask";
// const { useAccounts, useError, useIsActivating, useIsActive } = hooks;

export default function SendEth() {
  // const accounts = useAccounts();
  // const error = useError();
  // const isActivating = useIsActivating();
  // const isActive = useIsActive();

  // function truncateAccount(accounts: string[]): string {
  //   return accounts
  //     .map((account) => `${account.slice(0, 3)}...${account.slice(-4)}`)
  //     .join(",");
  // }

  // useEffect(() => {
  //   void metaMask.connectEagerly();
  // }, []);

  return (
    <div className="box">
      <p>Send to:</p>
      <p>Ether:</p>
    </div>
  );
}
