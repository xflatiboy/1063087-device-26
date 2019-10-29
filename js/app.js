var buttons = document.querySelectorAll('.services-flex .button');
var slides = document.querySelectorAll('.service-slide');

[].slice.call(buttons).forEach( function(item) {
	item.addEventListener('click', function(evt) {
		[].slice.call(buttons).forEach( function(_item) {
			_item.classList.remove('is-active');
		});

		evt.target.classList.add('is-active');
		var slideId = evt.target.dataset.slide;
		var slide = document.querySelector('#'+slideId);
			[].slice.call(slides).forEach( function(_slide) {
				_slide.classList.remove('is-active');
			})

			slide.classList.add('is-active');
	});
});

var overlay = document.querySelector('.overlay');
var map = document.querySelector('.map');
var form = document.querySelector('.form-message-us');
var message = document.querySelector('#message-us');
var mapButton = document.querySelector('#map-handler')
var popups = document.querySelectorAll('.popup')

message.addEventListener('click', function(evt) {
	evt.preventDefault();
	overlay.classList.add('is-active');
	form.classList.add('is-active');
})

mapButton.addEventListener('click', function(evt) {
	evt.preventDefault();
	overlay.classList.add('is-active');
	map.classList.add('is-active');
})

var closebuttons = document.querySelectorAll('.close');

	[].slice.call(closebuttons).forEach( function(button){
		button.addEventListener('click', function(evt) {
			evt.preventDefault();
			overlay.classList.remove('is-active');

			[].slice.call(popups).forEach( function(popup) {
				popup.classList.remove('is-active');
			})
		})
})