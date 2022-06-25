import { ethers } from "ethers";
import { Link } from "@remix-run/react";

// TODO
const purpose = null;
const yourLocalBalance = 0;

export default function Index() {
  return (
    <div>
      <div style={{ margin: 32 }}>
        <span style={{ marginRight: 8 }}>📝</span>
        This Is Your App Home. You can start editing it in{" "}
        <span
          className="highlight"
          style={{
            marginLeft: 4,
            /* backgroundColor: "#f9f9f9", */ padding: 4,
            borderRadius: 4,
            fontWeight: "bolder",
          }}
        >
          packages/react-app/src/views/Home.jsx
        </span>
      </div>
      <div style={{ margin: 32 }}>
        <span style={{ marginRight: 8 }}>✏️</span>
        Edit your smart contract{" "}
        <span
          className="highlight"
          style={{
            marginLeft: 4,
            /* backgroundColor: "#f9f9f9", */ padding: 4,
            borderRadius: 4,
            fontWeight: "bolder",
          }}
        >
          YourContract.sol
        </span>{" "}
        in{" "}
        <span
          className="highlight"
          style={{
            marginLeft: 4,
            /* backgroundColor: "#f9f9f9", */ padding: 4,
            borderRadius: 4,
            fontWeight: "bolder",
          }}
        >
          packages/hardhat/contracts
        </span>
      </div>
      {!purpose ? (
        <div style={{ margin: 32 }}>
          <span style={{ marginRight: 8 }}>👷‍♀️</span>
          You haven't deployed your contract yet, run
          <span
            className="highlight"
            style={{
              marginLeft: 4,
              /* backgroundColor: "#f9f9f9", */ padding: 4,
              borderRadius: 4,
              fontWeight: "bolder",
            }}
          >
            yarn chain
          </span>{" "}
          and{" "}
          <span
            className="highlight"
            style={{
              marginLeft: 4,
              /* backgroundColor: "#f9f9f9", */ padding: 4,
              borderRadius: 4,
              fontWeight: "bolder",
            }}
          >
            yarn deploy
          </span>{" "}
          to deploy your first contract!
        </div>
      ) : (
        <div style={{ margin: 32 }}>
          <span style={{ marginRight: 8 }}>🤓</span>
          The "purpose" variable from your contract is{" "}
          <span
            className="highlight"
            style={{
              marginLeft: 4,
              /* backgroundColor: "#f9f9f9", */ padding: 4,
              borderRadius: 4,
              fontWeight: "bolder",
            }}
          >
            {purpose}
          </span>
        </div>
      )}

      <div style={{ margin: 32 }}>
        <span style={{ marginRight: 8 }}>🤖</span>
        An example prop of your balance{" "}
        <span style={{ fontWeight: "bold", color: "green" }}>
          ({ethers.utils.formatEther(yourLocalBalance)})
        </span>{" "}
        was passed into the
        <span
          className="highlight"
          style={{
            marginLeft: 4,
            /* backgroundColor: "#f9f9f9", */ padding: 4,
            borderRadius: 4,
            fontWeight: "bolder",
          }}
        >
          Home.jsx
        </span>{" "}
        component from
        <span
          className="highlight"
          style={{
            marginLeft: 4,
            /* backgroundColor: "#f9f9f9", */ padding: 4,
            borderRadius: 4,
            fontWeight: "bolder",
          }}
        >
          App.jsx
        </span>
      </div>
      <div style={{ margin: 32 }}>
        <span style={{ marginRight: 8 }}>💭</span>
        Check out the <Link to="/hints">"Hints"</Link> tab for more tips.
      </div>
      <div style={{ margin: 32 }}>
        <span style={{ marginRight: 8 }}>🛠</span>
        Tinker with your smart contract using the{" "}
        <Link to="/debug">"Debug Contract"</Link> tab.
      </div>
    </div>
  );
}
