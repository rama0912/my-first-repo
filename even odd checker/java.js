function checkNumber() {
  let number = document.getElementById("num").value;
  if (num % 2 === 0) {
    document.getElementById("result").innerText = "It's Even";
  } else{
    document.getElementById("result").innerText = "It's Odd number."
  }
}
