(function () {

    var myAppVariables = {
        headerMain : document.querySelector('.header-main'),
        logoDark : document.querySelector('.logo-dark'),
        logoClear : document.querySelector('.logo-clear'),
        downloadCV : document.querySelector('.download-cv'),
    };

    var headerChange = function (e) {
        if (window.pageYOffset > 1) {
            myAppVariables.headerMain.classList.add('header-main-animate');
            myAppVariables.downloadCV.classList.add('download-cv-animate');
            myAppVariables.logoDark.style.display = 'block';
            myAppVariables.logoClear.style.display = 'none';
        } else {
            myAppVariables.headerMain.classList.remove('header-main-animate');
            myAppVariables.downloadCV.classList.remove('download-cv-animate');
            myAppVariables.logoDark.style.display = 'none';
            myAppVariables.logoClear.style.display = 'block';
        }


        if(typeof e.stopPropagation === 'function'){
            e.stopPropagation();
        }
        if(typeof  e.cancelBubble !== 'undefined'){
            e.cancelBubble = true;
        }
        if(typeof e.preventDefault === 'function'){
            e.preventDefault();
        }
        if(typeof  e.returnValue !== 'undefined') {
            e.returnValue = false;
        }

    };



    /* create downloadCV button position */
    (function () {
        var buttonCV = myAppVariables.downloadCV,
            headMain = document.querySelector('.header-main'),
            navMain = document.querySelector('.nav-main'),
            headLogo = document.querySelector('.header-logo');

        (function () {
            if (document.documentElement.clientWidth < 767) {
                buttonCV.parentNode.removeChild(buttonCV);
                headLogo.insertBefore(buttonCV, headLogo.children[2]);
            } else {
                navMain.insertBefore(buttonCV, navMain.children[0]);
            }
        })();

        /* event create downloadCV button position*/
        var eventPositionCV = function (e) {
            if(document.documentElement.clientWidth < 767) {
                buttonCV.parentNode.removeChild(buttonCV);
                headLogo.insertBefore(buttonCV, headLogo.children[2]);
            } else {
                navMain.insertBefore(buttonCV, navMain.children[0]);
            }


            if(typeof e.stopPropagation === 'function'){
                e.stopPropagation();
            }
            if(typeof  e.cancelBubble !== 'undefined'){
                e.cancelBubble = true;
            }
            if(typeof e.preventDefault === 'function'){
                e.preventDefault();
            }
            if(typeof  e.returnValue !== 'undefined') {
                e.returnValue = false;
            }

        };

        if (window.addEventListener){
            window.addEventListener('scroll', headerChange);
            window.addEventListener('resize', eventPositionCV);
        } else if (window.attachEvent){
            window.attachEvent('scroll', headerChange);
            window.attachEvent('resize', eventPositionCV);
        } else {
            window.onscroll = headerChange;
            window.onresize = eventPositionCV;
        };
        /* END event create downloadCV button position*/

    })();
    /* END  create downloadCV button position */




    /* event carousel */
    (function () {
        var carouselElem = document.querySelector('.carousel')
            galleryUl = document.querySelector('.ul-gallery'),
            galleryLi = document.querySelector('.li-gallery'),
            buttonPrev = document.querySelector('.prev'),
            buttonNext = document.querySelector('.next'),
            width = 100,
            count = 3,
            position = 0;

        /* click prev */
        var clickPrev = function (e) {

            position = Math.min(position + width * count, 0);
            galleryUl.style.marginLeft = position + '%';


            if(typeof e.stopPropagation === 'function'){
                e.stopPropagation();
            }
            if(typeof  e.cancelBubble !== 'undefined'){
                e.cancelBubble = true;
            }
            if(typeof e.preventDefault === 'function'){
                e.preventDefault();
            }
            if(typeof  e.returnValue !== 'undefined') {
                e.returnValue = false;
            }

        };
        /* END click prev */

        /* click next */
        var clickNext = function (e) {

            position = Math.max(position - width * count, -width * (galleryLi.length - count));
            galleryUl.style.marginLeft = position + '100';


            if(typeof e.stopPropagation === 'function'){
                e.stopPropagation();
            }
            if(typeof  e.cancelBubble !== 'undefined'){
                e.cancelBubble = true;
            }
            if(typeof e.preventDefault === 'function'){
                e.preventDefault();
            }
            if(typeof  e.returnValue !== 'undefined') {
                e.returnValue = false;
            }

        };
        /* END click next */

        if (buttonPrev.addEventListener || buttonNext.addEventListener){
            buttonPrev.addEventListener('click', clickPrev);
            buttonNext.addEventListener('click', clickNext);
        } else if (buttonPrev.attachEvent || buttonNext.attachEvent){
            buttonPrev.attachEvent('click', clickPrev);
            buttonNext.attachEvent('click', clickNext);
        } else {
            buttonPrev.onclick = clickPrev;
            buttonNext.onclick = clickNext;
        };
        /* END event create downloadCV button position*/


        buttonPrev.onclick = function() {
            // сдвиг вправо
            // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
            position = Math.max(position - width * count, -width * (galleryLi.length - count));
            galleryUl.style.marginLeft = position + 'px';
        };

    })();
    /* END event carousel */




})();


