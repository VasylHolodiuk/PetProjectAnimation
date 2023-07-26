//acrodeon animation
const acordeonSection = document.querySelector('.section-3');
const acordeonWrapper = acordeonSection?.querySelector(".section-3-right");
const immagesWrapper = acordeonSection?.querySelector(".section-3-left");
const acordeonClass = '.section-3';
const acordeonWrapperClass = '.section-3-right';
const imagesClass = '.section-3-left';
const elements = acordeonSection?.querySelectorAll('.accordion-item');
const images = acordeonSection?.querySelectorAll('.section-3-image');
let starts = 'top 0';

// Функція, яка буде виконана при зміні розмірів вікна
function chechIfMobile() {
    // Отримуємо ширину вікна
    var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    
    // Перевірка, чи екран менше 768 пікселів
    if (windowWidth < 768) {
        // gsap.to(acordeonWrapperClass, {
        //     scrollTrigger: {
        //         trigger: acordeonWrapperClass,
        //         start: starts,
        //         pin: true,
        //         scrub: false,
        //         end: ()=> "+=" + (acordeonWrapper.offsetHeight) * (elements.length),
        //         onUpdate: self => {
        //             console.log('acordeon');
        //             killWhenFast(self);
        //             animation(self);   
        //         },
        //     }
        // });
    } else {
        gsap.to(acordeonClass, {
            scrollTrigger: {
                trigger: acordeonClass,
                start: starts,
                pin: true,
                scrub: true,
                end: ()=> "+=" + (acordeonSection.offsetHeight + 500) * (elements.length),
                onUpdate: self => {
                    killWhenFast(self);
                    animation(self);   
                },
            }
        });
    }
}

chechIfMobile();


// gsap.to(imagesClass, {
//     scrollTrigger: {
//         trigger: imagesClass,
//         start: starts,
//         pin: true,
//         scrub: true,
//         end: ()=> "+=" + (immagesWrapper.offsetHeight + 100) * (images.length - 1),
//         onUpdate: self => {
//             if (chechIfMobile()) {
//                 killWhenFast(self);
//                 animationImages(self);   
//             }
//         },
//     }
// });

function killWhenFast(self) {
    let tween = self.getTween();
    tween && Math.abs(self.getVelocity()) > 2500 && tween.progress(1);
}

function animationImages(self) {
    setTimeout(() => {        
        let getProgress = Number(self.progress.toFixed(1) * 100);
        const elementCount = images.length;
        const step = 90 / elementCount;

        let prev = 10;
        let count = 0;
        let next = step + prev;

        images.forEach(() => {
            changeActive(getProgress, prev, next, count);
            prev = prev + step;
            next = next + step;
            count = count + 1;
        });
    }, 200);
}

function animation(self) {
    setTimeout(() => {        
        let getProgress = Number(self.progress.toFixed(1) * 100);
        const elementCount = elements.length;
        const step = 90 / elementCount;

        let prev = 10;
        let count = 0;
        let next = step + prev;

        elements.forEach(() => {
            changeActive(getProgress, prev, next, count);
            prev = prev + step;
            next = next + step;
            count = count + 1;
        });
    }, 200);
}

function changeActive(progress, animateBefore, animateAfter, elemIndex, changeElement = true) {
    if (progress >= animateBefore && progress <= animateAfter) {
        if (changeElement) {
            if (!elements[elemIndex].classList.contains('active')) {
                elements.forEach((element, id) => {                
                    const body = element.querySelector('.accordion-item__body');
                    if (id != elemIndex) {
                        images[id].classList.remove('active');
                        element.classList.remove('active');
                        body.style.height = '0px';
                        setToDefolt(id);
                    }
                    else {
                        images[id].classList.add('active');
                        element.classList.add('active');
                        body.style.height = body.scrollHeight + 'px';
                        animVoronka(id);
                    }
                });    
            }
        }
    }
}

function animVoronka(id) {
    const voronka = images[id].querySelectorAll('.anim-voronka');
    const coins = images[id].querySelectorAll('.anim-out');
    const centerX = 250;
    const centerY = 270;
    const coinsX = 275;
    const coinsY = 360;
    let y = 170;

    voronka?.forEach(element => {
        gsap.set(element, { attr: { x: centerX } });
        gsap.set(element, { attr: { y: centerY } });
    });

    if (coins[0]) {
        if (!coins[0]?.classList.contains('animate')) {
            coins.forEach(element => {
                if (element.classList.contains('man')) {
                    gsap.set(element, {
                        y: '-=30'
                    })                        
                }
            });
            setTimeout(() => {
                coins[0].classList.add('animate');
                let delay = 0;
                coins.forEach(( element, id) => {
                    
                    gsap.to(element, {
                        delay: delay,
                        duration: 1, 
                        attr: { y: coinsY + y },
                        onComplete: function() {
                          gsap.to(element, {
                            duration: 0.5, x: "-=45", y: "-=15", ease: "linear",
    
                            onComplete: function () {
                                gsap.to(element, {
                                    duration: 0.5, x: "-=45", y: "+=15", ease: "linear",   
    
                                    onComplete: function () {
                                        gsap.to(element, {
                                            duration: 0.5, x: "-=45", y: "-=15", ease: "linear",   
                                            onComplete: function () {
                                                gsap.to(element, {
                                                    duration: 0.5, x: "-=45", y: "+=15", ease: "linear",                  
                                                });
                                            },               
                                        });
                                    },
                                });
                            },
                          });
                        }
                    });
                    delay = delay + 1;
                });
            }, 1000);
        }    
    }
}

function setToDefolt(id) {
    const voronka = images[id].querySelectorAll('.anim-voronka');
    const coins = images[id].querySelectorAll('.anim-out');
    const coinsX = 275;
    const coinsY = 360;

    setTimeout(() => {
        voronka?.forEach(element => {
            gsap.set(element, {attr: {x: element.dataset.x}});
            gsap.set(element, {attr: {y: element.dataset.y}});
        });

        if (coins[0]) {
            coins[0].classList.remove('animate');
            coins.forEach(element => {
                gsap.killTweensOf(element);
                gsap.set(element, {x: 0, y: 0, attr:{ x: coinsX, y: coinsY }} ); 
            });
        }
    }, 100);
}