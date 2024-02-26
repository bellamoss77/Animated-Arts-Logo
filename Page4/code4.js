const logoElements = document.querySelector('.logoElements');
const pv = document.querySelector('.pv');
const cc = document.querySelector('.cc');
const ar = document.querySelector('.ar');
console.log('ar element', ar);
const ts = document.querySelector('.ts');

let masterTl = gsap.timeline();

masterTl.fromTo(pv, {
    scale: 0,
    y: -100,
    rotation: -360
},
{
    scale: 1,
    y: 100,
    x: 100,
    rotation: 0,
    duration: 2,
    ease: 'bounce'
})
masterTl.to(pv, {
    y: 0,
    x: 0,
    rotation: 360,
    duration: 1,
    ease: 'elastic'
})
masterTl.fromTo(cc, {
    scale: 0,
    y: 300,
    x: 300,
    rotation: -90
},
{
    scale: 1,
    y: -50,
    x: -100,
    rotation: 90,
    duration: 2,
    ease: 'bounce'
}, '<')
masterTl.to(cc, {
    y: 0,
    x: 0,
    rotation: 0,
    duration: 1,
    ease: 'elastic'
})
masterTl.fromTo(ar, {
    scale: 0,
    y: 300,
    x: 300,
    rotation: -360
},
{   scale: 1,
    x: -50,
    y: -50,
    rotation: 0,
    duration: 2,
    ease: 'bounce',
    onStart: () => console.log('Animation start for ar - fromTo'),
    onUpdate: () => console.log('Animation update for ar - fromTo'),
    onComplete: () => console.log('Animation complete for ar - fromTo')
});
masterTl.to(ar, {
    y: 0,
    x: 0,
    rotation: 360,
    duration: 1,
    ease: 'elastic',
    onStart: () => console.log('Animation start for ar - to'),
    onUpdate: () => console.log('Animation update for ar - to'),
    onComplete: () => console.log('Animation complete for ar - to')
})

