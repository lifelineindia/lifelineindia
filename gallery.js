var dGallery=dRef.child("gallery");


function addMedia(){
  var title=document.getElementById("form_title").value;
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
        dGallery.push({
          "title" : title,
          "media": downloadURL,
          "desp": desp,
        

        }).push().key;
        window.alert("Successfully Added.");

      })
    })

  


}