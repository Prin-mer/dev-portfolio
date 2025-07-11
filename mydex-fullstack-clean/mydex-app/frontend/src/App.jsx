
   import { Web3Provider } from "./lib/web3";
import { ConnectButton, useAccount } from "@rainbow-me/rainbowkit";
import SwapForm from "./components/SwapForm";
import { useState } from "react";

function App() {
  const { isConnected } = useAccount();
  const [dark, setDark] = useState(true);

  return (
    <Web3Provider>
      <div className={dark ? "dark" : ""}>
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white p-6 transition-colors duration-300">
          <nav className="flex justify-between items-center mb-10">
            <h1 className="text-3xl font-bold">MyDEX</h1>
            <div className="flex gap-4 items-center">
              <ConnectButton />
              <button
                className="px-3 py-1 border rounded text-sm"
                onClick={() => setDark(!dark)}
              >
                Toggle {dark ? "Light" : "Dark"}
              </button>
            </div>
          </nav>

          <main className="max-w-xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">
              Swap Tokens Easily
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8">
              Powered by PancakeSwap. Fully branded by you.
            </p>

            {!isConnected ? (
              <div className="text-yellow-500 font-medium">
                Please connect your wallet to continue.
              </div>
            ) : (
              <SwapForm />
            )}
          </main>
        </div>
      </div>
    </Web3Provider>
  );
}

export default App;
