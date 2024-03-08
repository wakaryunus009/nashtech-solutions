// Scroll Up to top button
function scrollTopBack(){
  let scrollTopButton = document.querySelector('#scrollUp');
  window.onscroll = function(){
    var scroll = document.documentElement.scrollTop;
    if(scroll >= 250){
      scrollTopButton.classList.add('scrollActive');

    }else{
      scrollTopButton.classList.remove('scrollActive');
    }

  }
}
scrollTopBack()

// nav hide
let navbar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navbar.forEach(function(a){
  a.addEventListener("click",function(){
    navCollapse.classList.remove("show");
  })
})


