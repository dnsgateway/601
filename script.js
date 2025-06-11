window.onload = function () {
  document.getElementById('onboarding').style.display = 'flex';
};

function closeModal() {
  document.getElementById('onboarding').style.display = 'none';
}

document.getElementById("launchDemoBtn").addEventListener("click", () => {
  document.getElementById("demoApp").scrollIntoView({ behavior: "smooth" });
  fetchRates();
});

function navigate(view) {
  const messages = {
    rates: "📊 Displaying live Forex rates...",
    ai: "🤖 AI trade insight generated...",
    settings: "⚙️ Opening user settings..."
  };
  alert(messages[view]);
}

function fetchRates() {
  fetch('https://api.exchangerate.host/latest?base=USD')
    .then(res => res.json())
    .then(data => {
      document.getElementById("eurusd").textContent = (1 / data.rates.EUR).toFixed(4);
      document.getElementById("usdjpy").textContent = data.rates.JPY.toFixed(2);
      document.getElementById("gbpusd").textContent = (1 / data.rates.GBP).toFixed(4);
    })
    .catch(() => {
      document.getElementById("eurusd").textContent = "1.0843";
      document.getElementById("usdjpy").textContent = "142.89";
      document.getElementById("gbpusd").textContent = "1.2711";
    });
}
// Show onboarding modal on load
window.onload = function () {
  document.getElementById('onboarding').style.display = 'flex';
};

// Close onboarding modal
function closeModal() {
  document.getElementById('onboarding').style.display = 'none';
}

// Scroll to demo and fetch rates
document.getElementById("launchDemoBtn").addEventListener("click", () => {
  document.getElementById("demoApp").scrollIntoView({ behavior: "smooth" });
  fetchRates();
});

// Bottom nav interactions
function navigate(view) {
  const messages = {
    rates: "📊 Displaying live Forex rates...",
    ai: "🤖 AI trade insight generated...",
    settings: "⚙️ Opening user settings..."
  };
  alert(messages[view]);
}

// Fetch real forex rates
function fetchRates() {
  fetch('https://api.exchangerate.host/latest?base=USD')
    .then(res => res.json())
    .then(data => {
      document.getElementById("eurusd").textContent = (1 / data.rates.EUR).toFixed(4);
      document.getElementById("usdjpy").textContent = data.rates.JPY.toFixed(2);
      document.getElementById("gbpusd").textContent = (1 / data.rates.GBP).toFixed(4);
    })
    .catch(() => {
      document.getElementById("eurusd").textContent = "1.0843";
      document.getElementById("usdjpy").textContent = "142.89";
      document.getElementById("gbpusd").textContent = "1.2711";
    });
}
