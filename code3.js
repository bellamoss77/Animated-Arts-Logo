const cube = document.querySelector('.cube');
const masterTl = gsap.timeline({ paused: true });

masterTl
        .from(cube, {
            z: -500,
            rotationY: 360,
            duration: 2,
            ease: 'power2.out'
        })
        .to(cube, {
            rotationY: -90,
            duration: 1,
            ease: 'power2.inOut'
        })
        .to(cube, {
            rotationY: -180,
            duration: 1,
            ease: 'power2.inOut'
        })
        .to(cube, {
            rotationY: -270,
            duration: 1,
            ease: 'power2.inOut'
        })
        .to(cube, {
            rotationY: -720,
            duration: 1,
            ease: 'power2.inOut'
        });
masterTl.play();

const pv = document.querySelector('.cube-face_front');
const cc = document.querySelector('.cube-face_right');
const ar = document.querySelector('.cube-face_back');
const ts = document.querySelector('.cube-face_left');
const presents = document.querySelector('.cube-face_top');

masterTl
        .to(pv, {
            rotationY: 0,
            x: -100, 
            y: -100,
            z: 0, 
            duration: 2, 
            ease: 'power2.inOut'
        }, '+=0.5')
        .to(cc, {
            rotationY: 0,
            x: 100,
            y: -100,
            z: 0,
            duration: 2,
            ease: 'power2.inOut'
        }, '<')
        .to(ar, {
            rotationY: 0,
            x: -100,
            y: 100,
            z: 0,
            duration: 2,
            ease: 'power2.inOut'
        }, '<')
        .to(ts, {
            rotationY: 0,
            x: 200,
            y: 100,
            z: 0,
            duration: 2,
            ease: 'power2.inOut'
        }, '<')        
        .to(presents, {
            rotationX: 0,
            x: 500,
            y: 300,
            z: 0,
            scale: 3,
            duration: 0.5,
            ease: 'power2.inOut'
        }, '-=1');

        document.querySelectorAll('.st0').forEach((path, index) => {
            const length = path.getTotalLength();
            gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
            masterTl.to(path, {
                strokeDashoffset: 0,
                duration: 0.25,
                ease: 'power2.inOut'
            });
        });