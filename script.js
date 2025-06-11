document.getElementById("launchDemoBtn").addEventListener("click", () => {
  document.getElementById("demoApp").scrollIntoView({ behavior: "smooth" });
});

function showAlert(section) {
  const messages = {
    Rates: "📊 Displaying live Forex rates...",
    AI: "🤖 AI trade insight generated...",
    Settings: "⚙️ Opening user settings..."
  };
  alert(messages[section] || "Feature clicked!");
}
