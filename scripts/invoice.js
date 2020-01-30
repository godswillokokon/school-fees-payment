const content = document.querySelector('#invoice');
let emailID = sessionStorage.getItem("email");
console.log(emailID);

const setupContent = data => {
  let html = '';
  data.forEach(data => {
    let id = data.id
    let name = data.data().name;
    let regno = data.data().regno;
    let cardnumber = data.data().cardnumber;
    let level = data.data().level;
    let amount = data.data().amount;
    let date = data.data().date;



    const div = `
    <tr>
                                                                <td>
                                                                    <a href="./reciept.html?${id}">#<span>	 ${id}</span></a>
                                                                </td>
                                                                <td class="text-center">
                                                                    	 ${regno}
                                                                </td>
                                                               
                                                                 <td class="text-center">
                                                                    	 ${amount}
                                                                </td>
                                                                 <td class="text-center">
                                                                    	 ${level}
                                                                </td>
                                                                <td class="text-center">
                                                                    <div class="badge badge-warning">
                                                                        PAID
                                                                    </div>
                                                                </td>
                                                                <td>

                                                                    <div class="d-flex align-items-center text-muted">
                                                                        ${date}
                                                                    </div>
                                                                </td>
                                                                 
                                                            </tr>

    `;
    html += div;
  });
  content.innerHTML = html;





};

db
  .collection('payments')
  .where("emailID", "==", emailID)
  .onSnapshot(
    doc => {
      let data = doc.docs;
      setupContent(data);
    },
    err => {
      console.log(err);
    }
  );
