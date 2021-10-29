$('#fileup').change(function(){

    //here we take the file extension and set an array of valid extensions
    var res=$('#fileup').val();
    var arr = res.split("\\");
    var filename=arr.slice(-1)[0];
    filextension=filename.split(".");
    filext="."+filextension.slice(-1)[0];
    valid=[".jpg",".png",".jpeg"];
    //if file is not valid we show the error icon, the red alert, and hide the submit button
    if (valid.indexOf(filext.toLowerCase())==-1){
        $( ".imgupload" ).hide("slow");
        $( ".imgupload.ok" ).hide("slow");
        $( ".imgupload.stop" ).show("slow");
      
        $('#namefile').css({"color":"red","font-weight":700});
        $('#namefile').html("File "+filename+" is not  pic!");
        
        $( "#submitbtn" ).hide();
        $( "#fakebtn" ).show();
    }else{
        //if file is valid we show the green alert and show the valid submit
        $( ".imgupload" ).hide("slow");
        $( ".imgupload.stop" ).hide("slow");
        $( ".imgupload.ok" ).show("slow");
      
        $('#namefile').css({"color":"green","font-weight":700});
        $('#namefile').html(filename);
      
        $( "#submitbtn" ).show();
        $( "#fakebtn" ).hide();
    }
});

$(document).ready(function() {

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    if (window.location.href.indexOf("link") > -1) {
        const urlParams = new URLSearchParams(window.location.search);
        const link = urlParams.get('link');
        modal.style.display = "block";
        document.getElementById("link").innerHTML = link;
    
    }
});