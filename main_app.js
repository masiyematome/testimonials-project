//Selectors

const previousTestimonial = document.querySelector(".previous-testimonial");
const nextTestimonial = document.querySelector(".next-testimonial");
const userImage = document.querySelector(".user-image");
const userName = document.querySelector(".user-name");
const userTestimony = document.querySelector(".user-testimony");

//Event Listeners


//Functions

function objectDeclaration(arrayOfTestimonials){
    arrayOfTestimonials.forEach(testimonial => {
        console.log(testimonial.nameOfUser);
        console.log(testimonial.imageOfUser);
        console.log(testimonial.testimonyOfUser);
        console.log("\n");
    })
}

~function objectInitialization(theArrayOfTestimonials){
    theArrayOfTestimonials = [
        {
            nameOfUser : "Alexa Mathon",
            imageOfUser: "AlexaMathon.png",
            testimonyOfUser : "I am completely blown away. Wow what great service, I love it!",
        },

        {
            nameOfUser : "Andrew Simons",
            imageOfUser: "AndrewSimons.jpg",
            testimonyOfUser : "I'm good to go. Just what I was looking for. It's just amazing.I like software more and more each day because it makes my life a lot easier",
        },

        {
            nameOfUser : "Masilo Rabanyane",
            imageOfUser: "MasiloRabanyane.jpg",
            testimonyOfUser : "I have gotten at least 50 times the value from software. I will refer everyone I know. We can't understand how we've been living without software. I can't say enough about software.",
        },

        {
            nameOfUser : "Nora Salamon Toth",
            imageOfUser: "NoraSalamonToth.jpg",
            testimonyOfUser : "This is simply unbelievable!",
        },

        {
            nameOfUser : "Samuel Maponya",
            imageOfUser: "SamuelMaponya.jpg",
            testimonyOfUser : "You guys rock! The very best. We've seen amazing results already. We've used software for the last five years.",
        }
    ]

    objectDeclaration(theArrayOfTestimonials);

}();




