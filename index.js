

var allCases=document.getElementById("counterAllCases");
var completedCases=document.getElementById("counterCompletedCases");
var counterFollowUps=document.getElementById("counterFollowUps");

var dRef=firebase.database().ref();
var dAdminCounters=dRef.child("adminCounters");
var dVolunteerPendingRequest=dRef.child("volunteers");



dAdminCounters.on("value",function(snapshot){

  allCases.innerHTML=snapshot.val().allCases;
  completedCases.innerHTML=snapshot.val().completedCases;
  counterFollowUps.innerHTML=snapshot.val().followUps;

},

function(error){
  console.log("Error:"+ console.error.code);
}
);


function selectAllData(){

  var uid;
  var address;
  var emailId;
  var fullName;
  var idName;
  var idNumber;
  var idURL;
  var mobileNumber;
  var ngo;
  var ngoName;
  var ngoNumber;
 



  // firebase.database().ref("pendingRequests").once('value',
  // function(AllRecords){
  //   AllRecords.forEach(
  //     function(currentRecord){
  //       var uid=currentRecord.key;
           
         


           firebase.database().ref("volunteers").orderByChild("pendingRequest").equalTo(false).once('value',
        function(AllRecords){
          AllRecords.forEach(
            function(currentRecord){
              console.log(currentRecord.val())
              address=currentRecord.val().address;
              emailId=currentRecord.val().emailId;
               fullName=currentRecord.val().fullName;
  
              idName=currentRecord.val().idName;
              idNumber=currentRecord.val().idNumber;
              idURL=currentRecord.val().idURL;
              mobileNumber=currentRecord.val().mobileNumber;
              ngo=currentRecord.val().ngo;
              ngoName=currentRecord.val().ngoName;
              ngoNumber=currentRecord.val().ngoNumber;
              AddItemsToTable(uid,address,emailId,fullName,idName,idNumber,idURL,mobileNumber,ngo,ngoName,ngoNumber);
          
             
                      
              
            }
          )
          
        }
        
        );
       
          
        
         

   
    
    // });
}

function  AddItemsToTable(uid,address,emailId,fullName,idName,idNumber,idURL,mobileNumber,ngo,ngoName,ngoNumber){
  var tbody=document.getElementById('pendingBody');
  var trow=document.createElement('tr');

  var td1 =document.createElement('td')
  var td2 =document.createElement('td')
  var td3 =document.createElement('td')
  var td4 =document.createElement('td')
  var td5 =document.createElement('td')
  var td6 =document.createElement('td')
  var td7 =document.createElement('td')
  var td8 =document.createElement('td')
  var td9 =document.createElement('td')
  var td10 =document.createElement('td')
  var td11=document.createElement('td');

  

  var link=document.createElement("a");
   link.href=idURL;
  link.innerHTML="Click Here";

  var approveLink=document.createElement('button');
  
  approveLink.innerHTML="APPROVE";
  
  approveLink.addEventListener("click",function(){

    dUsersActive.update({
      [uid] : true,
    })
    dVolunteerPendingRequest.child(uid).update({
      "pendingRequest" :true,
    })


    window.onload=selectAllData;

    
  })



  
  td1.innerHTML=fullName;
  td2.innerHTML=mobileNumber;
  td3.innerHTML=emailId;
  td4.innerHTML=address;
  td5.innerHTML=idName;
  td6.innerHTML=idNumber;
  td7.append(link);
  td8.innerHTML=ngo;
  td9.innerHTML=ngoName;
  td10.innerHTML=ngoNumber;
  td11.append(approveLink);

  



  trow.appendChild(td1);
  trow.appendChild(td2);
  trow.appendChild(td3);
  trow.appendChild(td4);
  trow.appendChild(td5);
  
  trow.appendChild(td6);
  trow.appendChild(td7)
  trow.appendChild(td8);
  trow.appendChild(td9);
  trow.appendChild(td10);
  trow.appendChild(td11);
  


 
  tbody.appendChild(trow);

}
window.onload=selectAllData;


firebase.auth().onAuthStateChanged((user)=>{

  if(user){
    let user =firebase.auth().currentUser;
    let uid
    if (user!=null) {
      uid=user.uid;

      // window.alert(uid);
      // if (uid=="XyoZ9dKAlcWuvB2xLa9jBleJN8v1") {
        
      //   window.alert("true");
      // }
      
    
    }

  
    
  }
  else{
    // document.write("user not signed in.")
  }
});

