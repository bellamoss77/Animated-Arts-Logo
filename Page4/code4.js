const logoElements = document.querySelector('.logoElements');
const pv = document.querySelector('.pv');
const cc = document.querySelector('.cc');
const ar = document.querySelector('.ar');
const ts = document.querySelector('.ts');
const presents = document.querySelector('.presents')

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
    x: -100,
    y: -100,
    rotation: 0,
    duration: 2,
    ease: 'bounce',
}, '<');
masterTl.to(ar, {
    y: 0,
    x: 0,
    rotation: 360,
    duration: 1,
    ease: 'elastic',
}, '-=0.5')
masterTl.fromTo(ts, {
    scale: 0,
    y: -200,
    x: 300,
    rotation: -720
},
{
    scale: 1,
    y: 100,
    x: -50,
    rotation: 0,
    duration: 2,
    ease: 'bounce'
}, '<')
masterTl.to(ts, {
    y: 0,
    x: 0,
    rotation: 360,
    duration: 1,
    ease: 'elastic'
})
masterTl.to(presents, {
    rotationX: 0,
    x: 100,
    y: 100,
    z: 0,
    duration: 0.5,
    ease: 'power2.inOut'
}, '-=1');

gsap.set('.presents path', { stroke: 'transparent' });

document.querySelectorAll('.presents path').forEach((path, index) => {
    const length = path.getTotalLength();
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
    masterTl.to(path, {
        stroke: '#FFFFFF',
        duration: 0.1,
        immediateRender: false
    })
    masterTl.to(path, {
        strokeDashoffset: 0,
        duration: 0.25,
        ease: 'power2.inOut'
    });
});

