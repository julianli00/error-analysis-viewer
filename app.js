const DATA = window.ERROR_VIEWER_DATA;
const METHOD_KEYS = ["D", "Pid", "P2step"];
const METHOD_LABELS = {
  D: "D",
  Pid: "P1",
  P2step: "P2",
};

const state = {
  visibleLimit: 50,
};

const els = {
  search: document.querySelector("#searchBox"),
  statusD: [...document.querySelectorAll('input[name="statusD"]')],
  statusPid: [...document.querySelectorAll('input[name="statusPid"]')],
  statusP2step: [...document.querySelectorAll('input[name="statusP2step"]')],
  errorTypes: [...document.querySelectorAll('input[name="errorType"]')],
  patterns: [...document.querySelectorAll('input[name="pattern"]')],
  shortLength: document.querySelector("#shortLength"),
  twoPlusErrors: [...document.querySelectorAll('input[name="twoPlusErrors"]')],
  p2Fix: document.querySelector("#p2Fix"),
  pageSize: document.querySelector("#pageSize"),
  resetButton: document.querySelector("#resetButton"),
  summaryStats: document.querySelector("#summaryStats"),
  resultCount: document.querySelector("#resultCount"),
  activeFilters: document.querySelector("#activeFilters"),
  cards: document.querySelector("#cards"),
  showMore: document.querySelector("#showMoreButton"),
};

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function selectedValues(inputs) {
  return inputs.filter((input) => input.checked).map((input) => input.value);
}

function selectedRadio(inputs) {
  return inputs.find((input) => input.checked)?.value ?? "any";
}

function methodStatus(sentence, method) {
  return sentence.methods[method].correct ? "good" : "bad";
}

function methodLabel(method) {
  return METHOD_LABELS[method] ?? method;
}

function hasP2Fix(sentence) {
  return sentence.patternSet.some((pattern) => ["B B G", "G B G", "B G G"].includes(pattern));
}

function sentenceText(sentence) {
  const methodText = METHOD_KEYS.map((key) => sentence.methods[key].tokenization).join(" ");
  return [
    sentence.sentenceId,
    sentence.sourceRaw,
    sentence.targetRaw,
    sentence.gold.tokenization,
    methodText,
    sentence.patternSet.join(" "),
    sentence.errorTypes.join(" "),
  ]
    .join(" ")
    .toLowerCase();
}

function getFilters() {
  return {
    q: els.search.value.trim().toLowerCase(),
    D: selectedRadio(els.statusD),
    Pid: selectedRadio(els.statusPid),
    P2step: selectedRadio(els.statusP2step),
    errorTypes: selectedValues(els.errorTypes),
    patterns: selectedValues(els.patterns),
    shortLength: els.shortLength.value,
    twoPlusErrors: selectedRadio(els.twoPlusErrors),
    p2Fix: els.p2Fix.checked,
  };
}

function passes(sentence, filters) {
  if (filters.q && !sentenceText(sentence).includes(filters.q)) return false;
  for (const method of METHOD_KEYS) {
    const wanted = filters[method];
    if (wanted !== "any" && methodStatus(sentence, method) !== wanted) return false;
  }
  if (filters.errorTypes.length && !filters.errorTypes.some((type) => sentence.errorTypes.includes(type))) return false;
  if (filters.patterns.length && !filters.patterns.some((pattern) => sentence.patternSet.includes(pattern))) return false;
  if (filters.twoPlusErrors !== "any") {
    const badSelectedMethods = METHOD_KEYS.filter((method) => filters[method] === "bad");
    const relevantMethods = badSelectedMethods.length ? badSelectedMethods : METHOD_KEYS;
    const hasRelevantTwoPlus = relevantMethods.some((method) => sentence.methods[method].errorCount >= 2);
    if (filters.twoPlusErrors === "yes" && !hasRelevantTwoPlus) return false;
    if (filters.twoPlusErrors === "no" && hasRelevantTwoPlus) return false;
  }
  if (filters.p2Fix && !hasP2Fix(sentence)) return false;
  if (filters.shortLength !== "any" && sentence.sourceRaw.length > Number(filters.shortLength)) return false;
  return true;
}

function tokenHtml(token, mode) {
  const cls = mode === "gold" ? "gold" : token.good ? "good" : "bad";
  const title = `${token.start}-${token.end}${mode === "gold" ? "" : token.good ? " good" : " bad"}`;
  return `<span class="token ${cls}" title="${escapeHtml(title)}">${escapeHtml(token.token)}</span>`;
}

function segmentationRow(label, tokens, mode = "method") {
  return `
    <div class="seg-row">
      <div class="seg-name">${escapeHtml(label)}</div>
      <div class="tokens">${tokens.map((token) => tokenHtml(token, mode)).join("")}</div>
    </div>
  `;
}

function methodBadge(method, sentence) {
  const correct = sentence.methods[method].correct;
  const count = sentence.methods[method].errorCount;
  const label = correct ? `${methodLabel(method)}: G` : `${methodLabel(method)}: B (${count})`;
  return `<span class="badge ${correct ? "good" : "bad"}">${escapeHtml(label)}</span>`;
}

function errorTypeBadges(sentence) {
  const bits = [];
  if (sentence.errorTypes.length) {
    bits.push(...sentence.errorTypes.map((type) => `<span class="badge bad">${escapeHtml(type)}</span>`));
  }
  if (sentence.patternSet.length) {
    bits.push(...sentence.patternSet.map((pattern) => `<span class="badge pattern">${escapeHtml(pattern)}</span>`));
  }
  const multiMethodLabels = METHOD_KEYS.filter((method) => sentence.methods[method].errorCount >= 2).map((method) => `${methodLabel(method)} 2+`);
  if (multiMethodLabels.length) {
    bits.push(`<span class="badge">${escapeHtml(multiMethodLabels.join(", "))}</span>`);
  }
  return bits.join("");
}

function errorPanel(sentence) {
  const items = [];
  for (const method of METHOD_KEYS) {
    for (const error of sentence.methods[method].errors) {
      items.push(`
        <div class="error-item">
          <strong>${escapeHtml(methodLabel(method))} ${escapeHtml(error.type)}</strong>
          <span> span ${escapeHtml(error.raw)} [${error.spanStart}, ${error.spanEnd})</span>
          <p>gold: ${escapeHtml(error.gold)} | pred: ${escapeHtml(error.pred)}</p>
          <p>${escapeHtml(error.explanation)}</p>
        </div>
      `);
    }
  }
  for (const pattern of sentence.patterns) {
    items.push(`
      <div class="error-item">
        <strong>Pattern ${escapeHtml(pattern.pattern)}</strong>
        <span> span ${escapeHtml(pattern.raw)} [${pattern.spanStart}, ${pattern.spanEnd})</span>
        <p>${escapeHtml(pattern.explanation)}</p>
      </div>
    `);
  }
  if (!items.length) return "";
  return `
    <div id="details-${escapeHtml(sentence.sentenceId)}" class="error-panel" hidden>
      <h3>Local errors and patterns</h3>
      <div class="error-grid">${items.join("")}</div>
    </div>
  `;
}

function cardHtml(sentence) {
  const hasDetails = METHOD_KEYS.some((method) => sentence.methods[method].errors.length) || sentence.patterns.length;
  return `
    <article class="card">
      <header class="card-header">
        <div>
          <h2 class="sentence-title">sentence_id: ${escapeHtml(sentence.sentenceId)}</h2>
          <div class="sentence-meta">
            ${METHOD_KEYS.map((method) => methodBadge(method, sentence)).join("")}
            ${errorTypeBadges(sentence)}
          </div>
        </div>
        <div class="card-actions">
          <button class="icon-button" type="button" data-copy-id="${escapeHtml(sentence.sentenceId)}">Copy ID</button>
          ${
            hasDetails
              ? `<button class="icon-button" type="button" data-toggle-details="${escapeHtml(sentence.sentenceId)}" aria-expanded="false">Details</button>`
              : ""
          }
        </div>
      </header>
      <div class="raw-lines">
        <div>
          <span class="field-label">Source</span>
          <p class="raw-text">${escapeHtml(sentence.sourceRaw)}</p>
        </div>
        <div>
          <span class="field-label">Target</span>
          <p class="raw-text">${escapeHtml(sentence.targetRaw)}</p>
        </div>
      </div>
      <div class="segmentations">
        ${segmentationRow("Gold", sentence.gold.tokens, "gold")}
        ${METHOD_KEYS.map((method) => segmentationRow(methodLabel(method), sentence.methods[method].tokens)).join("")}
      </div>
      ${errorPanel(sentence)}
    </article>
  `;
}

function bindCardActions() {
  document.querySelectorAll("[data-toggle-details]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.getAttribute("data-toggle-details");
      const panel = document.querySelector(`#details-${CSS.escape(id)}`);
      if (!panel) return;
      const isHidden = panel.hasAttribute("hidden");
      panel.toggleAttribute("hidden", !isHidden);
      button.setAttribute("aria-expanded", String(isHidden));
      button.textContent = isHidden ? "Hide details" : "Details";
    });
  });
  document.querySelectorAll("[data-copy-id]").forEach((button) => {
    button.addEventListener("click", async () => {
      const id = button.getAttribute("data-copy-id");
      try {
        await navigator.clipboard.writeText(id);
        button.textContent = "Copied";
        window.setTimeout(() => {
          button.textContent = "Copy ID";
        }, 1200);
      } catch {
        button.textContent = id;
      }
    });
  });
}

function renderSummaryStats() {
  const badCounts = METHOD_KEYS.map((method) => ({
    method,
    count: DATA.sentences.filter((sentence) => !sentence.methods[method].correct).length,
  }));
  els.summaryStats.innerHTML = [
    { label: "Sentences", value: DATA.sentenceCount },
    { label: "Local Errors", value: DATA.sentences.reduce((sum, sentence) => sum + sentence.totalErrors, 0) },
    ...badCounts.map(({ method, count }) => ({ label: `${methodLabel(method)} Bad`, value: count })),
  ]
    .map(
      (item) => `
        <div class="stat-card">
          <span>${escapeHtml(item.label)}</span>
          <strong>${escapeHtml(item.value)}</strong>
        </div>
      `
    )
    .join("");
}

function activeFilterText(filters) {
  const labels = [];
  if (filters.q) labels.push(`search: ${filters.q}`);
  for (const method of METHOD_KEYS) {
    if (filters[method] !== "any") labels.push(`${methodLabel(method)}: ${filters[method]}`);
  }
  if (filters.errorTypes.length) labels.push(`types: ${filters.errorTypes.join(", ")}`);
  if (filters.patterns.length) labels.push(`patterns: ${filters.patterns.join(", ")}`);
  if (filters.shortLength !== "any") labels.push(`source ≤ ${filters.shortLength} chars`);
  if (filters.twoPlusErrors !== "any") {
    const badMethods = METHOD_KEYS.filter((method) => filters[method] === "bad");
    const scope = badMethods.length ? badMethods.map(methodLabel).join("/") : "any method";
    labels.push(`${scope} has 2+ errors: ${filters.twoPlusErrors}`);
  }
  if (filters.p2Fix) labels.push("P2 fixes D/P1");
  return labels.length ? labels.join(" | ") : "No active filters";
}

function render() {
  const filters = getFilters();
  const matches = DATA.sentences.filter((sentence) => passes(sentence, filters));
  const shown = matches.slice(0, state.visibleLimit);
  els.resultCount.textContent = `${matches.length} / ${DATA.sentenceCount} sentences`;
  els.activeFilters.textContent = activeFilterText(filters);
  els.cards.innerHTML = shown.length ? shown.map(cardHtml).join("") : `<div class="empty">No sentences match the current filters.</div>`;
  els.showMore.style.display = matches.length > state.visibleLimit ? "inline-flex" : "none";
  bindCardActions();
}

function resetFilters() {
  els.search.value = "";
  [...els.statusD, ...els.statusPid, ...els.statusP2step].forEach((input) => {
    input.checked = input.value === "any";
  });
  [...els.errorTypes, ...els.patterns].forEach((input) => {
    input.checked = false;
  });
  els.shortLength.value = "any";
  els.twoPlusErrors.forEach((input) => {
    input.checked = input.value === "any";
  });
  els.p2Fix.checked = false;
  els.pageSize.value = "50";
  state.visibleLimit = 50;
  render();
}

function init() {
  renderSummaryStats();
  state.visibleLimit = Number(els.pageSize.value);
  const controls = [
    els.search,
    ...els.statusD,
    ...els.statusPid,
    ...els.statusP2step,
    ...els.errorTypes,
    ...els.patterns,
    els.shortLength,
    ...els.twoPlusErrors,
    els.p2Fix,
  ];
  controls.forEach((control) => {
    control.addEventListener("input", () => {
      state.visibleLimit = Number(els.pageSize.value);
      render();
    });
    control.addEventListener("change", () => {
      state.visibleLimit = Number(els.pageSize.value);
      render();
    });
  });
  els.pageSize.addEventListener("change", () => {
    state.visibleLimit = Number(els.pageSize.value);
    render();
  });
  els.showMore.addEventListener("click", () => {
    state.visibleLimit += Number(els.pageSize.value);
    render();
  });
  els.resetButton.addEventListener("click", resetFilters);
  render();
}

init();
