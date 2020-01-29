const pays = document.querySelector("#pay");

pays.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const regno = document.getElementById("regno").value;
  const cardholder = document.getElementById("cardholder").value;
  const cardnumber = document.getElementById("cardnumber").value;
  const level = document.getElementById("level").value;
  const cvc = document.getElementById("cvc").value;
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
      cvc,
      date

    }, alert(`Hello ${name}, Congratulation on paying your school fees`))
    .catch(err => {
      console.error(err);
      alert("err : ", err)
    });

});

