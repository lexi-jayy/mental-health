$('.carousel').carousel({
    interval: 5000
  });


  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  });




  var modal = document.getElementById("exampleModal");
var i;

var img = document.getElementsByClassName("myImg");
var modalImg = document.getElementById("img01");

 for(i=0;i< img.length;i++)
   {    
    img[i].onclick = function(){

    modal.style.display = "block";
       modalImg.src = this.src;

 }
}

var span = document.getElementsByClassName("close")[0];


span.onclick = function() { 
   modal.style.display = "none";
}