

firebase.auth().onAuthStateChanged((user)=>{
  document.write(user);
  if(user){
    let user =firebase.auth().currentUser;
    let uid
    if (user!=null) {
      uid=user.uid;
      // window.alert(uid);

      if (uid!=null) {
        window.location.href="dashboard.html"
      }
     
      
    
    }

  
    
  }
  else{
    // document.write("user not signed in.")
  }
});