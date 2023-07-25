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

function animVoronka(id) {
    const voronka = images[id].querySelectorAll('.anim-voronka');
    const centerX = 250;
    const centerY = 270;

    voronka?.forEach(element => {
        element.setAttribute('x', centerX);
        element.setAttribute('y', centerY);
    });

    setTimeout(() => {
        
    }, 50);
}

function setToDefolt(id) {
    const voronka = images[id].querySelectorAll('.anim-voronka');

    setTimeout(() => {
        voronka?.forEach(element => {
            element.setAttribute('x', element.dataset.x);
            element.setAttribute('y', element.dataset.y);
        });
    }, 100);
}