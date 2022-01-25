var loadScrollfn=false;
$(document).ready(function () {
  $.getJSON('mainData.json', function (jd) {
    createCarousel(jd.tittle_image);
    createProduct(jd.products);
    loadScrollfn=true;
    createAboutDiv(jd.about_des);
    window.onscroll = function () { scrollFunction() };
  });
  
});


function createCarousel(content) {
  var divContent="";
  for (i=0;i<content.length;i++){
    divContent = divContent+'<div class="carousel-item carousel-item1 ' + content[i].type + '">' +
      '<img class="d-block w-100" src="' + content[i].path + '" alt="Third slide">' +
      '<div class="carousel-caption">' +
      '<h5>' + content[i].heading + '</h5>' +
      '<p>' + content[i].para + '</p>' +
      '</div>' +
      '</div>';
  } 
  $('#mainCarousel').html(divContent);

}

function createProduct(content){
  var divContent="";
  for (i=0;i<content.length;i++){
    clas='';
    if(content[i].id<2){
      clas='card1';
    }else{
      clas='card2';
    }

divContent=divContent+'<div class="col-md-3 col-12 pr_div d-flex justify-content-center">'+
'<div class="card '+clas+'" style="width: 16rem;" id="card">'+
  '<img style="width: 253px; height: 250px;" class="card-img-top" src="'+content[i].path+'"  alt="Card image cap">'+
  '<div class="card-body">'+
   '<h5 class="card-title text-center">'+content[i].name+'</h5>'+
   '<p class="card-text text-center">'+content[i].des+'</p>'+
   '<a href="" class="btn" >Know More<i class="fas fa-arrow-circle-right"></i></a>'+
  '</div>'+
'</div>'+
'</div>';
}
$('#productDiv').html(divContent);

}


function createAboutDiv(content){
  var divContent='';
  $('#aboutDiv').html('<p>'+content.des+'</p>');
  for (i=0;i<content.images.length;i++){
    divContent=divContent+
    '<div class="carousel-item carousel-item2 '+content.images[i].type+'">'+
      '<img class="d-block w-100" src="'+content.images[i].path+'" alt="First slide">'+
    '</div>';
  }  
  $('#aboutImages').html(divContent);
}



function scrollFunction() {
  if(loadScrollfn){
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
      document.getElementById("nave1").style.background = "white";
      document.getElementById("nave1").style.color = "black";
    } else {
      document.getElementById("nave1").style.cssText = "color: white !important; background-color: brown; border-radius: 5px;"
    }
    if (document.body.scrollTop > 600 && document.body.scrollTop < 1250 || document.documentElement.scrollTop > 600 && document.documentElement.scrollTop < 1250) {
      document.getElementById("nave2").style.cssText = "color: white !important; background-color: brown; border-radius: 5px;"
    } else {
      document.getElementById("nave2").style.cssText = "color: black; background-color: white; "
    }
    if (document.body.scrollTop > 1250 && document.body.scrollTop < 1800 || document.documentElement.scrollTop > 1250 && document.documentElement.scrollTop < 1800) {
      document.getElementById("nave3").style.cssText = "color: white !important; background-color: brown; border-radius: 5px;"
      document.getElementsByClassName("card1").style.cssText = "animation: 1s ease-out 0s 1 slideInLeft;"
    } else {
      document.getElementById("nave3").style.cssText = "color: black; background-color: white; "
    }
    if (document.body.scrollTop > 1800 && document.body.scrollTop < 2000 || document.documentElement.scrollTop > 1800 && document.documentElement.scrollTop < 4000) {
      document.getElementById("nave4").style.cssText = "color: white !important; background-color: brown; border-radius: 5px;"
    } else {
      document.getElementById("nave4").style.cssText = "color: black; background-color: white; "
    }
  }
}