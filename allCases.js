




function selectAllData(){


  firebase.database().ref("cases").once('value',
  function(AllRecords){
    AllRecords.forEach(
      function(currentRecord){

        var petName=currentRecord.val().petName;
        var typeOfAnimal=currentRecord.val().typeOfAnimal;
        var problem=currentRecord.val().problem;
        var petImage=currentRecord.val().imageURL;
        var place=currentRecord.val().address;
        var number=currentRecord.val().contactNumber;

        AddItemsToTable(petName,typeOfAnimal,problem,petImage,place,number)

        
        

       
          
        
         

      }
      
    );
    
    });
}
function   AddItemsToTable(petName,typeOfAnimal,problem,petImage,place,number){
  var tbody=document.getElementById('allCasesTable');
  var trow=document.createElement('tr');

  var td1     =document.createElement('td')
  var td2    =document.createElement('td')
  var td3    =document.createElement('td')
  var td4     =document.createElement('td')
  var td5    =document.createElement('td')
  var td6    =document.createElement('td')

  var link=document.createElement("a");
   link.href=petImage;
  link.innerHTML="Click Here";

  


  td1.innerHTML= petName;
  td2.innerHTML= typeOfAnimal
  td3.innerHTML= problem
  td4.append(link)
  td5.innerHTML= place
  td6.innerHTML=number





trow.appendChild(td1 );
trow.appendChild(td2 );
trow.appendChild(td3 );
trow.appendChild(td4 );
trow.appendChild(td5 );
trow.appendChild(td6 );



tbody.appendChild(trow);


}
window.onload=selectAllData;


