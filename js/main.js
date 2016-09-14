
(function() {

	$('.acco__trigger').on('click', function(e){
		    e.preventDefault();
		var    
			$this = $(this),
			container = $this.closest('.acco'),
			item = $this.closest('.acco-item'),
			currentContent = item.find('.acco__content'),
			duration = 500;

		if (!item.hasClass('active')) {
			
			item
			.addClass('active')
			.siblings()
			.find('.acco__content')
			.slideUp();

			currentContent.slideDown(duration);
		}
		else {
			item.removeClass('active');
			currentContent.slideUp(duration);
		}
	});
})();

 


(function(){
	$(document).ready(function(){
		$('.slider__list').bxSlider();
	});
})();



(function(){
	$(function(){
		$('#phone').mask('8(000)000-00-00');
	});
})();


(function() {
	$(function() {
		$('.page-header__nav-list li').mouseover(function() {
			$(this).children('.team__drop').stop(true, true).slideDown('slow');
			$(this).mouseleave(function() {
				$(this).children('.team__drop').slideUp('slow');
			});
		});
	});
		
})();


(function() {
	$(function() {
		$('.page-header__nav-list li').mouseover(function() {
			$(this).children('.sweet__drop-list').stop(true, true).slideDown('slow');
			$(this).mouseleave(function() {
				$(this).children('.sweet__drop-list').slideUp('slow');
			});
		});
	});
		
})();

(function() {
	$(function() {
		$('.page-header__nav-list li').mouseover(function() {
			$(this).children('.company__drop-list').slideDown('slow');
			$(this).mouseleave(function() {
				$(this).children('.company__drop-list').slideUp('slow');
			});
		});
	});
		
})();


(function() {
	$('.our-team__list-item').on('click', function(e){
		    e.preventDefault();

	var
		$this = $(this),
		tabsContent = $('.team-item'),
		ndx = $(this).index();

		$this
		.addClass('active')
		.siblings()
		.removeClass('active');

		tabsContent
		.eq(ndx)
		.addClass('active')
		.siblings()
		.removeClass('active');


	});

})();


(function() {
	ymaps.ready(init);
    var myMap;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [59.89768473690439,30.396409280273396],
            zoom: 13,
            controls: []
        });

        myPlacemark = new ymaps.Placemark([59.89768473690439,30.396409280273396], 
    	{ hintContent: 'Санкт-Петербург',
    	 balloonContent: 'Hipsweet' },
    	{ 
    	iconLayout: 'default#image',
        iconImageHref: 'image/icons/map-check.png',
        iconImageSize: [42, 59],
        iconImageOffset: [-8, -50] 
    });

        myMap.geoObjects.add(myPlacemark);

        myMap.behaviors
    // Отключаем некоторые включенные по умолчанию поведения:
    //  - drag - перемещение карты при нажатой левой кнопки мыши;
    //  - rightMouseButtonMagnifier - увеличение области, выделенной
    //    правой кнопкой мыши.
    .disable(['drag', 'rightMouseButtonMagnifier', 'scrollZoom']);
    
    }

    
})();	

