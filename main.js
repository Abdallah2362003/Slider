const controls = document.querySelectorAll(".controls img");
const preview = document.querySelector(".preview img");
const nextSlide = document.querySelector(".indecators .next");
const prevSlide = document.querySelector(".indecators .prev");


let currentSlide = 0;

nextSlide.addEventListener("click", function(){
    currentSlide = (currentSlide + 1) % controls.length;
    showSlide(currentSlide);
});

prevSlide.addEventListener("click", function(){
    currentSlide = (currentSlide - 1 + controls.length) % controls.length;
    showSlide(currentSlide);
});

function showSlide(currentControl){
    const currentSrc = controls[currentControl].getAttribute("src");
    preview.setAttribute("src", currentSrc);
}

for (let i = 0; i < controls.length; i++){
    controls[i].addEventListener("click", function(){
        showSlide(i);
    });
}