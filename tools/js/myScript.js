const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
});
sr.reveal('#home',{delay: 300}); 
sr.reveal('#about_me',{delay: 300}); 
sr.reveal('#education',{delay: 300}); 
sr.reveal('#skills',{delay: 300}); 
function Skill()
{
$('.skill_per').each(function(){
  var $this = $(this);
  var per = $this.attr('per');
  $this.css("width",per+'%');
});
}
function myFunction() {
  var x = document.getElementById("mynav");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}
var face= document.querySelector(".social");
face.animate([
  {transform: 'translateY(0em)'},
  {transform: 'translateY(-5em)'},
  {transform: 'translateY(5em)'}
],{
  duration: 2000,
  iterations: 2,
  direction: "alternate"

});