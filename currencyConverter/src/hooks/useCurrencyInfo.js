import { useEffect, useState } from "react";

function useCurrencyInfo(fromCurrency, toCurrency) {
  const [rate, setRate] = useState(null);

  useEffect(() => {
    if (!fromCurrency || !toCurrency) return;

    fetch(`https://api.frankfurter.app/latest?from=${fromCurrency}&to=${toCurrency}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        // Data example: { amount: 1, base: "USD", date: "2023-09-11", rates: { EUR: 0.85 } }
        setRate(data.rates[toCurrency]);
        console.log(`Rate from ${fromCurrency} to ${toCurrency}:`, data.rates[toCurrency]);
      })
      .catch((err) => console.error("Error fetching currency data:", err));
  }, [fromCurrency, toCurrency]);

  return rate;
}

export default useCurrencyInfo;
