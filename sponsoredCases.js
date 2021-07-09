var dSponsorCases=dRef.child("sponsorCases");
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
window.onload=selectSponsoredCases;