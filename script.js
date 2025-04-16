const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");
const amount = document.getElementById("amount");
const result = document.getElementById("result");
const rateInfo = document.getElementById("rate-info");
const swap = document.getElementById("swap");

const fromFlag = document.getElementById("from-flag");
const toFlag = document.getElementById("to-flag");

// Currency list with country codes for flags
const currencies = {
  USD: "us",
  EUR: "eu",
  GBP: "gb",
  PKR: "pk",
  INR: "in",
  AED: "ae",
  JPY: "jp",
  CAD: "ca"
};

// from to currency dropdowns
for (let code in currencies) {
  const option1 = new Option(code, code);
  const option2 = new Option(code, code);
  fromCurrency.append(option1);
  toCurrency.append(option2);
}
fromCurrency.value = "USD";
toCurrency.value = "PKR";

function updateFlags() {
  fromFlag.src = `https://flagcdn.com/48x36/${currencies[fromCurrency.value]}.png`;
  toFlag.src = `https://flagcdn.com/48x36/${currencies[toCurrency.value]}.png`;
}

//  using ExchangeRate API
async function convertCurrency() {
  const from = fromCurrency.value;
  const to = toCurrency.value;
  const amountVal = parseFloat(amount.value);

  if (!amountVal || amountVal <= 0) {
    result.value = "";
    rateInfo.innerText = "Please enter a valid amount.";
    return;
  }

  try {
    const apiKey = "YOUR_API_KEY"; // Replace with your key
    const res = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${from}`);
    const data = await res.json();
    const rate = data.conversion_rates[to];
    const converted = amountVal * rate;

    result.value = converted.toFixed(2);
    rateInfo.innerText = `1 ${from} = ${rate.toFixed(4)} ${to}`;
  } catch (error) {
    result.value = "";
    rateInfo.innerText = "API error. Try again.";
    console.error(error);
  }
}

// Event Listeners adding
fromCurrency.addEventListener("change", () => {
  updateFlags();
  convertCurrency();
});
toCurrency.addEventListener("change", () => {
  updateFlags();
  convertCurrency();
});
amount.addEventListener("input", convertCurrency);

swap.addEventListener("click", () => {
  [fromCurrency.value, toCurrency.value] = [toCurrency.value, fromCurrency.value];
  updateFlags();
  convertCurrency();
});

// change Theme
document.getElementById("themeSwitch").addEventListener("change", () => {
  document.body.classList.toggle("light");
});

updateFlags();
convertCurrency();
