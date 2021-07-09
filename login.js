function signIn(){
    
   
  var userSIEmail = document.getElementById("userSIEmail").value;
  var userSIPassword = document.getElementById("userSIPassword").value;
  var userSIEmailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var userSIPasswordFormate = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/; 
  
  var checkUserEmailValid = userSIEmail.match(userSIEmailFormate);
  var checkUserPasswordValid = userSIPassword.match(userSIPasswordFormate);


  firebase.auth().signInWithEmailAndPassword(userSIEmail, userSIPassword)
.then((userCredential) => {
  // Signed in
  var user = userCredential.user;
  window.alert("Signin");
  window.location.href="index.html";
  // ...
})
.catch((error) => {
  var errorCode = error.code;
  var errorMessage = error.message;
  
  console.log(errorMessage)
});
}

firebase.auth().onAuthStateChanged((user)=>{
  document.write(user);
  if(user){
    let user =firebase.auth().currentUser;
    let uid
    if (user!=null) {
      uid=user.uid;
      window.location.href="index.html";
      
    
    }

  
    
  }
  else{
    // document.write("user not signed in.")
  }
});