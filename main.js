const slides= document.querySelectorAll('.slide');
const next= document.querySelector('#next');
const prev= document.querySelector('#prev');
const auto= true; 
const intervalTime=4000;
let slideInterval;

const nextSlide= ()=>{
// Get Current Class
const current = document.querySelector('.current');
//Remove Current Class
current.classList.remove('.current'); 
//check for Next Slide
if(current.nextElementSibling){
    //Add Current to Next Sibling
    current.nextElementSibling.classList.add('current');
}else{
    //Add current to start
    slides[0].classList.add('current');
}
setTimeout(()=> current.classList.remove('current'));
}

const prevSlide= ()=>{
    // Get Current Class
    const current = document.querySelector('.current');
    //Remove Current Class
    current.classList.remove('.current'); 
    //check for Prev Slide
    if(current.previousElementSibling){
        //Add Current to Prev Sibling
        current.previousElementSibling.classList.add('current');
    }else{
        //Add current to last
        slides[slides.length-1].classList.add('current');
    }
    setTimeout(()=> current.classList.remove('current'));
    }

    // Button Events

    next.addEventListener('click', e=>{
        nextSlide();
    });
    prev.addEventListener('click', e=>{
        prevSlide();
    });

    // Auto Slide
    if(auto){
        // Run next slide at interval time
        slideInterval= setInterval(nextSlide, intervalTime);
    }

    // Navigation Bar
    const hamburger_menu= document.querySelector(".hamburger-menu");
    const container= document.querySelector(".container");
    const menuContainer= document.querySelector(".menuContainer");
    
    hamburger_menu.addEventListener("click",()=>{
        container.classList.toggle("active");
        const mainhideMain=document.querySelector(".mainHide");
        const mainhideFooter=document.querySelector(".mainHide2");
        const mainhide3=document.querySelector(".mainHide3");
        const mainhide4=document.querySelector(".mainHide4");
        const footerHide=document.querySelector(".footerHide");
        mainhideMain.classList.toggle("hideAll");
        mainhideFooter.classList.toggle("hideAll");
        mainhide3.classList.toggle("hideAll");
        mainhide4.classList.toggle("hideAll");
        footerHide.classList.toggle("hideAll");
    }) 
   

    // Hidding Hamburger_Menu while scrolling
    const body = document.body;
    let lastScroll = 0;
     window.addEventListener('scroll',() =>{
        const currentScroll = window.pageYOffset;
        console.log(window.pageYOffset);
        if(currentScroll <= 0){
            hamburger_menu.classList.remove("scrollDown");
            menuContainer.classList.remove("scrollBorderBottom");
        }
         if(currentScroll > lastScroll && !hamburger_menu.classList.contains('scrollDown') ){
            hamburger_menu.classList.add("scrollDown");
            menuContainer.classList.add("scrollBorderBottom");
            
         }
         lastScroll = currentScroll;
     })



        //Get the button
        var mybutton = document.querySelector(".myBtnBtoT");

        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
         if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
             mybutton.style.display = "block";
         } else {
             mybutton.style.display = "none";
         }
        }

// When the user clicks on the button, scroll to the top of the document
            function topFunction() {
                window.scrollTo({top: 0, behavior: 'smooth'});
}


// Magazine Page Start



// Magazine Page End

















   
    // Scrolling Menu Appear Start
    // document.addEventListener("DOMContentLoaded", function(){
    //     window.addEventListener('scroll', function() {
    //         if (window.scrollY > 50) {
    //         //   document.getElementById('navbar_top').classList.add('fixed-top');
    //           // add padding top to show content behind navbar
    //           navbar_height = document.querySelector('.navbar').offsetHeight;
    //         //   document.getElementById('navbar_height').style.marginTop = "5rem";
    //          } //  else {
    //         //   document.getElementById('navbar_top').classList.remove('fixed-top');
    //         //    // remove padding top from body
    //         //   document.body.style.paddingTop = '0';
    //         // } 
    //     });
    //   }); 



    //   $(window).bind('resize', function(){ 
    //     var barWidth = $(".topBar").width(); 
    //     $(".barModules li").css('margin-left', my dynamic value here));
    // });
     // Scrolling Menu Appear End

    //  function scrollFunction() {
    //     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    //         document.getElementsByClassName(".bar").style.visibility = 'hidden';
          
    //     } else {
    //         document.getElementsByClassName(".bar").style.visibility = 'visible';
          
    //     }
    //   }
    //   window.onscroll = function() {scrollFunction()};