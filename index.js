
let spotsLeft = 10; 


const modal = document.getElementById("modal");
const mainBtn = document.getElementById("mainBtn");
const counterEl = document.getElementById("counter");
const form = document.getElementById("regForm");

mainBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
});


function closeModal() {
    modal.classList.add("hidden");
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    
  
    spotsLeft = spotsLeft - 1; 
    
   
    counterEl.innerText = spotsLeft;
    
    alert("Success! You are registered.");
    closeModal();
});
