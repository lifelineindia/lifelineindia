

firebase.auth().onAuthStateChanged((user)=>{
  document.write(user);
  if(user){
    let user =firebase.auth().currentUser;
    let uid
    if (user!=null) {
      uid=user.uid;
      window.alert(uid);

      if (uid=="XyoZ9dKAlcWuvB2xLa9jBleJN8v1") {
        window.location.href="sponsor.html"
      }
     
      
    
    }

  
    
  }
  else{
    // document.write("user not signed in.")
  }
});