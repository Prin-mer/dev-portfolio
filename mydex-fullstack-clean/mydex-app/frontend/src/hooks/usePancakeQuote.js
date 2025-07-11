import { useEffect, useState } from "react";

export function usePancakeQuote(fromToken, toToken, amount) {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    if (!amount || isNaN(amount)) {
      setQuote(null);
      return;
    }

    const simulatedRate = 0.91;
    const result = (parseFloat(amount) * simulatedRate).toFixed(4);
    setQuote(result);
  }, [fromToken, toToken, amount]);

  return quote;
}
