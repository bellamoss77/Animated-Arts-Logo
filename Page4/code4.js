const logoElements = document.querySelector('.logoElements');
const pv = document.querySelector('.pv');
const cc = document.querySelector('.cc');
const ar = document.querySelector('.ar');
const ts = document.querySelector('.ts');

let masterTl = gsap.timeline();

masterTl.fromTo(pv, {
    scale: 0,
    y: -100,
    rotation: 0
}, {
    scale: 1,
    y: 0,
    rotation: 360
})

