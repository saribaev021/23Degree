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
let slideImage = document.querySelector('.slide-image');
let slideImage2 = document.querySelector('.slide-image2');
let slideImage3 = document.querySelector('.slide-image3');
let slideImage4 = document.querySelector('.slide-image4');
let slideImageURL = ["img/portfolio/1.png", "img/portfolio/2.png", "img/portfolio/3.png", "img/portfolio/4.png", "img/portfolio/5.png", "img/portfolio/6.png"];
let slideImageURL2 = ["img/portfolio/2.png", "img/portfolio/4.png", "img/portfolio/1.png", "img/portfolio/5.png", "img/portfolio/6.png", "img/portfolio/3.png"];
let slideImageURL3 = ["img/portfolio/4.png", "img/portfolio/1.png", "img/portfolio/5.png", "img/portfolio/4.png", "img/portfolio/2.png", "img/portfolio/3.png"];
let slideImageURL4 = ["img/portfolio/6.png", "img/portfolio/5.png", "img/portfolio/2.png", "img/portfolio/3.png", "img/portfolio/4.png", "img/portfolio/1.png"];
let slide = document.querySelectorAll('.slide');
let slide2 = document.querySelectorAll('.slide2');
let slide3 = document.querySelectorAll('.slide3');
let slide4 = document.querySelectorAll('.slide4');
let currentImageIndex = 0
for (let i = 0; i < slide.length; i++) {
	 slide[i].onclick=function(){
	 	currentImageIndex =i
	 	slider(currentImageIndex)
	}
	slide2[i].onclick=function(){
	 	currentImageIndex =i
	 	slider(currentImageIndex)
	}
	slide3[i].onclick=function(){
	 	currentImageIndex =i
	 	slider(currentImageIndex)
	}
	slide4[i].onclick=function(){
	 	currentImageIndex =i
	 	slider(currentImageIndex)
	}
}
function slider(currentImageIndex){
	if(currentImageIndex==0){
	 		document.querySelectorAll('.show-next_slide').forEach(function(element){
				element.disabled = false;
				element.style.opacity="1"
				element.onclick = showNextClick;
			});	
	 		document.querySelectorAll('.show-prev_slide').forEach(function(element){
	 			element.disabled = true;
				element.style.opacity="0.5"
			});
	    }
	    else if(currentImageIndex == (slide.length - 1)){
	    	document.querySelectorAll('.show-prev_slide').forEach(function(element){
	 			element.disabled = false;
				element.style.opacity="1"
				element.onclick = showPrevClick;
			});
	    	document.querySelectorAll('.show-next_slide').forEach(function(element){
				element.disabled = true;
				element.style.opacity="0.5"
			});	
	    }
	    else{
	    	document.querySelectorAll('.show-prev_slide').forEach(function(element){
	 			element.disabled = false;
				element.style.opacity="1"
				element.onclick = showPrevClick;
			});
			document.querySelectorAll('.show-next_slide').forEach(function(element){
				element.disabled = false;
				element.style.opacity="1"
				element.onclick = showNextClick;
			});	

	    }

	 	slideImageURL.splice(currentImageIndex, 1, slide[currentImageIndex].getAttribute('src'))
	 	slideImageURL2.splice(currentImageIndex, 1, slide2[currentImageIndex].getAttribute('src'))
	 	slideImageURL3.splice(currentImageIndex, 1, slide3[currentImageIndex].getAttribute('src'))
	 	slideImageURL4.splice(currentImageIndex, 1, slide4[currentImageIndex].getAttribute('src'))
	 	///////////////////////////////////////////////////////////////////////
	 	///////////////////////////////////////////////////////////////////////
		slideImage.src=slideImageURL[currentImageIndex];
		slideImage2.src=slideImageURL2[currentImageIndex];
		slideImage3.src=slideImageURL3[currentImageIndex];
		slideImage4.src=slideImageURL4[currentImageIndex];
		
}
function showPrevClick(){
	document.querySelectorAll('.show-next_slide').forEach(function(element){
			element.disabled = false;
			element.style.opacity="1";
		});
	currentImageIndex--;
	slideImage.src=slideImageURL[currentImageIndex];
	slideImage2.src=slideImageURL2[currentImageIndex];
	slideImage3.src=slideImageURL3[currentImageIndex];
	slideImage4.src=slideImageURL4[currentImageIndex];
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
	slideImage.src=slideImageURL[currentImageIndex];
	slideImage2.src=slideImageURL2[currentImageIndex];
	slideImage3.src=slideImageURL3[currentImageIndex];
	slideImage4.src=slideImageURL4[currentImageIndex];
	if(currentImageIndex==(slideImageURL.length-1)){
		document.querySelectorAll('.show-next_slide').forEach(function(element){
			element.disabled = true;
			element.style.opacity="0.5";
		});
	}
}