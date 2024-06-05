gsap.registerPlugin(ScrollTrigger)
if (ScrollTrigger.isTouch !==1) {    
    gsap.fromTo('.hero', { opacity: 1 }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.hero',
            start: 'top',
            end: 'center',
            scrub: true
        }
    })

    gsap.fromTo('.about__img', { x: -300, opacity: 0 }, {
        x: 0, opacity: 1,
        scrollTrigger: {
            trigger: '.about__img',
            start: 'top bottom',
            end: 'center center',
            scrub: true
        }
    })

    gsap.fromTo('.about__text', { x: 300, opacity: 0 }, {
        x: 0, opacity: 1,
        scrollTrigger: {
            trigger: '.about__text',
            start: 'top bottom',
            end: 'center center',
            scrub: true
        }
    })

    gsap.fromTo('.premises__header-gasp', { x: 300, opacity: 0 }, {
        x: 0, opacity: 1,
        scrollTrigger: {
            trigger: '.premises__header-gasp',
            start: 'top bottom',
            end: 'center center',
            scrub: true
        }
    })

    gsap.fromTo('.premises__header-gasp1', { x: 300, opacity: 0 }, {
        x: 0, opacity: 1,
        scrollTrigger: {
            trigger: '.premises__header-gasp1',
            start: 'top bottom',
            end: 'center center',
            scrub: true
        }
    })

    gsap.fromTo('.premises-gsap-left', { x: -300, opacity: 0 }, {
        x: 0, opacity: 1,
        scrollTrigger: {
            trigger: '.premises-gsap-left',
            start: 'top bottom',
            end: 'center center',
            scrub: true
        }
    })

    gsap.fromTo('.premises-gsap-left', { x: -300, opacity: 0 }, {
        x: 0, opacity: 1,
        scrollTrigger: {
            trigger: '.premises-gsap-left',
            start: 'top bottom',
            end: 'center center',
            scrub: true
        }
    })

    gsap.fromTo('.premises-gsap-center', { y: 300, opacity: 0 }, {
        y: 0, opacity: 1,
        scrollTrigger: {
            trigger: '.premises-gsap-center',
            start: 'top bottom',
            end: 'center center',
            scrub: true
        }
    })

    gsap.fromTo('.premises-gsap-right', { x: 300, opacity: 0 }, {
        x: 0, opacity: 1,
        scrollTrigger: {
            trigger: '.premises-gsap-right',
            start: 'top bottom',
            end: 'center center',
            scrub: true
        }
    })

    gsap.fromTo('.dwellings-gsap-left', { x: -300, opacity: 0 }, {
        x: 0, opacity: 1,
        scrollTrigger: {
            trigger: '.dwellings-gsap-left',
            start: 'top bottom',
            end: 'center center',
            scrub: true
        }
    })

    gsap.fromTo('.dwellings-gsap-center', { y: 300, opacity: 0 }, {
        y: 0, opacity: 1,
        scrollTrigger: {
            trigger: '.dwellings-gsap-center',
            start: 'top bottom',
            end: 'center center',
            scrub: true
        }
    })

    gsap.fromTo('.dwellings-gsap-right', { x: 300, opacity: 0 }, {
        x: 0, opacity: 1,
        scrollTrigger: {
            trigger: '.dwellings-gsap-right',
            start: 'top bottom',
            end: 'center center',
            scrub: true
        }
    })

    gsap.fromTo('.kid__logo', { x: 300, opacity: 0 }, {
        x: 0, opacity: 1,
        scrollTrigger: {
            trigger: '.kid__logo',
            start: 'top bottom',
            end: 'center center',
            scrub: true
        }
    })

    gsap.fromTo('.kid-gsap-left', { x: -300, opacity: 0 }, {
        x: 0, opacity: 1,
        scrollTrigger: {
            trigger: '.kid-gsap-left',
            start: 'top bottom',
            end: 'center center',
            scrub: true
        }
    })

    gsap.fromTo('.kid-gsap-center', { y: 300, opacity: 0 }, {
        y: 0, opacity: 1,
        scrollTrigger: {
            trigger: '.kid-gsap-center',
            start: 'top bottom',
            end: 'center center',
            scrub: true
        }
    })

    gsap.fromTo('.kid-gsap-right', { x: 300, opacity: 0 }, {
        x: 0, opacity: 1,
        scrollTrigger: {
            trigger: '.kid-gsap-right',
            start: 'top bottom',
            end: 'center center',
            scrub: true
        }
    })
}











