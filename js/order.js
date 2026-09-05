(() => {
  const form = document.getElementById("order-form");
  const ticket = document.getElementById("ticket");
  const qty = document.getElementById("qty");
  if (!form || !ticket || !qty) return;

  const KEY = "capycoffee-ticket";

  const render = (data) => {
    ticket.innerHTML = `
      <p class="kicker">Counter ticket</p>
      <h2>${data.id}</h2>
      <p>SKU <strong>Freebird</strong></p>
      <dl>
        <dt>Roast</dt><dd>${data.roast}</dd>
        <dt>Timing</dt><dd>${data.timing}</dd>
        <dt>Grind</dt><dd>${data.grind}</dd>
        <dt>Bag</dt><dd>${data.size} × ${data.qty}</dd>
        <dt>Brew</dt><dd>${data.brew || "—"}</dd>
        <dt>Cup</dt><dd>${data.cup ? "Tasting cup add-on" : "Beans only"}</dd>
      </dl>
      <p>Held in this browser session. Not a charge.</p>
    `;
  };

  const saved = sessionStorage.getItem(KEY);
  if (saved) {
    try { render(JSON.parse(saved)); } catch { /* ignore bad session data */ }
  }

  document.querySelectorAll("[data-qty]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const next = Number(qty.value) + Number(btn.dataset.qty);
      qty.value = String(Math.min(12, Math.max(1, next)));
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) {
      const bad = form.querySelector(":invalid");
      bad?.focus();
      return;
    }
    const data = new FormData(form);
    const ticketData = {
      id: "CAPY-" + Math.random().toString(36).slice(2, 6).toUpperCase(),
      roast: data.get("roast"),
      timing: data.get("timing"),
      grind: data.get("grind"),
      size: data.get("size"),
      qty: data.get("qty"),
      brew: data.get("brew"),
      cup: Boolean(data.get("cup")),
    };
    sessionStorage.setItem(KEY, JSON.stringify(ticketData));
    render(ticketData);
    ticket.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "nearest" });
  });
})();
