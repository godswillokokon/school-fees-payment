auth.onAuthStateChanged(user => {
  if (user) {
    let currentUser = firebase.auth().currentUser.email;
    sessionStorage.setItem("user", currentUser);
    let currentUserSession = sessionStorage.getItem("user");

    console.log(currentUserSession);

    console.log("user logged in");
  } else {
    console.log("user not logged in");
  }
});
// signup
const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", e => {
  e.preventDefault();

  // get user info
  const email = signupForm["email"].value;
  const password = signupForm["password"].value;

  sessionStorage.setItem(
    "email",
    email
  );
  //signup user
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(cred => {
      firebase
        .auth()
        .currentUser.getIdToken(true)
        .then(function (idToken) {
          // console.log(idToken);
          // Send token to your backend via HTTPS
          // setupUI(cred);


        })
        .catch(function (error) {
          console.log(error);
        });

      console.log(cred.user);



      setTimeout(function () {
        location.href = "index.html";
      }, 3000);

    })
    .catch(err => {
      console.log(err);
      alert("err:", err)
    });
});
