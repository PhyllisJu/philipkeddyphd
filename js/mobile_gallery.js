let scrollPosition = 0;

// image 1 overlay
document.getElementById("img1").addEventListener("click", function() {
    // store users' current scroll position
    scrollPosition = window.scrollY;
    // update overlay content
    document.getElementById("img-element").src = "images/gallery1.jpg";
    document.getElementById("img-element").alt = "This is Josie, my German Shepherd, and me, walking on the Berkeley campus, looking for squirrels! The weather was sunny.";
    document.getElementById("image-title").textContent = "Josie and Me";
    document.getElementById("image-description").textContent = "This is Josie, my German Shepherd, and me, walking on the Berkeley campus, looking for squirrels!";
    // show overlay
    document.querySelector(".mobile-image-overlay").classList.remove("hidden");
    document.getElementById("about").classList.add("hidden");
});

document.getElementById("gallery-back-btn").addEventListener("click", function() {
    // hide overlay
    document.querySelector(".mobile-image-overlay").classList.add("hidden");
    document.getElementById("about").classList.remove("hidden");
    // scroll back to users' previous position
    window.scrollTo(0, scrollPosition);
});


// image 2 overlay
document.getElementById("img2").addEventListener("click", function() {
    // store users' current scroll position
    scrollPosition = window.scrollY;
    // update overlay content
    document.getElementById("img-element").src = "images/gallery2.jpg";
    document.getElementById("img-element").alt = "Josie is looking over my shoulder in the car.";
    document.getElementById("image-title").textContent = "Car Companion";
    document.getElementById("image-description").textContent = "Josie is looking over my shoulder in the car. She likes to see where we are going.";
    // show overlay
    document.querySelector(".mobile-image-overlay").classList.remove("hidden");
    document.getElementById("about").classList.add("hidden");
});

document.getElementById("gallery-back-btn").addEventListener("click", function() {
    // hide overlay
    document.querySelector(".mobile-image-overlay").classList.add("hidden");
    document.getElementById("about").classList.remove("hidden");
    // scroll back to users' previous position
    window.scrollTo(0, scrollPosition);
});

// image 3 overlay
document.getElementById("img3").addEventListener("click", function() {
    // store users' current scroll position
    scrollPosition = window.scrollY;
    // update overlay content
    document.getElementById("img-element").src = "images/gallery3.jpg";
    document.getElementById("img-element").alt = "I am with my friends' dogs, Jazz and Indigo, in Canada.";
    document.getElementById("image-title").textContent = 'Relaxing with Two Collies..."Colleagues"';
    document.getElementById("image-description").textContent = "I am with my friends' dogs, Jazz and Indigo, in Canada.";
    document.querySelector(".mobile-image-overlay").classList.remove("hidden");
    document.getElementById("about").classList.add("hidden");
});

document.getElementById("gallery-back-btn").addEventListener("click", function() {
    // hide overlay
    document.querySelector(".mobile-image-overlay").classList.add("hidden");
    document.getElementById("about").classList.remove("hidden");
    // scroll back to users' previous position
    window.scrollTo(0, scrollPosition);
});


// image 4 overlay
document.getElementById("img4").addEventListener("click", function() {
    // store users' current scroll position
    scrollPosition = window.scrollY;
    // update overlay content
    document.getElementById("img-element").src = "images/gallery4.jpg";
    document.getElementById("img-element").alt = "A picture of the entryway to my office.";
    document.getElementById("image-title").textContent = "Entryway to My Office";
    document.getElementById("image-description").textContent = "My office is reached from the second floor landing at the Rockridge Market Hall.";
    document.querySelector(".mobile-image-overlay").classList.remove("hidden");
    document.getElementById("about").classList.add("hidden");
});

document.getElementById("gallery-back-btn").addEventListener("click", function() {
    // hide overlay
    document.querySelector(".mobile-image-overlay").classList.add("hidden");
    document.getElementById("about").classList.remove("hidden");
    // scroll back to users' previous position
    window.scrollTo(0, scrollPosition);
});

// image 5 overlay
document.getElementById("img5").addEventListener("click", function() {
    // store users' current scroll position
    scrollPosition = window.scrollY;
    // update overlay content
    document.getElementById("img-element").src = "images/gallery5.jpg";
    document.getElementById("img-element").alt = "This is a photo of Dr. Keddy's office. There are two recliner chairs and cushions on them. There is also a bookcase.";
    document.getElementById("image-title").textContent = "Dr. Keddy's Office";
    document.getElementById("image-description").textContent = "This will be our meeting space.";
    document.querySelector(".mobile-image-overlay").classList.remove("hidden");
    document.getElementById("about").classList.add("hidden");
});

document.getElementById("gallery-back-btn").addEventListener("click", function() {
    // hide overlay
    document.querySelector(".mobile-image-overlay").classList.add("hidden");
    document.getElementById("about").classList.remove("hidden");
    // scroll back to users' previous position
    window.scrollTo(0, scrollPosition);
});