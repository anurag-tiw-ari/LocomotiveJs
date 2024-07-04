var tl=gsap.timeline();

tl.to(
    "#yellow1",{
        top:"-100%",
        delay:"0.5",
        duration:"0.5",
        ease:"expo.out"
    }
)

tl.from("#yellow2",{
    top:"100%",
    delay:"0.5",
    duration:"0.5",
    ease:"expo.out"
},"together")

tl.to("#loader h1",{
    duration:"0.5",
    color:"black"
},"together")

tl.to(
    "#loader",{
        display:"none"
    }
)