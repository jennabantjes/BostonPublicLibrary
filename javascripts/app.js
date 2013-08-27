
collapseNav();
preventDefault();

setInterval(rotateImages, 4000);

function rotateImages() {
    var image = $('.rotator li');
    var firstImage = $('.rotator li').first;
    var lastImage = $('.rotator li').last;
    var currentImage, nextImage;

    currentImage = $('li.current');
    nextImage = $('li.next');

    //the first image fades away
    currentImage.animate({
        opacity: 0
    }, 4000, function () {
        currentImage.removeClass('current');
    });

    //bring the second image into view
    nextImage.animate({
        opacity: 1
    }, 4000, function () {

        //make the new image the current image
        nextImage.removeClass('next').addClass('current');
        //the next image in the rotation becomes the 'next' image
        nextImage.next().addClass('next');
    });

    //Loop back to beginning
    if($(image[image.length - 2]).hasClass('current')){
        $('#image-1').addClass('next');
    }
}

function collapseNav(){
  "use strict";

    $('div.visit').hide();
    $('div.search').hide();
    $('div.exhibits').hide();
    $('div.tours').hide();

    $('a.visit').click(function(e){
        e.preventDefault();
        $('div.visit').slideToggle().show();

        $('div.search').hide();
        $('div.exhibits').hide();
        $('div.tours').hide();
    });

    $('a.search').click(function(e){
        e.preventDefault();
        $('div.search').slideToggle().show();

        $('div.visit').hide();
        $('div.exhibits').hide();
        $('div.tours').hide();
    });

    $('a.exhibits').click(function(e){
        e.preventDefault();
        $('div.exhibits').slideToggle().show();

        $('div.search').hide();
        $('div.visit').hide();
        $('div.tours').hide();
    });

    $('a.tours').click(function(e){
        e.preventDefault();
        $('div.tours').slideToggle().show();

        $('div.search').hide();
        $('div.exhibits').hide();
        $('div.visit').hide();
    });
}

function preventDefault(){
    $('button').click(function(e){
        e.preventDefault();
    });

    $('a').click(function(e){
        e.preventDefault();
    });
}

