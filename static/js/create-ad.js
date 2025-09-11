let menuMobile = document.querySelector(".menu-icon-mobile")
let navMobileChild = document.querySelectorAll(".nav-child-mobile")
let navChild = document.querySelectorAll(".nav-child")
let activeMobile = document.querySelectorAll(".active-mobile")
let navMobile = document.querySelector(".nav-mobile")
let menuIconIsClick = document.querySelector(".menu-im-cl")
let cityItemAd = document.querySelectorAll(".cityItem")
let cityName = document.querySelector(".city-name")

navChild.forEach(function(item) {
    item.addEventListener("click", function() {
        navChild.forEach(item => {
            item.classList.remove("active")
        });
        item.classList.add("active");
    });
});


menuMobile.addEventListener("click", function () {
    navMobile.classList.toggle("nav-mobile-active")
    menuMobile.style.display = "none"
    menuIconIsClick.style.display = "flex"
});
menuIconIsClick.addEventListener("click", function () {
    navMobile.classList.toggle("nav-mobile-active")
    menuMobile.style.display = "flex"
    menuIconIsClick.style.display = "none"
});

// new


let chooseCity = document.getElementById("choose-public-element")
let privateCity = document.getElementById("choose-priv-element")
chooseCity.addEventListener("click", function(){    

    if (privateCity.style.display === "" || privateCity.style.display === "none"){
        privateCity.style.display = "flex"        
    }else{
        privateCity.style.display = "none"    
    }
})

cityItemAd.forEach(item => {
    item.addEventListener("click", function() {
        cityName.textContent = item.textContent; // city-name dəyişir
        privateCity.style.display = "none"; // seçdikdən sonra dropdown bağlanır
    });
});
