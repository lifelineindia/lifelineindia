




function selectAllData(){

  // var caseNo;
  var petName;
  var typeOfAnimal;
  var problem;
  var petImage;
  var contactNumber;
  var address;
  var doctorName;
  var attends;
  var donationReceived;
  var donationMedium;
  var donationAmount;
  var exp;
  var desp;
  var medicine;
  var nextFollowUpDate;

  firebase.database().ref("followUps").once('value',
  function(AllRecords){
    AllRecords.forEach(
      function(currentRecord){
        
        var caseNo=currentRecord.key;

        firebase.database().ref("followUps").child(caseNo).orderByKey().limitToLast(1).once('value',
        function(AllRecords){
          AllRecords.forEach(
            function(currentRecord){

              petName=currentRecord.val().petName;
              typeOfAnimal=currentRecord.val().typeOfAnimal;
              problem=currentRecord.val().problem;
              petImage=currentRecord.val().petImage;
              contactNumber=currentRecord.val().contactNumber;
              address=currentRecord.val().address;
              attends=currentRecord.val().attenders;
              donationReceived=currentRecord.val().donationReceived;
              donationMedium=currentRecord.val().donationMedium;
              donationAmount=currentRecord.val().donationAmount;
              exp=currentRecord.val().expenditure;
              desp=currentRecord.val().desp;
              medicine=currentRecord.val().medicine;
              nextFollowUpDate=currentRecord.val().nextFollowUpDate;

              doctorName=currentRecord.val().doctorName;
             
              AddItemsToTable(caseNo,petName,typeOfAnimal,problem,petImage,contactNumber,address,doctorName,attends,donationReceived,donationMedium,donationAmount,exp,desp,medicine,nextFollowUpDate);
          
              
            }
          )
          
        }
        
        )

       
          
        
         

      }
      
    );
    
    });
}
function   AddItemsToTable(caseNo,petName,typeOfAnimal,problem,petImage,contactNumber,
  address,doctorName,attends,donationReceived,donationMedium,donationAmount,exp,desp,
  medicine,nextFollowUpDate){
  var tbody=document.getElementById('followUpCasesTable');
  var trow=document.createElement('tr');

  var td1     =document.createElement('td')
  var td2    =document.createElement('td')
  var td3    =document.createElement('td')
  var td4     =document.createElement('td')
  var td5    =document.createElement('td')
  var td6    =document.createElement('td')
  var td7     =document.createElement('td')
  var td8    =document.createElement('td')
  var td9    =document.createElement('td')
  var td10  =document.createElement('td')
  var td11  =document.createElement('td')
  var td12  =document.createElement('td')
  var td13 =document.createElement('td')
  var td14  =document.createElement('td')
  var td15 =document.createElement('td')
  var td16  =document.createElement('td')

  var petImageLink=document.createElement('a');
  petImageLink.href=petImage;
 petImageLink.innerHTML="Click Here!";


  td1.innerHTML= caseNo;
  td2.innerHTML= petName
  td3.innerHTML= typeOfAnimal
  td4.innerHTML= problem
  td5.append(petImageLink)
  td6.innerHTML= contactNumber
  td7.innerHTML= address
  td8.innerHTML= doctorName
  td9.innerHTML= attends
  td10.innerHTML= donationReceived
  td11.innerHTML= donationMedium
  td12.innerHTML= donationAmount
  td13.innerHTML= exp
  td14.innerHTML= desp
  td15.innerHTML= medicine
  td16.innerHTML= nextFollowUpDate




trow.appendChild(td1 );
trow.appendChild(td2 );
trow.appendChild(td3 );
trow.appendChild(td4 );
trow.appendChild(td5 );
trow.appendChild(td6 );
trow.appendChild(td7 );
trow.appendChild(td8 );
trow.appendChild(td9 );
trow.appendChild(td10);
trow.appendChild(td11);
trow.appendChild(td12);
trow.appendChild(td13);
trow.appendChild(td14);
trow.appendChild(td15);
trow.appendChild(td16);


tbody.appendChild(trow);


}
window.onload=selectAllData;


