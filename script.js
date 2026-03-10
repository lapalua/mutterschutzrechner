// Container wählen
const container = document.getElementById("mutterschutz-container");

// HTML des Rechners einfügen
container.innerHTML = `
  <div class="app-wrapper">
    <div class="calculator-container">
      <h1 id="page-title">Mutterschutzrechner</h1>
      <p class="subtitle">Berechnen Sie Ihre Mutterschutzfristen nach deutschem Recht</p>
      <div class="form-group">
        <label for="et-date">Errechneter Entbindungstermin (ET)</label>
        <input type="date" id="et-date" required>
      </div>
      <div class="form-group">
        <label for="actual-date">Tatsächlicher Entbindungstermin</label>
        <input type="date" id="actual-date">
      </div>
      <div class="form-group">
        <div class="checkbox-wrapper">
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

// -----------------------------------
// Jetzt folgt das JavaScript, alles ohne <script> Tags
// -----------------------------------

const defaultConfig = {
    page_title: "Mutterschutzrechner",
    calculate_button: "Berechnen",
    reset_button: "Zurücksetzen",
    primary_color: "#006e80",
    secondary_color: "#008496"
};

// Beispiel: EventListener, Berechnung etc. aus deinem Original-Code
function formatDate(date) {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('de-DE', options);
}

function addWeeks(date, weeks) {
    const result = new Date(date);
    result.setDate(result.getDate() + (weeks * 7));
    return result;
}

function calculateDaysBetween(date1, date2) {
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

// EventListener für Berechnen-Button
document.getElementById('calculate-btn').addEventListener('click', function(e) {
    e.preventDefault();
    // hier deine komplette Berechnungslogik einfügen
});

// EventListener für Zurücksetzen-Button
document.getElementById('reset-btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('et-date').value = '';
    document.getElementById('actual-date').value = '';
    document.getElementById('multiple-birth').checked = false;
    document.getElementById('premature-birth').checked = false;
    document.getElementById('disability').checked = false;
    document.getElementById('results').classList.remove('show');
    document.getElementById('error-message').classList.remove('show');
});
