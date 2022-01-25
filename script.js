$(document).ready(function () {
  $.getJSON('mainData.json', function (jd) {
    createCarousel(jd.tittle_image);
  });
});



function createCarousel(content) {
  var divContent="";
  console.log(content);
  for (i=0;i<content.length;i++){
    console.log(content[i]);
    console.log(content[i].path);
    divContent = divContent+'<div class="carousel-item carousel-item1 ' + content[i].type + '">' +
      '<img class="d-block w-100" src="' + content[i].path + '" alt="Third slide">' +
      '<div class="carousel-caption">' +
      '<h5>' + content[i].heading + '</h5>' +
      '<p>' + content[i].para + '</p>' +
      '</div>' +
      '</div>';
  } $('#mainCarousel').html(divContent);

}

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
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

function scroll(x, y) {
  window.scrollBy(x, y);
}