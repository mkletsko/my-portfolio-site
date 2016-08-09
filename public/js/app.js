var App;
App = (function () {

    var myAppVariables = {
        /* propertys */
        headerMain: document.querySelector('.header-main'),
        logoDark: document.querySelector('.logo-dark'),
        logoClear: document.querySelector('.logo-clear'),
        downloadCV: document.querySelector('.download-cv'),

        frontEventMethods: function (e) {

            if (typeof e.stopPropagation === 'function') {
                e.stopPropagation();
            }
            if (typeof  e.cancelBubble !== 'undefined') {
                e.cancelBubble = true;
            }
            if (typeof e.preventDefault === 'function') {
                e.preventDefault();
            }
            if (typeof  e.returnValue !== 'undefined') {
                e.returnValue = false;
            }

        },


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


        myAppVariables.frontEventMethods(e);

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
            if (document.documentElement.clientWidth < 767) {
                buttonCV.parentNode.removeChild(buttonCV);
                headLogo.insertBefore(buttonCV, headLogo.children[2]);
            } else {
                navMain.insertBefore(buttonCV, navMain.children[0]);
            }

            myAppVariables.frontEventMethods(e);

        };

        if (window.addEventListener) {
            window.addEventListener('scroll', headerChange);
            window.addEventListener('resize', eventPositionCV);
        } else if (window.attachEvent) {
            window.attachEvent('scroll', headerChange);
            window.attachEvent('resize', eventPositionCV);
        } else {
            window.onscroll = headerChange;
            window.onresize = eventPositionCV;
        }
        ;
        /* END event create downloadCV button position*/

    })();
    /* END  create downloadCV button position */


    




})();


