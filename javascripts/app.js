;(function($){
  "use strict";

    $('div.visit').hide();
    $('div.search').hide();
    $('div.exhibits').hide();
    $('div.tours').hide();

    $('a.visit').click(function(){
        $('div.visit').slideToggle().show();

        $('div.search').hide();
        $('div.exhibits').hide();
        $('div.tours').hide();
    });

    $('a.search').click(function(){
        $('div.search').slideToggle().show();

        $('div.visit').hide();
        $('div.exhibits').hide();
        $('div.tours').hide();
    });

    $('a.exhibits').click(function(){
        $('div.exhibits').slideToggle().show();

        $('div.search').hide();
        $('div.visit').hide();
        $('div.tours').hide();
    });

    $('a.tours').click(function(){
        $('div.tours').slideToggle().show();

        $('div.search').hide();
        $('div.exhibits').hide();
        $('div.visit').hide();
    });

    var firstImage = $('#image-1');
    var currentImage, nextImage;

    setInterval(rotateImages, 4000);

    function rotateImages() {
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
            nextImage.next().addClass('next').removeClass('behind');
            //make the last image loop to the first image

        });
    }

})(jQuery);


