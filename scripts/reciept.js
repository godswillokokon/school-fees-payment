const rrr = document.querySelector("#rrr");

const namec = document.querySelector("#name");

const regnoc = document.querySelector("#regno");

const levelc = document.querySelector("#level");

const time = document.querySelector(".date");

const status = document.querySelector("#status");

const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");


let show = "";

let Qid = window.location.search.split("?")[1];
db.collection("payments")
  .doc(Qid)
  .get()
  .then(data => {

    let name = data.data().name;
    let regno = data.data().regno;
    let cardnumber = data.data().cardnumber;
    let level = data.data().level;
    let amount = data.data().amount;
    let date = data.data().date;
    if (amount == "36,615.0") {
      show = "Half (ONE SEMSETER)";
    } else if (amount == "73,230.0") {
      show = "Full (COMPLETE SESSION)";
    } else {
      console.log("nothing");

    }


    const htmlQues = `
      <strong>Invoice</strong># ${Qid}
      `;
    rrr.innerHTML = htmlQues;

    const htmlamt = `
       <strong>Status:</strong> <span
                                        class="label label-danger">PAID : ${ amount}</span> 
      `;
    status.innerHTML = htmlamt;


    const htmlDate = `
    <strong>Date:</strong> ${date}
      `;
    time.innerHTML = htmlDate;

    const htmlScores = `
        <strong>Student Name:</strong> ${name}
      `;
    namec.innerHTML = htmlScores;

    const htmlTitle = `
      <strong>Reg No:</strong>  ${regno}
      `;
    regnoc.innerHTML = htmlTitle;


    const htmlTeach = `
    <strong>Level:</strong>    ${level}
      `;
    levelc.innerHTML = htmlTeach;


    const htmlfee1 = `
      ${amount}
      `;
    one.innerHTML = htmlfee1;

    const htmlfee2 = `
      ${amount}
      `;
    two.innerHTML = htmlfee2;

    const htmlfee3 = `
        <th colspan="2" class="text-right">Sub Total:</th>
                                        <th class="text-center" >${amount}</th>
      `;
    three.innerHTML = htmlfee3;

    const htmlfee4 = `
       <th colspan="2" class="text-right">Total:</th>
                                        <th class="text-center" >${amount}</th> 
      `;
    four.innerHTML = htmlfee4;


    const htmlvat = `
    <strong>Vat:</strong>    #${vatt}
      `;
    vat.innerHTML = htmlvat;




  })
  .catch(err => {
    console.error(err);
  });
