/* Start Http Requests with Axios */
// Get data
const URL = "https://jsonplaceholder.typicode.com/photos?albumId=1";

// Initialize Swiper.
var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 15,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 15,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});

/** API axios */
axios.get(URL)
    // Request Success.
    .then(Response => {
        // console.log('Response:', Response.data)
        // Image Oraginal
        let result = document.querySelector(".Image-Oraginal");
        // Under Images
        let resultUnderImage = document.querySelector(".Under-Images");
        // For Loop
        for(var i=0; i<Response.data.length; i++) {
            let imageURL = Response.data[i].url
            let imageUnderURL = Response.data[i].url
            // console.log(imageURL)

            // Create New Element Div and Images private Image Original.
            let myDiv = document.createElement('div');
            let myImage = document.createElement('img');

            // Create New Element Div and Images private Under Images.
            let myDivUnder = document.createElement('div');
            let myImageUnder = document.createElement('img');

            // Class Div
            myDiv.className = 'swiper-slide';
            // Src image = foor loop
            myImage.src = imageURL;
            // Append image to element.
            myDiv.appendChild(myImage);


            // Class Div
            myDivUnder.className = 'swiper-slide';
            // Src image = foor loop
            myImageUnder.src = imageUnderURL;
            // Append image to element.
            myDivUnder.appendChild(myImageUnder);
            
            // Append myDiv To Document.
            result.appendChild(myDiv);
            resultUnderImage.appendChild(myDivUnder);
            
            // result.append(myDiv);
            // result.appendChild(myDiv);
            // result.lastChild(myDiv);
            // document.getElementsByClassName("swiper-wrapper").innerHTML = myDiv;
            // console.log(result.innerHTML);
            // console.log(myDivUnder);
        }
        // swiper.reInit();
    })
    // Request not Success.
    .catch(error => console.log('Error: ', error))


// Initialize Swiper 2.
var swiper5 = new Swiper(".mySwiper5", {
    loop: true,
    spaceBetween: 15,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper3 = new Swiper(".mySwiper3", {
    loop: true,
    spaceBetween: 15,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper5,
    },
});