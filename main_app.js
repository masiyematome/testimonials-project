//Selectors and variables

const previousTestimonial = document.querySelector(".previous-testimonial");
const nextTestimonial = document.querySelector(".next-testimonial");
const userName = document.querySelector(".user-name");
const userImage = document.querySelector(".user-image");
const userTestimony = document.querySelector(".user-testimony");

let currentTestimonyIndex = 0;

//Event Listeners


//Functions

function assignValuesToElements(arrayOfTestimonials){
    userName.innerText = arrayOfTestimonials[currentTestimonyIndex].nameOfUser;
    userImage.src = arrayOfTestimonials[currentTestimonyIndex].imageOfUser;
    userTestimony.innerText = arrayOfTestimonials[currentTestimonyIndex].testimonyOfUser;
}

function printTestimonials(arrayOfTestimonials){

    assignValuesToElements(arrayOfTestimonials);

    previousTestimonial.addEventListener("click" , () => {
        if(currentTestimonyIndex == 0){
            currentTestimonyIndex = arrayOfTestimonials.length-1;
        }

        else{
            currentTestimonyIndex = currentTestimonyIndex - 1;
        }

        assignValuesToElements(arrayOfTestimonials);

    });
    
}

~function objectInitialization(theArrayOfTestimonials){
    theArrayOfTestimonials = [
        {
            nameOfUser : "Alexa Mathon",
            imageOfUser: "pics/AlexaMathon.png",
            testimonyOfUser : "I am completely blown away. Wow what great service, I love it!",
        },

        {
            nameOfUser : "Andrew Simons",
            imageOfUser: "pics/AndrewSimons.jpg",
            testimonyOfUser : "I'm good to go. Just what I was looking for. It's just amazing.I like software more and more each day because it makes my life a lot easier",
        },

        {
            nameOfUser : "Masilo Rabanyane",
            imageOfUser: "pics/MasiloRabanyane.jpg",
            testimonyOfUser : "I have gotten at least 50 times the value from software. I will refer everyone I know. We can't understand how we've been living without software. I can't say enough about software.",
        },

        {
            nameOfUser : "Nora Salamon Toth",
            imageOfUser: "pics/NoraSalamonToth.jpg",
            testimonyOfUser : "This is simply unbelievable!",
        },

        {
            nameOfUser : "Samuel Maponya",
            imageOfUser: "pics/SamuelMaponya.png",
            testimonyOfUser : "You guys rock! The very best. We've seen amazing results already. We've used software for the last five years.",
        }
    ]

    printTestimonials(theArrayOfTestimonials);

}();




