document.querySelectorAll('.show-slider').forEach(function(element){
	element.onclick=showSlider;
});
document.querySelectorAll('.close-slider').forEach(function(element){
	element.onclick=closeSlider;
});
document.querySelectorAll('.slider-wrap').forEach(function(element){
	element.onclick=closeSlider;
});
function showSlider(){
	document.querySelectorAll('.slider-wrap').forEach(function(element){
			element.classList.remove('slider-hide')
	});
	document.onkeydown=function(event){
	if(event.keyCode==27){
		closeSlider();
	}
}
}
function closeSlider(){
	document.querySelectorAll('.slider-wrap').forEach(function(element){
			element.classList.add('slider-hide')
	});
	document.onkeydown=null;
}
document.querySelectorAll('.slider').forEach(function(element){
    	element.onclick = function (event) {
   		 event.stopPropagation();event.stopPropagation();
   		}
});
let slideImages = document.querySelectorAll('.slide-image');
let slideImagesURL = ["img/portfolio/1.png", "img/portfolio/2.png", "img/portfolio/3.png", "img/portfolio/4.png", "img/portfolio/5.png", "img/portfolio/6.png"];
let currentImageIndex = 0
for (let i = 0; i < slideImages.length; i++) {
		slideImages[i].src=slideImagesURL[currentImageIndex];
	}
document.querySelectorAll('.show-prev_slide').forEach(function(element){
	element.disabled = true;
	element.style.opacity="0.5"
	element.onclick = showPrevClick;
});
document.querySelectorAll('.show-next_slide').forEach(function(element){
	element.onclick = showNextClick;
});
function showPrevClick(){
	document.querySelectorAll('.show-next_slide').forEach(function(element){
			element.disabled = false;
			element.style.opacity="1";
		});
	currentImageIndex--;
		for (let i = 0; i < slideImages.length; i++) {
			slideImages[i].src=slideImagesURL[currentImageIndex];
		}
		if(currentImageIndex == 0){
			document.querySelectorAll('.show-prev_slide').forEach(function(element){
				element.disabled = true;
				element.style.opacity="0.5";
			});
		}
}
function showNextClick(){
	document.querySelectorAll('.show-prev_slide').forEach(function(element){
		element.disabled = false;
		element.style.opacity="1";
	});
	currentImageIndex++;
	for (let i = 0; i < slideImages.length; i++) {
		slideImages[i].src=slideImagesURL[currentImageIndex];
	}
	if(currentImageIndex==(slideImagesURL.length-1)){
		document.querySelectorAll('.show-next_slide').forEach(function(element){
			element.disabled = true;
			element.style.opacity="0.5";
		});
	}
}