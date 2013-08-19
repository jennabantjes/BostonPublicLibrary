;(function($){
  "use strict";

    $('div.visit').addClass('hidden');
    $('div.search').addClass('hidden');
    $('div.exhibits').addClass('hidden');
    $('div.tours').addClass('hidden');

    $('a.visit').click(function(){
        $('div.visit').slideToggle().toggleClass('hidden');

        $('div.search').addClass('hidden');
        $('div.exhibits').addClass('hidden');
        $('div.tours').addClass('hidden');
    });

    $('a.search').click(function(){
        $('div.search').slideToggle().toggleClass('hidden');

        $('div.visit').addClass('hidden');
        $('div.exhibits').addClass('hidden');
        $('div.tours').addClass('hidden');
    });

    $('a.exhibits').click(function(){
        $('div.exhibits').slideToggle().toggleClass('hidden');

        $('div.search').addClass('hidden');
        $('div.visit').addClass('hidden');
        $('div.tours').addClass('hidden');
    });

    $('a.tours').click(function(){
        $('div.tours').slideToggle().toggleClass('hidden');

        $('div.search').addClass('hidden');
        $('div.exhibits').addClass('hidden');
        $('div.visit').addClass('hidden');
    });
})(jQuery);
