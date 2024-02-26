const pv = document.getElementById('pv');
const cc = document.getElementById('cc');
const ar = document.getElementById('ar');
const ts = document.getElementById('ts');
const logoElements = document.getElementById('logoElements');
const presents = document.getElementById('presents');

let tl = gsap.timeline();

gsap.set([pv, cc, ar, ts], { autoAlpha: 0 });
gsap.set(pv, { x: '-100%' });
gsap.set(cc, { y: '-100%' });
gsap.set(ar, { y: '100%' });
gsap.set(ts, { x: '100%' });

tl.to(pv, {
    autoAlpha: 1,
    x: 0,
    duration: 1,
    ease: 'elastic'
})
tl.to(cc, {
    autoAlpha: 1,
    y: 0,
    duration: 1,
    transformOrigin: '50% 50%',
    rotation: '360deg',
    ease: 'bounce'
}, '-=0.5')
tl.to(ar, {
    autoAlpha: 1,
    y: 0,
    duration: 1,
    ease: 'elastic'
}, '-=0.5')
tl.to(ts, {
    autoAlpha: 1,
    x: 0,
    duration: 1,
    transformOrigin: '50% 50%',
    rotation: '360deg',
    ease: 'bounce'
}, '-=0.5')
tl.to(ar, {
    xPercent: -200,
    yPercent: 100,
    duration: 1,
    ease: 'power2.inOut'
}, '+=0.5')
tl.to(ts, {
    xPercent: -200,
    yPercent: 100,
    duration: 1,
    ease: 'power2.inOut'
}, '<')

tl.to(presents, {
    autoAlpha: 1,
    x: '-20%',
    scale: 1.2,
    duration: 1,
    ease: 'power2.inOut',
    visibility: 'visible'
    }, '+=0.5')
   .add(() => {
    document.querySelectorAll('.st0').forEach((path, index) => {
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(path, {
            strokeDashoffset: 0,
            duration: 0.7,
            ease: 'power2.inOut',
            delay: index * 0.1
        });
    });
}, '-=1');
    
        
    


