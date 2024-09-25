document.addEventListener("DOMContentLoaded", function() {
    var slider = document.querySelector('.carousel');
    var slideContainer = document.querySelector('.carousel-container');
    var slides = document.querySelectorAll('.carousel-card');

    var slideWidth = slides[0].offsetWidth;
    var slideHeight = slides[0].offsetHeight;
    var slideCount = slides.length;
    var totalWidth = slideCount * slideWidth;

    slider.style.width = slideWidth + 'px';
    slider.style.height = slideHeight + 'px';

    slideContainer.style.width = totalWidth + 'px';
    slideContainer.style.marginLeft = -slideWidth + 'px';

    document.getElementById('left-arrow').addEventListener('click', function() {
        slideContainer.style.transition = "left 0.6s";
        slideContainer.style.left = slideWidth + 'px';
        setTimeout(function() {
            slideContainer.style.transition = "none";
            slideContainer.insertBefore(slideContainer.lastElementChild, slideContainer.firstElementChild);
            slideContainer.style.left = '0';
        }, 600);
    });

    document.getElementById('right-arrow').addEventListener('click', function() {
        slideContainer.style.transition = "left 0.6s";
        slideContainer.style.left = -slideWidth + 'px';
        setTimeout(function() {
            slideContainer.style.transition = "none";
            slideContainer.appendChild(slideContainer.firstElementChild);
            slideContainer.style.left = '0';
        }, 600);
    });
});

function togglePopupMovie1() {
    document.getElementById("popup-movie-1").classList.toggle("active");
}

function togglePopupMovie2() {
    document.getElementById("popup-movie-2").classList.toggle("active");
}

function togglePopupMovie3() {
    document.getElementById("popup-movie-3").classList.toggle("active");
}

function togglePopupMovie4() {
    document.getElementById("popup-movie-4").classList.toggle("active");
}

function togglePopupMovie5() {
    document.getElementById("popup-movie-5").classList.toggle("active");
}

function togglePopupMovie6() {
    document.getElementById("popup-movie-6").classList.toggle("active");
}

function togglePopupMovie7() {
    document.getElementById("popup-movie-7").classList.toggle("active");
}

function togglePopupMovie8() {
    document.getElementById("popup-movie-8").classList.toggle("active");
}

function togglePopupBook1() {
    document.getElementById("popup-book-1").classList.toggle("active");
}

function togglePopupBook2() {
    document.getElementById("popup-book-2").classList.toggle("active");
}

function togglePopupBook3() {
    document.getElementById("popup-book-3").classList.toggle("active");
}

function togglePopupBook4() {
    document.getElementById("popup-book-4").classList.toggle("active");
}

function togglePopupBook5() {
    document.getElementById("popup-book-5").classList.toggle("active");
}

function togglePopupBook6() {
    document.getElementById("popup-book-6").classList.toggle("active");
}

function togglePopupBook7() {
    document.getElementById("popup-book-7").classList.toggle("active");
}

function togglePopupBook8() {
    document.getElementById("popup-book-8").classList.toggle("active");
}


function togglePopupTrending1() {
    document.getElementById("popup-music-trending-1").classList.toggle("active");
}

function togglePopupTrending2() {
    document.getElementById("popup-music-trending-2").classList.toggle("active");
}

function togglePopupTrending3() {
    document.getElementById("popup-music-trending-3").classList.toggle("active");
}

function togglePopupTrending4() {
    document.getElementById("popup-music-trending-4").classList.toggle("active");
}

function togglePopupTrending5() {
    document.getElementById("popup-music-trending-5").classList.toggle("active");
}

function togglePopupTrending6() {
    document.getElementById("popup-music-trending-6").classList.toggle("active");
}

function togglePopupTrending7() {
    document.getElementById("popup-music-trending-7").classList.toggle("active");
}

function togglePopupTrending8() {
    document.getElementById("popup-music-trending-8").classList.toggle("active");
}

function togglePopupTrending9() {
    document.getElementById("popup-music-trending-9").classList.toggle("active");
}

function togglePopupTrending10() {
    document.getElementById("popup-music-trending-10").classList.toggle("active");
}



function togglePopupFeatured1() {
    document.getElementById("popup-music-featured-1").classList.toggle("active");
}

function togglePopupFeatured2() {
    document.getElementById("popup-music-featured-2").classList.toggle("active");
}

function togglePopupFeatured3() {
    document.getElementById("popup-music-featured-3").classList.toggle("active");
}

function togglePopupFeatured4() {
    document.getElementById("popup-music-featured-4").classList.toggle("active");
}

function togglePopupFeatured5() {
    document.getElementById("popup-music-featured-5").classList.toggle("active");
}

function togglePopupFeatured6() {
    document.getElementById("popup-music-featured-6").classList.toggle("active");
}

function togglePopupFeatured7() {
    document.getElementById("popup-music-featured-7").classList.toggle("active");
}

function togglePopupFeatured8() {
    document.getElementById("popup-music-featured-8").classList.toggle("active");
}

function togglePopupFeatured9() {
    document.getElementById("popup-music-featured-9").classList.toggle("active");
}

function togglePopupFeatured10() {
    document.getElementById("popup-music-featured-10").classList.toggle("active");
}




document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('trending-news-1').addEventListener('click', function() {
        window.open('https://www.bbc.com/news/articles/c977106pdg4o', '_blank');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('trending-news-2').addEventListener('click', function() {
        window.open('https://www.bbc.com/news/articles/c88zzl5g69vo', '_blank');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('trending-news-3').addEventListener('click', function() {
        window.open('https://www.foxnews.com/lifestyle/dog-goes-viral-tiktok-emotional-reaction-watching-lion-king', '_blank');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('trending-news-4').addEventListener('click', function() {
        window.open('https://www.music-news.com/news/UK/173764/Adele-hails-Sabrina-Carpenter-s-viral-hit-Espresso-my-jam', '_blank');
    });
});