import { useState } from "react";
import { getQuote } from "../lib/pancakeswap";

function SwapForm() {
  const [fromToken, setFromToken] = useState("BNB");
  const [toToken, setToToken] = useState("USDT");
  const [amount, setAmount] = useState("1");
  const [quoteResult, setQuoteResult] = useState(null);

  const handleQuote = async () => {
    const quote = await getQuote(fromToken, toToken);
    if (quote) {
      setQuoteResult({
        ...quote,
        amountOut: (Number(amount) * quote.quote).toFixed(6),
      });
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md space-y-4">
      <div className="flex gap-2">
        <input
          className="border px-2 py-1 w-full rounded"
          value={fromToken}
          onChange={(e) => setFromToken(e.target.value)}
          placeholder="From Token (e.g. BNB)"
        />
        <input
          className="border px-2 py-1 w-full rounded"
          value={toToken}
          onChange={(e) => setToToken(e.target.value)}
          placeholder="To Token (e.g. USDT)"
        />
      </div>

      <input
        className="border px-2 py-1 w-full rounded"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        type="number"
      />

      <button
        onClick={handleQuote}
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        Get Quote
      </button>

      {quoteResult && (
        <div className="text-green-600 font-semibold mt-4">
          {amount} {quoteResult.fromSymbol} ≈ {quoteResult.amountOut}{" "}
          {quoteResult.toSymbol}
        </div>
      )}
    </div>
  );
}

export default SwapForm;

       

