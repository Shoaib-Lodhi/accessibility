var pageLoadTL = gsap.timeline({paused: true});
TweenMax.set('.partnersCircleAnimation', {opacity: 0, visibility: "hidden"})
TweenMax.to('.dash1', 100, {
    rotation: "360",
    duration: 1,
    transformOrigin: "50% 50%",
    ease: Linear.easeNone,
    repeat: -1
});
TweenMax.to('.dash2', 100, {
    rotation: "-360",
    duration: 1,
    transformOrigin: "50% 50%",
    ease: Linear.easeNone,
    repeat: -1
});
TweenMax.to('.dash3', 100, {
    rotation: "-360",
    duration: 1,
    transformOrigin: "50% 50%",
    ease: Linear.easeNone,
    repeat: -1
});

function pageLoading() {
    pageLoadTL.fromTo(".box-1", {
        rotation: 65,
        scale: '0',
        transformOrigin: "50% 50%",
        ease: "Power2.easeOut"
    }, {duration: 1, rotation: 0, scale: '1', ease: "Power2.easeOut"})
    pageLoadTL.fromTo(".box-2", {
        rotation: 65,
        scale: '0',
        transformOrigin: "50% 50%",
        ease: "Power2.easeOut"
    }, {duration: 1, rotation: 0, scale: '1', ease: "Power2.easeOut"}, '-=0.8')

    pageLoadTL.fromTo(".text-show-1", {opacity: 0, ease: "none"}, {
        duration: 1,
        opacity: 1,
        ease: "none"
    }, '-=0.2')
    pageLoadTL.fromTo(".logo-show-1", {opacity: 0, ease: "none"}, {
        duration: 1,
        opacity: 1,
        ease: "none"
    }, '-=1')
    pageLoadTL.fromTo(".box-3", {
        rotation: 65,
        scale: '0',
        transformOrigin: "50% 50%",
        ease: "Power2.easeOut"
    }, {duration: 1, rotation: 0, scale: '1', ease: "Power2.easeOut"})
    pageLoadTL.fromTo(".text-show-2", {opacity: 0, ease: "none"}, {
        duration: 1,
        opacity: 1,
        ease: "none"
    })
    pageLoadTL.fromTo(".logo-show-2", {opacity: 0, ease: "none"}, {
        duration: 1,
        opacity: 1,
        ease: "none"
    }, '-=1')
    pageLoadTL.play();
}

$(document).ready(function (){
    if ($('#scrollToSection').length > 0) {
        $('#scrollToSection').one('inview', function (event, isInView) {
            if (isInView) {
                TweenMax.to('.partnersCircleAnimation', {opacity: 1, visibility: "visible"})
                pageLoading();
            }
        });
    }
})


/*
$(window).scroll(function () {
    if ($(this).scrollTop() === sectionTop) {

    }
});*/
