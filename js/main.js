
(function() {

$(function() {
	$('#quest').click(function() {
		$('#answer1').slideToggle('slow');
		$(this).toggleClass('active'); return false
	});
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
			$(this).children('.team__drop').slideDown('slow');
			$(this).mouseleave(function() {
				$(this).children('.team__drop').slideUp('slow');
			});
		});
	});
		
})();
