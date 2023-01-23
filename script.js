
const images = document.querySelectorAll("img");
const h3 = document.getElementById("h");
const resetBtn = document.getElementById("reset");
const verifyBtn = document.getElementById("verify");
const para = document.getElementById("para");


let selectedImages = [];


images.forEach(function(image) {
    image.addEventListener("click", function() {
       
        selectedImages.push(image);

        
        if (selectedImages.length === 2) {
            verifyBtn.style.display = "block";
        }
        if (selectedImages.length > 2) {
            selectedImages.shift();
        }
    });
});


verifyBtn.addEventListener("click", function() {
    if (selectedImages[0].className === selectedImages[1].className) {
        para.innerHTML = "You are a human. Congratulations!";
        para.style.display = "block";
    } else {
        para.innerHTML = "We can't verify you as a human. You selected the non-identical tiles.";
        para.style.display = "block";
    }
    verifyBtn.style.display = "none";
    resetBtn.style.display = "block";
});

resetBtn.addEventListener("click", function() {
    selectedImages = [];
    resetBtn.style.display = "none";
    para.style.display = "none";
});
