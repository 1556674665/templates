
var mySwiper = new Swiper('.swiper-container', {
	autoplay: 3000, //可选选项，自动滑动
	pagination: '.swiper-pagination',
	slidesPerView: 1,
	paginationClickable: true,
	loop: true,
});

var mySwiper = new Swiper('.swip', {
	autoplay: 3000, //可选选项，自动滑动
	autoplayDisableOnInteraction: false,
	slidesPerView: 4,
	slidesPerGroup: 1,
	spaceBetween: 22,
	paginationClickable: true,
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
	loop: true,
});
var swiper = new Swiper('.swiper', {
	autoplay: 3000, //可选选项，自动滑动
	autoplayDisableOnInteraction: false,
	slidesPerView: 5,
	slidesPerGroup: 1,
	spaceBetween: 21,
	paginationClickable: true,
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
	loop: true,
});
var swipers = new Swiper('.swipers', {
	autoplay: 3000, //可选选项，自动滑动
	autoplayDisableOnInteraction: false,
	slidesPerView: 4,
	slidesPerGroup: 1,
	spaceBetween: 40,
	paginationClickable: true,
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
	loop: true,
});

$(".ind-school .fr ul li").hover(function () {
	$(this).addClass("on").siblings().removeClass("on");
	$(".ind-school .con ul").eq($(".ind-school .fr ul li").index(this)).fadeIn().siblings().hide();
});


$(".ind-class-fr ul li").hover(function () {
	$(this).addClass("on").siblings().removeClass("on");
	$(".ind-class-fr .con .conlist").eq($(".ind-class-fr ul li").index(this)).fadeIn().siblings().hide();
});

$(".indnew-left .fr ul li").hover(function () {
	$(this).addClass("on").siblings().removeClass("on");
	$(".indnew-con .indnew-list").eq($(".indnew-left .fr ul li").index(this)).fadeIn().siblings().hide();
});

$(".indnew-left .indnew-con .fr .con-fr li").eq(0).addClass("on");

$(".indnew-left .indnew-con .fr .con-fr li").hover(function () {
	$(this).siblings().removeClass("on");
	$(this).addClass("on");
});

