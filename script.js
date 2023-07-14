var tl=gsap.timeline()


tl.from("#logo, #nav1 h5, #nav2 button, #nav2 i",{
    y: -100,
    duration: 1,
    delay: 1,
    opacity: 0,
    stagger: 0.3
})

tl.from("#part2 h1",{
    scale: 0,
    duration: 1,
    delay: 0.5,
    opacity: 0,
})
tl.from("#part2 img",{
    opacity: 0,
    duration: 2,
    stagger: 0.2
})
tl.from("#part2 h3",{
    scale: 0,
    duration: 1,
    delay: 0,
    opacity: 0,
})
tl.from("#part2 button",{
    y: 20,
    repeat: -1,
    duration: 0.5,
    delay: 0.8,
    yoyo: true,
    opacity: 0
})
tl.from("#part3 #logos i",{
    opacity: 0,
    duration: 2,

})
