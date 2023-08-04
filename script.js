const resultFactorial = document.querySelector(".result");
const checkResult = document.querySelector(".check-result");

checkResult.addEventListener("click", function() {
    const input = document.querySelector("input").value;
    resultFactorial.innerHTML = `hasil: ${factorial(input)}`;
})


const factorial = (value) => {
  if (value == 0) return "invalid input";
  let hasil = 1;
  for (let i = 1; i <= value; i++) {
    hasil = hasil * i;
  }
  return hasil;
};

// const display = factorial(input.value);
// console.log(display);
