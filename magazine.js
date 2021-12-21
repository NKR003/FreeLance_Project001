 // Navigation Bar
    const hamburger_menuMaga= document.querySelector(".hamburger-menuMaga");
    const containerMaga= document.querySelector(".containerMagazine");
    // const menuContainer= document.querySelector(".menuContainer");
    
    hamburger_menuMaga.addEventListener("click",()=>{
        containerMaga.classList.toggle("activeMaga");
        const mainhideMainMaga=document.querySelector(".mainHideMaga");
        const mainhideFooterMaga=document.querySelector(".mainHide2Maga");
        // const mainhide3Maga=document.querySelector(".mainHide3Maga");
        // const mainhide4Maga=document.querySelector(".mainHide4Maga");
        const footerHideMaga=document.querySelector(".footerHideMaga");
        mainhideMainMaga.classList.toggle("hideAllMaga");
        mainhideFooterMaga.classList.toggle("hideAllMaga");
        // mainhide3Maga.classList.toggle("hideAllMaga");
        // mainhide4Maga.classList.toggle("hideAllMaga");
        footerHideMaga.classList.toggle("hideAllMaga");
    }) 
   

    // Hidding Hamburger_Menu while scrolling
    // const body = document.body;
    let lastScroll = 0;
     window.addEventListener('scroll',() =>{
        const currentScroll = window.pageYOffset;
        console.log(window.pageYOffset);
        if(currentScroll <= 0){
            hamburger_menuMaga.classList.remove("scrollDownMaga");
        }
         if(currentScroll > lastScroll && !hamburger_menuMaga.classList.contains('scrollDownMaga') ){
            hamburger_menuMaga.classList.add("scrollDownMaga");
            
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