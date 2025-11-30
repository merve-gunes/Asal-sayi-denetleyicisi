function cPrime() {
  const input = document.querySelector("#input");
  const result = document.querySelector("#result");
  const n = Number(input.value.trim());

  if (isNaN(n) || n <= 1) {
    result.textContent = "Please enter a number greater than 1";
    result.style.color = "red";
    return;
  }

  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    let sira = 0;
    for (let i = 2; i <= n; i++) {
      let asalMi = true;
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          asalMi = false;
          break;
        }
      }
      if (asalMi) sira++;
    }
    const ek =
      sira === 1 ? "inci" : sira === 2 ? "nci" : sira === 3 ? "üncü" : "üncü";

    result.textContent = `${n} bir asal sayidir ve ${sira}.${ek} asal sayidir`;
    result.style.color = "green";
  } else {
    result.textContent = `${n} is a Non-Prime Number`;
    result.style.color = "#e74c3c";
  }
}

document.querySelector("#input").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    cPrime();
    e.preventDefault();
  }
});
