// Program na prevod čísel z dvojkovej do desiatkovej sústavy
// Podľa algoritmu: Inicializácia -> Validácia -> Výpočet -> Výpis výsledku

// Funkcia, ktorá prevedie binárny reťazec na desiatkové číslo
function convertBinaryToDecimal(binarnyRetazec) {

  // 1. INICIALIZÁCIA
  let hodnota = 0;
  let valid = true;

  // 2. VALIDÁCIA VSTUPU
  let i = 0;
  while (i < binarnyRetazec.length) {
    let c = binarnyRetazec[i];

    if (c !== '0' && c !== '1') {
      valid = false;
      break;
    }

    i = i + 1;
  }

  // 2.2. VYHODNOTENIE VALIDITY
  if (valid === false) {
    console.log("Neplatný vstup – povolené sú len číslice 0 a 1.");
    return;
  }

  // 3. VÝPOČET DESIATKOVEJ HODNOTY
  hodnota = 0;
  i = 0;
  while (i < binarnyRetazec.length) {
    let c = binarnyRetazec[i];
    let cifra = c - '0';
    hodnota = hodnota * 2 + cifra;
    i = i + 1;
  }

  // 4. VÝPIS VÝSLEDKU
  console.log("Desiatková hodnota čísla je: " + hodnota);

  return hodnota;
}


// HLAVNÝ PROGRAM pre Node.js

// načítanie vstupu z príkazového riadku
let vstup = process.argv[2];

if (!vstup) {
  console.log("Použitie: node binaryToDecimal.js <binárne_číslo>");
  console.log("Príklad: node binaryToDecimal.js 1011");
} else {
  convertBinaryToDecimal(vstup);
}
