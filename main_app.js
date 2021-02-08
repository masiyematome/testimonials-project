//Selectors and variables

const testimonialSlides = document.querySelectorAll(".test");
const previousTestimonial = document.querySelector(".previous-testimonial");
const nextTestimonial = document.querySelector(".next-testimonial");
let currentTestimonialIndex = 0;

//Event Listeners

previousTestimonial.addEventListener("click",goToPreviousTestimonial);
nextTestimonial.addEventListener("click",goToNextTestimonial);

//Functions

function goToPreviousTestimonial(){
    if(currentTestimonialIndex == 0){
        testimonialSlides[currentTestimonialIndex].className = "test";
        currentTestimonialIndex = testimonialSlides.length-1;
        testimonialSlides[currentTestimonialIndex].className = "test showing";
    }

    else{
        testimonialSlides[currentTestimonialIndex].className = "test";
        currentTestimonialIndex = currentTestimonialIndex - 1;
        testimonialSlides[currentTestimonialIndex].className = "test showing";
    }
}

function goToNextTestimonial(){

    if(currentTestimonialIndex == testimonialSlides.length - 1){
        testimonialSlides[currentTestimonialIndex].className = "test";
        currentTestimonialIndex = 0;
        testimonialSlides[currentTestimonialIndex].className = "test showing";
    }

    else{
        testimonialSlides[currentTestimonialIndex].className = "test";
        currentTestimonialIndex = currentTestimonialIndex + 1;
        testimonialSlides[currentTestimonialIndex].className = "test showing";
    }

}
