const totalBill = document.querySelector(".total-bill");
const people = document.querySelector(".people");
const billGennerator = document.getElementById("bill-generator");
const billText = document.getElementById("bill");

billGennerator.addEventListener("click", function (e) {
  e.preventDefault();
  const bill = totalBill.value / people.value;
  billText.innerText = `Payable bill = ${bill}`;
});
