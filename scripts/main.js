const billGenerator = document.getElementById("bill-generator");
const billText = document.getElementById("bill");

/*--------Event Listeners----------------- */

billGenerator.addEventListener("click", function (e) {
  e.preventDefault();

  const totalBill = document.querySelector(".total-bill");
  const people = document.querySelector(".people");

  // checking that number of people is greater than one and is a whole number
  if (people.value <= 0) {
    billText.innerText = "Number of people can not be less than 1";
  } else if (people.value % 1 !== 0) {
    billText.innerText = "Number of people must be a whole number";
  } else {
    const bill = totalBill.value / people.value;
    billText.innerText = `Payable bill = ${bill}`;
  }
});
