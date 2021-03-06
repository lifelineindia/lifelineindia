var caseNo;

window.onload=function(){
  localStorage.setItem("caseForBillsNo",caseNo);
}


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

  var medicine;
  var beforeImage;
  var afterImage;
  var result;

  firebase.database().ref("finalReports").once('value',
  function(AllRecords){
    AllRecords.forEach(
      function(currentRecord){
        
        var caseNo=currentRecord.key;
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
             afterImage=currentRecord.val().imageURL;
             beforeImage=currentRecord.val().petImage;
             result=currentRecord.val().result;

              doctorName=currentRecord.val().doctorName;
             
              AddItemsToTable(caseNo,typeOfAnimal,petName,problem,contactNumber,
                address,doctorName,attends,donationReceived,donationMedium,
                donationAmount,exp,medicine,beforeImage,afterImage,result);

       

       
          
        
         

      }
      
    );
    
    });
}
function  AddItemsToTable(caseNo,typeOfAnimal,petName,problem,contactNumber,
  address,doctorName,attends,donationReceived,donationMedium,
  donationAmount,exp,medicine,beforeImage,afterImage,result){
  var tbody=document.getElementById('finalReportTable');
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
  var td17=document.createElement('td');

  var allBillsLink=document.createElement('a');
  allBillsLink.href="allBills.html";
 allBillsLink.innerHTML="View All Bils";

 var beforeImageLink=document.createElement('a');
 beforeImageLink.href=beforeImage;
beforeImageLink.innerHTML="Click Here !";

var afterImageLink=document.createElement('a');
afterImageLink.href=afterImage;
afterImageLink.innerHTML="Click Here !";

  td1.innerHTML= caseNo;
  td2.innerHTML= petName
  td3.innerHTML= typeOfAnimal
  td4.innerHTML= problem
  td5.innerHTML= contactNumber
  td6.innerHTML= address
  td7.innerHTML= doctorName
  td8.innerHTML= attends
  td9.innerHTML= donationReceived
  td10.innerHTML= donationMedium
  td11.innerHTML= donationAmount
  td12.innerHTML= exp
  td13.append(allBillsLink);
  td14.innerHTML= medicine
  td15.append(beforeImageLink);
  td16.append(afterImageLink);
  td17.innerHTML=result;





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
trow.appendChild(td17);


tbody.appendChild(trow);


}
window.onload=selectAllData;
