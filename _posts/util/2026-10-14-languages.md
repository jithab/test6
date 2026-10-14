---
layout: post
title: Malayalam, Tamil, Kannada — Words
date: 2026-10-14 12:34:56 +0000
categories: util
type: util
---

<!-- Load proper fonts for each script (once per page is enough) -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Malayalam:wght@400;600;700&family=Noto+Sans+Tamil:wght@400;600;700&family=Noto+Sans+Kannada:wght@400;600;700&family=Inter:wght@400;600;700&display=swap" rel="stylesheet">

<div class="util">

<style>
  /* ---------- Scoped to .util so it doesn't leak site-wide ---------- */
  .util {
    font-family: 'Inter', 'Segoe UI', 'Noto Sans', Arial, sans-serif;
    background: #f7f9fc;
    padding: 20px;
    color: #333;
    border-radius: 8px;
  }

  .util h1 {
    text-align: center;
    color: #2c3e50;
  }

  .util table {
    width: 100%;
    border-collapse: collapse;
    background: #fff;
    box-shadow: 0 2px 10px rgba(0,0,0,0.08);
    border-radius: 8px;
    overflow: hidden;
  }


  /* ---------- Per-language font stacks ---------- */
  .util .lang-ml .native,
  .util .lang-ml .pron {
    font-family: 'Noto Sans Malayalam', 'Manjari', 'Rachana',
                 'AnjaliOldLipi', 'Lohit Malayalam', sans-serif;
  }

  .util .lang-ta .native,
  .util .lang-ta .pron {
    font-family: 'Noto Sans Tamil', 'Lohit Tamil', 'TAMu_Kalyani',
                 'Samyak Tamil', 'Catamaran', sans-serif;
  }

  .util .lang-kn .native,
  .util .lang-kn .pron {
    font-family: 'Noto Sans Kannada', 'Lohit Kannada', 'Tunga',
                 'Kedage', sans-serif;
  }

  /* 1. Pronunciation — most important */
  .util .pron {
    display: block;
    font-size: 1.15rem;
    color: #1a237e;
    line-height: 1.6;
  }

  /* 2. English meaning — second */
  .util .meaning {
    display: block;
    font-size: 0.95rem;
    color: #2c3e50;
    margin-top: 3px;
    font-family: 'Inter', 'Segoe UI', sans-serif;
  }

  /* 3. Native script — reference below */
  .util .native {
    display: block;
    font-size: 1.05rem;
    color: #555;
    margin-top: 6px;
    line-height: 1.8;
  }

  @media (max-width: 700px) {
    .util table,
    .util thead,
    .util tbody,
    .util th,
    .util td,
    .util tr { display: block; }

    .util thead { display: none; }

    .util tr {
      margin-bottom: 15px;
      border: 1px solid #ddd;
      border-radius: 6px;
      padding: 10px;
    }

    .util td { border: none; padding: 8px 10px; }

    .util td::before {
      content: attr(data-label);
      display: block;
      font-weight: 700;
      color: #34495e;
      font-size: 0.8rem;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
  }
</style>

<table>
  <tbody id="wordTableBody"></tbody>
</table>

<script>
  /* ============================================================
     JSON DATA
     Add one object per word. Each language has:
       pron    → IAST pronunciation (with diacritics)
       meaning → English meaning(s)
       native  → word in native script
     ============================================================ */
  const wordData = [
    {
      malayalam: { pron: "vivasāyaṁ", meaning: "Farming", native: "വിവസായം" },
      tamil:     { pron: "vivasāyam", meaning: "Business", native: "விவசாயம்" },
      kannada:   { pron: "vivasāya",  meaning: "Farming", native: "ವಿವಸಾಯ" }
    },{
  "malayalam": {
    "pron": "makkaḷ",
    "meaning": "Children",
    "native": "മക്കൾ"
  },
  "tamil": {
    "pron": "makkaḷ",
    "meaning": "People",
    "native": "மக்கள்"
  },
  "kannada": {
    "pron": "makkaḷu",
    "meaning": "Children",
    "native": "ಮಕ್ಕಳು"
  }
}
  ];

  /* ============================================================
     POPULATE THE TABLE FROM JSON DATA
     ============================================================ */
  const tbody = document.getElementById("wordTableBody");

  function renderCell(lang) {
    return `
      <span class="pron">${lang.pron}</span>
      <span class="meaning">${lang.meaning}</span>
      <span class="native">${lang.native}</span>
    `;
  }

  wordData.forEach((row, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td data-label="#">${index + 1}</td>
      <td data-label="Malayalam" class="lang-ml">${renderCell(row.malayalam)}</td>
      <td data-label="Tamil"     class="lang-ta">${renderCell(row.tamil)}</td>
      <td data-label="Kannada"   class="lang-kn">${renderCell(row.kannada)}</td>
    `;
    tbody.appendChild(tr);
  });
</script>

</div>