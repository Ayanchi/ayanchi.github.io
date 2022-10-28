let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.querySelectorAll(".mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  //console.log(slideIndex);
  if (slideIndex > slides.length) {slideIndex = 1}
  if (slideIndex < 1) {slideIndex = slides.length}
  slides[slideIndex -1].style.display = "block";
  
  //setTimeout(showSlides, 2000); 
}

function plusSlides(n) {
  //console.log(n);
  showSlides(slideIndex += (n-1));
  
}

function currentSlide(n) {
  //console.log(n);
  showSlides(slideIndex = (n-1));
}


///////////////////////////////////////////////////////////////////

let tabcontent = document.getElementsByClassName("tabcontent");
let tablinks = document.getElementsByClassName("tablinks");


function openCity(evt,myBlocks){
  let i;
  
  for(i=0;i<tabcontent.length;i++){
    tabcontent[i].style.display='none';
  }
  
  
  for( i=0; i<tablinks.length; i++){
    tablinks[i].className=tablinks[i].className.replace("active", "");
  };
  
  document.getElementById(myBlocks).style.display = "block";
  evt.currentTarget.className += " active";

  
}

//////////////////////////////////////////////////////////////////



let but = document.querySelector('.buttom');
but.onclick=function(){
  let qw = document.getElementById('qw').value;
  document.getElementById('qw').value='';
  if(qw){
    alert('ваш вопрос в обработке :)!');
    //alert('хороший вопрос но мы не знаеи на него ответ');
    document.getElementById('com').innerHTML= 'хороший вопрос но мы не знаеи на него ответ';
  }else{
    alert('Введите данные :)!');
  }
}





