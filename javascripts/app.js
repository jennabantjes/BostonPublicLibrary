;(function($){
  "use strict";

    $('div.visit').addClass('hidden');
    $('div.search').addClass('hidden');
    $('div.exhibits').addClass('hidden');
    $('div.tours').addClass('hidden');

    $('a.visit').click(function(){
        $('div.visit').toggleClass('hidden');

        $('div.search').addClass('hidden');
        $('div.exhibits').addClass('hidden');
        $('div.tours').addClass('hidden');
    });

    $('a.search').click(function(){
        $('div.search').toggleClass('hidden');

        $('div.visit').addClass('hidden');
        $('div.exhibits').addClass('hidden');
        $('div.tours').addClass('hidden');
    });

    $('a.exhibits').click(function(){
        $('div.exhibits').toggleClass('hidden');

        $('div.search').addClass('hidden');
        $('div.visit').addClass('hidden');
        $('div.tours').addClass('hidden');
    });

    $('a.tours').click(function(){
        $('div.tours').toggleClass('hidden');

        $('div.search').addClass('hidden');
        $('div.exhibits').addClass('hidden');
        $('div.visit').addClass('hidden');
    });
})(jQuery);
