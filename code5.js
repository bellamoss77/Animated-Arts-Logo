gsap.registerPlugin(MotionPathPlugin);

const pv = document.querySelector('.pv');
const cc = document.querySelector('.cc');
const ar = document.querySelector('.ar');
const ts = document.querySelector('.ts');
const presents = document.querySelector('.presents');

let tl = gsap.timeline();

tl.to(pv, {
    duration: 2,
    ease: 'power2.inOut',
    motionPath: {
        path: '#PATH_PV',
        align: '#PATH_PV',
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    }
});
tl.to(cc, {
    duration: 2,
    ease: 'power2.inOut',
    motionPath: {
        path: '#PATH_CC',
        align: '#PATH_CC',
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    }
}, '<');
tl.to(ar, {
    duration: 2,
    ease: 'power2.inOut',
    motionPath: {
        path: '#PATH_AR',
        align: '#PATH_AR',
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    }
}, '<');
tl.to(ts, {
    duration: 2,
    ease: 'power2.inOut',
    motionPath: {
        path: '#PATH_TS',
        align: '#PATH_TS',
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    }
}, '<');
tl.to(pv, {
    x: 0,
    y: 0,
    rotation: 0,
    duration: 0.75,
    ease: 'bounce'
})
tl.to(cc, {
    x: 0,
    y: 0,
    rotation: 0,
    duration: 0.75,
    ease: 'bounce'
}, '<')
tl.to(ar, {
    x: 0,
    y: 0,
    rotation: 0,
    duration: 0.75,
    ease: 'bounce'
}, '<')
tl.to(ts, {
    x: 0,
    y: 0,
    rotation: 0,
    duration: 0.75,
    ease: 'bounce'
}, '<')
tl.to(presents, {
    rotationX: 0,
    duration: 0.5,
    ease: 'power2.inOut'
}, '-=0.2');

gsap.set('.presents path', { stroke: 'transparent' });

document.querySelectorAll('.presents path').forEach((path, index) => {
    const length = path.getTotalLength();
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
    tl.to(path, {
        stroke: '#FFFFFF',
        duration: 0.1,
        immediateRender: false
    })
    tl.to(path, {
        strokeDashoffset: 0,
        duration: 0.25,
        ease: 'power2.inOut'
    });
});
