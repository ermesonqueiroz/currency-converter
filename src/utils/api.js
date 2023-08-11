export const REQUESTS = {
  GET_EXCHANGE_RATE: (from, to) => `https://api.freecurrencyapi.com/v1/latest?apikey=${import.meta.env.VITE_APP_FREE_CURRENCY_API_KEY}&currencies=${to}&base_currency=${from}`,
}
