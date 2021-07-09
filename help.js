




function selectAllData(){



  firebase.database().ref("help").once('value',
  function(AllRecords){
    AllRecords.forEach(
      function(currentRecord){
        
      var name=currentRecord.val().name;
      var number=currentRecord.val().number;
      var emailId=currentRecord.val().emailId;
      var desp=currentRecord.val().desp;
      AddItemsToTable(name,number,emailId,desp)
       
          
        
         

      }
      
    );
    
    });
}
function   AddItemsToTable(name,number,emailId,desp){
  var tbody=document.getElementById('helpTable');
  var trow=document.createElement('tr');

  var td1     =document.createElement('td')
  var td2    =document.createElement('td')
  var td3    =document.createElement('td')
  var td4     =document.createElement('td')


  td1.innerHTML= name;
  td2.innerHTML= number;
  td3.innerHTML= emailId;
  td4.innerHTML= desp;





trow.appendChild(td1 );
trow.appendChild(td2 );
trow.appendChild(td3 );
trow.appendChild(td4 );



tbody.appendChild(trow);


}
window.onload=selectAllData;


