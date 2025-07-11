import { useState } from "react";
import { usePancakeQuote } from "../hooks/usePancakeQuote";

const tokenList = [
  { symbol: "BNB", address: "0xBNB" },
  { symbol: "USDT", address: "0xUSDT" },
];

export default function SwapForm() {
  const [fromToken, setFromToken] = useState("BNB");
  const [toToken, setToToken] = useState("USDT");
  const [amount, setAmount] = useState("");
  const quote = usePancakeQuote(fromToken, toToken, amount);

  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg max-w-md mx-auto">
      <h3 className="text-xl font-bold mb-4">Swap</h3>

      <div className="mb-4">
        <label className="block mb-1">From</label>
        <select
          className="w-full p-2 bg-black border border-gray-700 rounded"
          value={fromToken}
          onChange={(e) => setFromToken(e.target.value)}
        >
          {tokenList.map((token) => (
            <option key={token.symbol} value={token.symbol}>
              {token.symbol}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1">To</label>
        <select
          className="w-full p-2 bg-black border border-gray-700 rounded"
          value={toToken}
          onChange={(e) => setToToken(e.target.value)}
        >
          {tokenList.map((token) => (
            <option key={token.symbol} value={token.symbol}>
              {token.symbol}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1">Amount</label>
        <input
          type="number"
          className="w-full p-2 bg-black border border-gray-700 rounded"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      {quote && (
        <div className="text-sm text-green-400 mb-4">
          You’ll receive approximately: <strong>{quote} {toToken}</strong>
        </div>
      )}

      <button className="w-full bg-yellow-500 text-black font-bold py-2 rounded">
        Swap
      </button>
    </div>
  );
}
