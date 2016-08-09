// /* event carousel */
// (function () {
//     var carouselElem = document.querySelector('.carousel'),
//         galleryDiv = document.querySelector('.gallery'),
//         galleryLi = document.getElementsByClassName('content-gallery'),
//         buttonPrev = document.querySelector('.prev'),
//         buttonNext = document.querySelector('.next'),
//         positionSlide = 0;
//
//     /* click prev */
//     var clickPrev = function (e) {
//
//         var e = e || window.event;
//
//         galleryLi[positionSlide].classList.remove('slide-showed');
//         //galleryLi[positionSlide].style.display = 'none';
//         //galleryLi[positionSlide].style.opacity = 0;
//         positionSlide = positionSlide - 1;
//
//         if (positionSlide < 0) {
//             positionSlide = galleryLi.length - 1;
//         }
//
//         galleryLi[positionSlide].classList.add('slide-showed');
//         //galleryLi[positionSlide].style.display = 'block';
//         //galleryLi[positionSlide].style.opacity = 1;
//         //galleryLi[positionSlide].style.transition = 'opacity 1s ease-out';
//         myAppVariables.frontEventMethods(e);
//
//     };
//     /* END click prev */
//
//
//     /* click prev */
//     var clickNext = function (e) {
//
//         var e = e || window.event;
//
//         galleryLi[positionSlide].classList.remove('slide-showed');
//         //galleryLi[positionSlide].style.display = 'none';
//         //galleryLi[positionSlide].style.opacity = 0;
//         positionSlide = positionSlide + 1;
//
//         if (positionSlide >= galleryLi.length) {
//             positionSlide = 0;
//         }
//         galleryLi[positionSlide].classList.add('slide-showed');
//         //galleryLi[positionSlide].style.display = 'block';
//         //galleryLi[positionSlide].style.opacity = 1;
//         myAppVariables.frontEventMethods(e);
//
//     };
//     /* END click prev */
//
//     /*  event add elements */
//     if (buttonPrev.addEventListener || buttonNext.addEventListener){
//         buttonPrev.addEventListener('click', clickPrev);
//         buttonNext.addEventListener('click', clickNext);
//     } else if (buttonPrev.attachEvent || buttonNext.attachEvent){
//         buttonPrev.attachEvent('click', clickPrev);
//         buttonNext.attachEvent('click', clickNext);
//     } else {
//         buttonPrev.onclick = clickPrev;
//         buttonNext.onclick = clickNext;
//     };
//     /*  END event add elements */
//
//
//     (function () {
//         buttonPrev.style.top = Math.round(carouselElem.clientHeight / 2 - buttonPrev.offsetHeight) + 'px';
//         buttonNext.style.top = Math.round(carouselElem.clientHeight / 2 - buttonNext.offsetHeight) + 'px';
//     })();
//
//
// })();
// /* END event carousel */