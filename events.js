var dEvents=dRef.child("events");


function addEvents(){
  var title=document.getElementById("form_title").value;
  var desp=document.getElementById("form_desp").value;
  var time=document.getElementById("form_time").value;
  var venue=document.getElementById("form_venue").value;




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
        dEvents.push({
          "title" : title,
          "coverPicture": downloadURL,
          "desp": desp,
          "time":time,
          "venue":venue,
        

        }).push().key;
        window.alert("Successfully Added.");

      })
    })

  


}