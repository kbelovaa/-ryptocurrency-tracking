export const getCurrencies = () => fetch('https://api.coincap.io/v2/assets');
export const getCurrencyChangesHistory = (currencyId) => fetch(`https://api.coincap.io/v2/assets/${currencyId}/history?interval=d1`);
