const pays = document.querySelector("#pay");

pays.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const regno = document.getElementById("regno").value;
  const cardholder = document.getElementById("cardholder").value;
  const cardnumber = document.getElementById("cardnumber").value;
  const level = document.getElementById("level").value;
  const amount = document.getElementById("amount").value;
  const date = new Date();


  return db
    .collection("applications")
    .doc()
    .set({
      name,
      regno,
      cardholder,
      cardnumber,
      level,
      amount,
      date

    }, location.href = "invoice.html")
    .catch(err => {
      console.error(err);
      alert("err : ", err)
    });

});

