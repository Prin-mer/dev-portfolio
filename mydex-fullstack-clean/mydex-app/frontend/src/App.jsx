import { Web3Provider } from "./lib/web3";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import SwapForm from "./components/SwapForm";

function App() {
  return (
    <Web3Provider>
      <div className="min-h-screen bg-black text-white p-6">
        <nav className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold">MyDEX</h1>
          <ConnectButton />
        </nav>

        <main className="max-w-xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Swap Tokens Easily
          </h2>
          <p className="text-gray-400 mb-8">
            Powered by PancakeSwap. Fully branded by you.
          </p>

          <SwapForm />
        </main>
      </div>
    </Web3Provider>
  );
}

export default App;
