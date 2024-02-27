const logoElements = document.querySelector('.logoElements');
const pv = document.querySelector('.pv');
const cc = document.querySelector('.cc');
const ar = document.querySelector('.ar');
const ts = document.querySelector('.ts');
const presents = document.querySelector('.presents')

let masterTl = gsap.timeline();

masterTl.fromTo(pv, {
    scale: 0,
    rotation: -1080
},
{
    scale: 1.5,
    rotation: 0,
    duration: 1.5,
    ease: 'elastic'
})
masterTl.to(pv, {
    scale: 1,
    duration: 1,
    ease: 'bounce'
})
masterTl.fromTo(cc, {
    scale: 0,
    rotation: -1440
},
{
    scale: 1.5,
    rotation: 0,
    duration: 1.5,
    ease: 'elastic'
}, '<')
masterTl.to(cc, {
    scale: 1,
    duration: 1,
    ease: 'bounce'
})
masterTl.fromTo(ar, {
    scale: 0,
    rotation: -1080
},
{   
    scale: 1.5,
    rotation: 0,
    duration: 1.5,
    ease: 'elastic'
}, '<');
masterTl.to(ar, {
    scale: 1,
    duration: 1,
    ease: 'bounce'
})
masterTl.fromTo(ts, {
    scale: 0,
    rotation: -1440
},
{
    scale: 1.5,
    rotation: 0,
    duration: 1.5,
    ease: 'elastic'
}, '<')
masterTl.to(ts, {
    scale: 1,
    duration: 1,
    ease: 'bounce'
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

