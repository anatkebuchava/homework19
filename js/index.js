// DEPENDENCIES =============================
// elements you wnat to work with
const box1 = document.querySelector(".cs")
const box2 = document.querySelector(".am")
const box3 = document.querySelector(".cn")
const caseStudiesHeading = document.querySelector(".casestudies");

// DATA =====================================

// FUNCTIONS ================================
function scrollToElement(element) {
  element.scrollIntoView({
    behavior: "smooth"
  });
}

// USER INTERACTIONS ========================

// as user clicks box 1
box1.addEventListener("click", function() {
  // scroll to the case studies heading
  scrollToElement(caseStudiesHeading)
})








// console.log("box")
// $(".box").on("click",function(){
//     console.log("box")
// })

// var elmnt = document.getElementsByClassName("box");

// function scrollToelmnt() {
//     elmnt.scrollIntoView(true); // Top
//   }


  function scrollToBox() { 
    console.log("scroll")
    var elmnt = document.getElementById("casestudiesgrid");
    elmnt.scrollIntoView();
  }

//   function scrollToBox1() { 
//     console.log("scroll")
//     var elmnt = document.getElementById("casestudiesgrid");
//     elmnt.scrollIntoView();
//   }

//   function scrollToBox2() { 
//     console.log("scroll")
//     var elmnt = document.getElementById("casestudiesgrid");
//     elmnt.scrollIntoView();
//   }


  box1.addEventListener("click", function(event) {
    scrollToCaseStudies();
   })

   box2.addEventListener("click", function(event) {
    scrollToCaseStudies();
   })

   box3.addEventListener("click", function(event) {
    scrollToCaseStudies();
   })