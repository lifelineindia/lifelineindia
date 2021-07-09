var dAdoptionCases=dRef.child("adoptionCases");


function addAdoption(){
  var petName=document.getElementById("form_pet_name").value;
  var doctorName=document.getElementById("form_doctor_name").value;
  var age=document.getElementById("form_animal_age").value;
  var place=document.getElementById("form_place").value;
  var phoneNo=document.getElementById("form_phone_no").value;



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
        dAdoptionCases.push({
          "petName" : petName,
          "petImage": downloadURL,
          "doctorName": doctorName,
          "age":  age,
          "phoneNo": phoneNo,
          "place" :place,
       

        }).push().key;
        window.alert("Successfully Added.");

      })
    })

  


}