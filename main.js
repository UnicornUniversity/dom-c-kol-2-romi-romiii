// Program na prevod čísel z dvojkovej do desiatkovej sústavy
// Štruktúra: Inicializácia → Validácia → Výpočet → Výsledok 


// Funkcia na prevod binárneho reťazca na desiatkové číslo

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
    return NaN;
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

  // 4. VÝSLEDOK
  return hodnota;
}



// Funkcia

export function main(vstupnyRetazec, vstupnaSustava, vystupnaSustava) {

  // povolený prevod: z dvojkovej do desiatkovej
  if (vstupnaSustava !== 2 || vystupnaSustava !== 10) {
    return NaN;
  }

  const vysledok = convertBinaryToDecimal(vstupnyRetazec);

  // testy očakávajú textovú hodnotu
  return String(vysledok);
}



// Funkcie potrebné pre testy (povolené sústavy)

export function permittedInputSystems() {
  return [2];
}

export function permittedOutputSystems() {
  return [10];
}
