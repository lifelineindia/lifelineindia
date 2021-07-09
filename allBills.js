
var caseNo =localStorage.getItem("caseForBillsNo");

function selectAllData(){


  firebase.database().ref("finalReports").child(caseNo).child("allBillsImage").once('value',
  function(AllRecords){
    AllRecords.forEach(
      function(currentRecord){
          var billImageLink=currentRecord.val();

       
          
      
          AddItemsToTable(billImageLink)

      }
      
    );
    
    });
}
function  AddItemsToTable(billImageLink){
  var tbody=document.getElementById('allBillsTable');
  var trow=document.createElement('tr');

  var td7 =document.createElement('td')
  var link =document.createElement('a')
  var img=document.createElement('img')

  link.href=billImageLink;
  link.innerHTML="Bill image"

  
  img.src=billImageLink;
  td7.appendChild(img)
  // td7.append(link);


  trow.appendChild(td7);
 
  tbody.appendChild(trow);

}
window.onload=selectAllData;