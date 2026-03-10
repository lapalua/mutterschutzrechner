// Container wählen
const container = document.getElementById("mutterschutz-container");

// HTML des Rechners dynamisch erzeugen
container.innerHTML = `
<div class="app-wrapper">
  <div class="calculator-container">
    <h1 class="headline-cta">Mutterschutzrechner</h1>
    <p class="subtitle">Berechnen Sie Ihre Mutterschutzfristen</p>

    <div class="form-group">
      <label for="et-date">Errechneter Entbindungstermin (ET)</label>
      <input type="date" id="et-date" required>
    </div>

    <div class="form-group">
      <label for="actual-date">Tatsächlicher Entbindungstermin</label>
      <input type="date" id="actual-date">
    </div>

    <div class="checkbox-wrapper inline-checkboxes">
      <div class="checkbox-group">
        <input type="checkbox" id="multiple-birth">
        <label for="multiple-birth">Mehrlingsgeburt</label>
      </div>
      <div class="checkbox-group">
        <input type="checkbox" id="premature-birth">
        <label for="premature-birth">Medizinische Frühgeburt</label>
      </div>
      <div class="checkbox-group">
        <input type="checkbox" id="disability">
        <label for="disability">Behinderung</label>
      </div>
    </div>

    <div class="button-group">
      <button class="btn-calculate" id="calculate-btn">Berechnen</button>
      <button class="btn-reset" id="reset-btn">Zurücksetzen</button>
    </div>

    <div class="error-message" id="error-message"></div>

    <div class="result-section" id="results">
      <div class="result-item">
        <div class="result-label">Beginn der Mutterschutzfrist</div>
        <div class="result-value" id="start-date"></div>
      </div>

      <div class="result-item">
        <div class="result-label">Ende der Mutterschutzfrist</div>
        <div class="result-value" id="end-date"></div>
      </div>

      <div class="result-item">
        <div class="result-label">Gesamtdauer der Mutterschutzfrist</div>
        <div class="result-value" id="total-duration"></div>
      </div>

      <div class="info-box" id="info-message"></div>
    </div>
  </div>
</div>
`;

// CSS dynamisch laden
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "https://lapalua.github.io/mutterschutzrechner/style.css";
document.head.appendChild(link);

// Rechner-Logik
document.getElementById("calculate-btn").addEventListener("click", function() {
  const etDate = new Date(document.getElementById("et-date").value);
  if(!etDate) return;

  let startDate = new Date(etDate);
  startDate.setDate(startDate.getDate() - 42);

  let endDate = new Date(etDate);
  endDate.setDate(endDate.getDate() + 56);

  document.getElementById("start-date").textContent = startDate.toLocaleDateString();
  document.getElementById("end-date").textContent = endDate.toLocaleDateString();
  document.getElementById("total-duration").textContent = "98 Tage";
});
