$(function() {
	//open and close menu on click
	let menu = $('.menu__list');
	let menuBtn = $('.menu__btn');
	let menuLink = $('.menu__list-link');
	let open = "open";

	menuBtn.on('click', function () {
		menu.toggleClass(open);
		$(this).toggleClass(open);
		
	});
	menuLink.on('click', function(){
		menu.removeClass(open);
		menuBtn.toggleClass(open);

	});
	//close menu on click on not menu
	$(document).mouseup(function (e) {
		if (!menuBtn.is(e.target) && menuBtn.has(e.target).length === 0 &&
			!menu.is(e.target) && menu.has(e.target).length === 0
		) {
			menu.removeClass(open);
			menuBtn.removeClass(open);
		}
	});
	//close menu on scroll page
	$(window).scroll(function () {
		let scrollTop = $(window).scrollTop();
		if (scrollTop > 500) {
			menuBtn.removeClass(open);
            menu.removeClass(open);
		}
    });
});


