
  
  var firebaseConfig = {
    apiKey: "AIzaSyCR2s6QQSRW-z-oOuYI7jSk0BP9D-g4lQI",
    authDomain: "lifelineindia-18d96.firebaseapp.com",
    databaseURL: "https://lifelineindia-18d96-default-rtdb.firebaseio.com",
    projectId: "lifelineindia-18d96",
    storageBucket: "lifelineindia-18d96.appspot.com",
    messagingSenderId: "275849130835",
    appId: "1:275849130835:web:786fb4717a7d63aaf667a6",
    measurementId: "G-9DNG23BR8Y"
  };

  firebase.initializeApp(firebaseConfig);

let volunteerId;

// var bigOne=document.getElementById('demo');

var dRef=firebase.database().ref();
var dUsersActive=dRef.child("pendingRequests/");
var dVolunteers=dRef.child("volunteers");
var dSponsorCases=dRef.child("sponsorCases");



function addSponsor(){
  var petName=document.getElementById("form_pet_name").value;
  var doctorName=document.getElementById("form_doctor_name").value;
  var totalAmount=document.getElementById("form_tot_amount").value;
  var place=document.getElementById("form_place").value;
  var desp=document.getElementById("form_desp").value;



    var storage=firebase.storage();
    var file=document.getElementById("form_file").files[0];
    var storageRef=storage.ref();
    var thisRef=storageRef.child("images/").child(file.name).put(file)
    ;
    thisRef.on('state_changed',function(snapshot){

    },function(error){

    },
    function(){
      thisRef.snapshot.ref.getDownloadURL().then(function(downloadURL){
        dSponsorCases.push({
          "petName" : petName,
          "petImage": downloadURL,
          "doctorName": doctorName,
          "totalAmount":  totalAmount,
          "desp": desp,
          "place":  place,
          "lastReceivedAmount" :"0",
          "totalAmountSponsored": false,

        }).push().key;
        window.alert(petName);

      })
    })

  


}



  function selectSponsoredCases(){
    firebase.database().ref("sponsorCases").orderByChild("totalAmountSponsored").equalTo(true).once('value',
    function(AllRecords){
      AllRecords.forEach(
        function(currentRecord){
        var petName =currentRecord.val().petName;
        var place=currentRecord.val().place;
        var totalAmount=currentRecord.val().totalAmount;
        var raiasedAmount=currentRecord.val().lastReceivedAmount; 

          AddItemsToSponsoredCaseTable(petName,place,totalAmount,raiasedAmount);
      
       
      })
    })
  }

  function AddItemsToSponsoredCaseTable(petName,place,totalAmount,raiasedAmount){
    var tbody=document.getElementById("sponsoredCasesTable");
    var trow=document.createElement('tr');

    var td1=document.createElement('td');
    var td2=document.createElement('td');
    var td3=document.createElement('td');
    var td4=document.createElement('td');


    td1.innerHTML=petName;
    td2.innerHTML=place;
    td3.innerHTML=totalAmount;
    td4.innerHTML=raiasedAmount;

    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    tbody.appendChild(trow);
  }
// window.onload=selectSponsoredCases;
// window.onload=selectAllData;
  
  
  
 

function signUpWithEmailPassword() {
 
  var email = "test5@example.com";
  var password = "hunter2";
  // [START auth_signup_password]
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      window.alert("created")
      window.location.href="index.html";
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert(errorMessage);
      // ..
    });
  // [END auth_signup_password]
}
function signout(){
 
  firebase.auth().signOut().then(() => {
    window.alert("sucess");
  }).catch((error) => {
    // An error happened.
  });
  

}




  
  
  







