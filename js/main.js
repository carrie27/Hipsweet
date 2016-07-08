
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

 

(function() {

	$(function() {
	$('#ingr').click(function() {
		$('#info-text-hov').slideToggle('slow');
		$(this).toggleClass('show__info-text'); return false
	});
});

})();

// (function(){
// 	$(document).ready(function(){
// 		$('.slider__list').bxSlider();
// 	});
// })();


(function(){
	$(function(){
		$('#phone').mask('8(000)000-00-00');
	});
})();


(function() {
	$(function() {
		$('.page-header__nav-list li').mouseover(function() {
			$(this).children('.team__drop').slideDown('slow');
			$(this).mouseleave(function() {
				$(this).children('.team__drop').slideUp('slow');
			});
		});
	});
		
})();

(function() {
	$('.our-team__link').on('click', function(e){
		    e.preventDefault();
	$(.'our-team__list li').mouseover(function() {
		$(.'our-team__list-item').addClass('active-team')
	});

})();
