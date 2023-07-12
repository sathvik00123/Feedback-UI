const ratingEls = document.querySelectorAll(".rating");

let selectedRating = "";

let containerEl = document.getElementById("container");
let btnEl = document.getElementById("btn");


ratingEls.forEach((ratingEl) => {
    ratingEl.addEventListener("click", (event) => {
        removeActive();
        selectedRating = event.target.innerText || event.target.parentNode.innerText;
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active");
    })
})

btnEl.addEventListener("click", ()=>{
    if(selectedRating !== ""){
        containerEl.innerHTML = `
        <strong>Thank you!</strong>
        <br>
        <br>
        <strong>Feedback : ${selectedRating}</strong>
        <p>We'll use your feeback to improve our customer support.</p>
        `;
    }
})


function removeActive(){
    ratingEls.forEach((ratingEl) => {
        ratingEl.classList.remove("active");
    })
}