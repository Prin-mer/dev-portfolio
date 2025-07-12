import axios from "axios";

// PancakeSwap API for token prices
const API_URL = "https://api.pancakeswap.info/api/v2";

export async function getQuote(fromTokenSymbol, toTokenSymbol) {
  try {
    const res = await axios.get(`${API_URL}/tokens`);
    const tokens = res.data.data;

    const fromToken = Object.values(tokens).find(
      (token) => token.symbol === fromTokenSymbol.toUpperCase()
    );

    const toToken = Object.values(tokens).find(
      (token) => token.symbol === toTokenSymbol.toUpperCase()
    );

    if (!fromToken || !toToken) {
      throw new Error("Token not found");
    }

    const quote = Number(fromToken.price) / Number(toToken.price);

    return {
      fromSymbol: fromToken.symbol,
      toSymbol: toToken.symbol,
      quote,
    };
  } catch (err) {
    console.error("Quote error:", err.message);
    return null;
  }
}
