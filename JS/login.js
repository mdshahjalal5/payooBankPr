console.log(`ass...`);

const button = document.getElementById("login-btn");
button.addEventListener("click", (e) => {
  const accountNumber = document.getElementById("account-number").value;
  const pin = Number(document.getElementById("pin").value);

  e.preventDefault();
  console.log(typeof accountNumber, typeof pin);
  if (accountNumber.length < 11) {
    alert(`Invalid account number   ${accountNumber.length}`);
    return;
  } else {
    if (pin == 1234) {
      window.location.href = "./main.html";

      alert("welcome");
    } else {
      alert("wrong passowrd");
    }
  }
});
