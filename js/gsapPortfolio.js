gsap.registerPlugin(ScrollTrigger)
if (ScrollTrigger.isTouch !==1) {    
    gsap.fromTo('.gsap-header1', { x: 300, opacity: 0 }, {
        x: 0, opacity: 1,
        scrollTrigger: {
            trigger: '.gsap-header1',
            start: 'top bottom',
            end: 'center center',
            scrub: true
        }
    })

    gsap.fromTo('.gsap-header2', { x: 300, opacity: 0 }, {
        x: 0, opacity: 1,
        scrollTrigger: {
            trigger: '.gsap-header2',
            start: 'top bottom',
            end: 'center center',
            scrub: true
        }
    })

    gsap.fromTo('.gsap-header3', { x: 300, opacity: 0 }, {
        x: 0, opacity: 1,
        scrollTrigger: {
            trigger: '.gsap-header3',
            start: 'top bottom',
            end: 'center center',
            scrub: true
        }
    })

    gsap.fromTo('.hero-gsap-center', { y: 300, opacity: 0 }, {
        y: 0, opacity: 1,
        scrollTrigger: {
            trigger: '.hero-gsap-center',
            start: 'top bottom',
            end: 'center center',
            scrub: true
        }
    })

    gsap.fromTo('.planning-left', { x: -300, opacity: 0 }, {
        x: 0, opacity: 1,
        scrollTrigger: {
            trigger: '.planning-left',
            start: 'top bottom',
            end: 'center center',
            scrub: true
        }
    })

    gsap.fromTo('.planning-center', { y: 300, opacity: 0 }, {
        y: 0, opacity: 1,
        scrollTrigger: {
            trigger: '.planning-center',
            start: 'top bottom',
            end: 'center center',
            scrub: true
        }
    })

    gsap.fromTo('.planning-right', { x: 300, opacity: 0 }, {
        x: 0, opacity: 1,
        scrollTrigger: {
            trigger: '.planning-right',
            start: 'top bottom',
            end: 'center center',
            scrub: true
        }
    })

    gsap.fromTo('.photo-left', { x: -300, opacity: 0 }, {
        x: 0, opacity: 1,
        scrollTrigger: {
            trigger: '.photo-left',
            start: 'top bottom',
            end: 'center center',
            scrub: true
        }
    })

    gsap.fromTo('.photo-right', { x: 300, opacity: 0 }, {
        x: 0, opacity: 1,
        scrollTrigger: {
            trigger: '.photo-right',
            start: 'top bottom',
            end: 'center center',
            scrub: true
        }
    })

    gsap.fromTo('.photo-center', { y: 300, opacity: 0 }, {
        y: 0, opacity: 1,
        scrollTrigger: {
            trigger: '.photo-center',
            start: 'top bottom',
            end: 'center center',
            scrub: true
        }
    })
}