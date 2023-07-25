document.addEventListener('DOMContentLoaded',() => {

  
  
  window.scrollTo(0, 0)
  lax.init()
  lax.addDriver(
    "scrollY",
    function () {
      return document.documentElement.scrollTop;
    }, {
      frameStep: 1
    }
  );
  lax.addElements('.section-1-text', {
    scrollY: {
      translateX: [
        [0, "screenHeight"],
        [0, -300]
      ],
      opacity: [
        [0, "screenHeight/2"],
        [1, 0]
      ]
    }
  });
  lax.addElements('.section-1-image', {
    scrollY: {
      translateX: [
        [0, "screenHeight"],
        [0, 300]
      ],
      opacity: [
        [0, "screenHeight/2"],
        [1, 0]
      ]
    }
  });
  lax.addElements('.section-1-bg-1', {
    scrollY: {
      scale: [
        [0, "screenHeight"],
        [1, 8]
      ],
      opacity: [
        [0, "screenHeight/4"],
        [1, 0]
      ]
    }
  });
  lax.addElements('.section-1-image-dop-1', {
    scrollY: {
      translateX: [
        [0, "screenHeight"],
        [0, -300]
      ],
      rotate: [
        [0, "screenHeight"],
        [0, 30]
      ],
      opacity: [
        [0, "screenHeight/4"],
        [1, 0]
      ]
    }
  });
  lax.addElements('.section-1-image-dop-2', {
    scrollY: {
      translateX: [
        [0, "screenHeight"],
        [0, 300]
      ],
      opacity: [
        [0, "screenHeight/4"],
        [1, 0]
      ]
    }
  });
  lax.addElements('.section-1-image-dop-3', {
    scrollY: {
      translateX: [
        [0, "screenHeight"],
        [0, 300]
      ],
      opacity: [
        [0, "screenHeight/4"],
        [1, 0]
      ]
    }
  });
  lax.addElements('.section-1-bg-2', {
    scrollY: {
      scale: [
        [0, "screenHeight"],
        [1, 0]
      ],
      opacity: [
        [0, "screenHeight/4"],
        [1, 0]
      ]
    }
  });
  lax.addElements('.section-1-bg-3', {
    scrollY: {
      scale: [
        [0, "screenHeight"],
        [1, 8]
      ],
      opacity: [
        [0, "screenHeight/4"],
        [1, 0]
      ]
    }
  });
  lax.addElements('.section-1-bg-4', {
    scrollY: {
      rotate: [
        [0, "screenHeight"],
        [0, -360]
      ],
      opacity: [
        [0, "screenHeight/4"],
        [1, 0]
      ]
    }
  });
  lax.addElements('.section-1-bg-5', {
    scrollY: {
      rotate: [
        [0, "screenHeight/6"],
        [0, -360]
      ],
      opacity: [
        [0, "screenHeight/4"],
        [1, 0]
      ]
    }
  });
  lax.addElements('.section-1-bg-6', {
    scrollY: {
      translateY: [
        [0, "screenHeight/4"],
        [0, -300]
      ],
      opacity: [
        [0, "screenHeight/5"],
        [1, 0]
      ]
    }
  });
  
  lax.addElements('.section-2-line', {
    scrollY: {
      opacity: [
        [0, "screenHeight", "screenHeight*1.5"],
        [0, 1, 0]
      ],
    }
  });
 
  if (window.matchMedia("(min-width: 1280px)").matches) {
    gsap.to('.section-4-bg-1 img', {
      y: 150,
      scale: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: '.section-4', // Триггер - секция с классом section-4
        start: 'bottom top', // Начало анимации, когда верх section-4 достигает центра экрана
        end: '150% top', // Конец анимации, когда нижняя часть section-4 достигает центра экрана
        scrub: true, // Плавное выполнение анимации при прокрутке
     
      }
    });
    gsap.from('.section-6-heading', {
      opacity: 0,
      y: -50,
      scrollTrigger: {
        trigger: '.section-6',
        start: "top top",
  
        end: "bottom top",
      }
    });
    gsap.from('.section-5-heading', {
      opacity: 0,
      y: -50,
      scrollTrigger: {
        trigger: '.section-5',
        start: "center 50%",
  
        end: "bottom 50px",
        scrub: true
      }
    });
    gsap.from('.section-4-text', {
      x: -150,
      opacity: 0,
      scrollTrigger: {
        trigger: '.section-4',
        start: '50% top', // Начало анимации, когда верх section-4 достигает центра экрана
        end: '100% 5%', // Конец анимации, когда нижняя часть section-4 достигает центра экрана
        scrub: true,
        
      }
    });
  
    gsap.from('.section-4-image', {
      x: 150,
      opacity: 0,
      scrollTrigger: {
        trigger: '.section-4',
        start: '50% top', // Начало анимации, когда верх section-4 достигает центра экрана
        end: '100% 5%', //
        scrub: true,
      }
    });

    var targets = gsap.utils.toArray(".section-6 .accordion-item .accordion-item__body .text-lg");

  var middleTargets = targets;
  var first = middleTargets.shift();
  var last = middleTargets.pop();
  
  gsap.set(first, { opacity: 1, height: 'auto' });
  gsap.set(middleTargets, { opacity: 0, height: 0 });
  gsap.set(last, { opacity: 0, height: 0 });
  
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-6",
      pin: true,
      start: "15% 100px",
      end: "bottom top",
      scrub: true,
      onUpdate: self => {
        if (self.progress === 0) {
          gsap.to(first, { opacity: 1, height: 'auto', duration: 0.3, ease: "power3.inOut" });
          gsap.to(last, { opacity: 0, height: 0, duration: 0.3, ease: "power3.inOut" });
        } else if (self.progress === 1) {
          gsap.to(first, { opacity: 0, height: 0, duration: 0.3, ease: "power3.inOut" });
          gsap.to(last, { opacity: 1, height: 'auto', duration: 0.3, ease: "power3.inOut" });
        } else {
          gsap.to(first, { opacity: 0, height: 0, duration: 0.3, ease: "power3.inOut" });
          gsap.to(last, { opacity: 0, height: 0, duration: 0.3, ease: "power3.inOut" });
        }
      }
    }
  });
  
  timeline.add([
    gsap.to(middleTargets, {
      opacity: 1,
      height: 'auto',
      duration: 1,
      stagger: {
        each: 2,
        yoyo: true,
        repeat: 1
      },
      ease: "power3.inOut"
    })
  ], "<");
    
      
       
    lax.addElements('.section-2-heading', {
      scrollY: {
        translateY: [
          [0, "screenHeight"],
          [100, 0]
        ],
        opacity: [
          [0, "screenHeight/2"],
          [0, 1]
        ],
      }
    });
    lax.addElements('.section-2-item-1', {
      scrollY: {
        translateX: [
          [0, "screenHeight"],
          [-300, 0]
        ],
        opacity: [
          [0, "screenHeight/2"],
          [0, 1]
        ]
      }
    });
  
    
    lax.addElements('.section-2-item-2', {
      scrollY: {
        translateY: [
          [0, "screenHeight"],
          [200, 0]
        ],
        opacity: [
          [0, "screenHeight/2"],
          [0, 1]
        ]
      }
    });
    lax.addElements('.section-2-item-3', {
      scrollY: {
        translateX: [
          [0, "screenHeight"],
          [300, 0]
        ],
        opacity: [
          [0, "screenHeight/2"],
          [0, 1]
        ]
      }
    });
  }

  

  
  
  
  const sections = document.querySelectorAll('.section');

  let isActiveAdded = false;
  
  const handleIntersection = (entries) => {
    entries.forEach(entry => {
  
      if (entry.target.id === 'section-4' && entry.isIntersecting && !isActiveAdded) {
        entry.target.classList.add('active');
        isActiveAdded = true;
      }
    });
  };
  
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5
  });

  if (window.matchMedia("(max-width: 1280px)").matches) {
    gsap.to('.section-4-bg-1 img', {
      y: 550,
      scale: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: '.section-4', // Триггер - секция с классом section-4
        start: '80% 50%', // Начало анимации, когда верх section-4 достигает центра экрана
        end: 'bottom 50%', // Конец анимации, когда нижняя часть section-4 достигает центра экрана
        scrub: true, // Плавное выполнение анимации при прокрутке
      
      }
    });
    gsap.from('.section-5-heading', {
      opacity: 0,
      y: -50,
      scrollTrigger: {
        trigger: '.section-5',
        start: "50% 50%",
  
        end: "bottom 50px",
        scrub: true
      }
    });
    gsap.from('.section-2-item-1', {
      x: -150,
      opacity: 0,
      scrollTrigger: {
        trigger: '.section-2',
        start: 'top top',
        end: '100px top',
        scrub: true,
        pin: true
      }
    });
    gsap.from('.section-2-item-2', {
      x: -150,
      opacity: 0,
      delay: 0.3,
      scrollTrigger: {
        trigger: '.section-2',
        start: '100px top',
        end: '300px top',
        scrub: true,
        pin: true
      }
    });
    gsap.from('.section-2-item-3', {
      x: -150,
      opacity: 0,
      delay: 0.6,
      scrollTrigger: {
        trigger: '.section-2',
        start: '300px top',
        end: '500px top',
        scrub: true,
        pin: true
      }
    });
    gsap.from('.section-2-heading', {
      x: -150,
      opacity: 0,
      direction: 1,
      scrollTrigger: {
        trigger: '.section-1',
        start: '50% top',
        end: 'bottom top',
        scrub: true,
      }
    });
    gsap.from('.section-4-text', {
      x: -150,
      opacity: 0,
      direction: 1,
      scrollTrigger: {
        trigger: '.section-3',
        start: '50% top',
        end: 'bottom top',
        scrub: true,
      }
    });
    gsap.from('.section-4-image', {
      x: 250,
      opacity: 0,
      direction: 1,
      scrollTrigger: {
        trigger: '.section-4',
        start: 'top 50%',
        end: '50% 50%',
        scrub: true,
      }
    });
  
    gsap.from('.section-6 .accordion-item:first-of-type', {
      y: 150,
      opacity: 0,
      direction: 1,
      scrollTrigger: {
        trigger: '.section-6',
        start: '50% top',
        end: 'bottom top',
        scrub: true,
      }
    });
    gsap.from('.section-6 .accordion-item:nth-child(2)', {
      y: 150,
      opacity: 0,
      direction: 1,
      scrollTrigger: {
        trigger: '.section-6',
        start: '60% top',
        end: 'bottom top',
        scrub: true,
      }
    });
    gsap.from('.section-6 .accordion-item:nth-child(3)', {
      y: 150,
      opacity: 0,
      direction: 1,
      scrollTrigger: {
        trigger: '.section-6',
        start: '70% top',
        end: 'bottom top',
        scrub: true,
      }
    });
    gsap.from('.section-6 .accordion-item:nth-child(4)', {
      y: 150,
      opacity: 0,
      direction: 1,
      scrollTrigger: {
        trigger: '.section-6',
        start: '80% top',
        end: 'bottom top',
        scrub: true,
      }
    });
  
    gsap.from('.section-6-heading', {
      x: -150,
      opacity: 0,
      direction: 1,
      scrollTrigger: {
        trigger: '.section-6',
        start: '50% top',
        end: 'bottom top',
        scrub: true,
      }
    });
    gsap.from('.section-7-center', {
      y: 150,
      opacity: 0,
      direction: 1,
      scrollTrigger: {
        trigger: '.section-7',
        start: '30% top',
        end: 'bottom top',
        scrub: true,
      }
    });
    gsap.from('.section-7-footer', {
      y: 150,
      opacity: 0,
      direction: 1,
      scrollTrigger: {
        trigger: '.section-7',
        start: '80% top',
        end: 'bottom top',
        scrub: true,
      }
    });
    gsap.from('.section-6 .accordion-item ', {
      y: 150,
      opacity: 0,
      direction: 1,
      scrollTrigger: {
        trigger: '.section-6',
        start: 'top top',
        end: 'bottom 50%',
      }
    });
  
  }
  
  // Наблюдаем каждую секцию
  sections.forEach(section => {
    observer.observe(section);
  });
  
  
  
  
  
    
  gsap.from('.section-7-bg-1 img', {
    y: 300,
    x: -300,
    opacity: 0,
    scale: 1.5,
    duration: 3,
    scrollTrigger: {
      trigger: ".section-7",
      start: "top top",
      end: "top bottom",
      scrub: true
    }
  });
  gsap.to('.section-4-bg-3 img', {
    y: 300,
    opacity: 0,
    scrollTrigger: {
      trigger: '.section-4',
      start: '50% 50%',
      end: 'bottom 50%',
      scrub: true,
    }
  });
  gsap.to('.section-4-bg-2 img', {
    y: -100,
    x: 100,
    opacity: 0,
    scale: 3,
    scrollTrigger: {
      trigger: '.section-4',
      start: '50% 50%',
      end: 'bottom 50%',
      scrub: true,
    }
  });
  
  ScrollTrigger.create({
    trigger: '.section-5',
    start: "top top",
    end: "bottom top",
    pin: true,
    scrub: true,
    markers: true,
        id: '12',
  });
  
  ScrollTrigger.create({
    trigger: '.section-4',
    start: "40% top",
    end: "bottom bottom",
    scrub: true,
  });
  
  gsap.from('.section-4-image .svg-elem-8', {
    opacity: 0,
    y: '100%',
    delay: 1.8,
    scrollTrigger: {
      trigger: '.section-4 ',
      start: '50% 50%',
      end: 'bottom 50%',
    }
  });
  gsap.from('.section-4-image .svg-elem-9', {
    opacity: 0,
    y: '100%',
    delay: 1.6,
    scrollTrigger: {
      trigger: '.section-4 ',
      start: '50% 50%',
      end: 'bottom 50%',
    }
  });
  
  gsap.from('.section-4-image .svg-elem-13', {
    opacity: 0,
    y: '100%',
    delay: 1.4,
    scrollTrigger: {
      trigger: '.section-4 ',
      start: '50% 50%',
      end: 'bottom 50%',
    }
  });
  gsap.from('.section-4-image .svg-elem-14', {
    opacity: 0,
    y: '100%',
    delay: 1.2,
    scrollTrigger: {
      trigger: '.section-4 ',
      start: '50% 50%',
      end: 'bottom 50%',
    }
  });
  
  gsap.from('.section-4-image .svg-elem-15', {
    opacity: 0,
    y: '100%',
    delay: 1.2,
    scrollTrigger: {
      trigger: '.section-4 ',
      start: '50% 50%',
      end: 'bottom 50%',
    }
  });
  
  gsap.from('.section-4-image .svg-elem-10', {
    opacity: 0,
    y: '100%',
    delay: 1,
    scrollTrigger: {
      trigger: '.section-4 ',
      start: '50% 50%',
      end: 'bottom 50%',
    }
  });
  
  gsap.from('.section-4-image .svg-elem-12', {
    opacity: 0,
    y: '100%',
    delay: 0.6,
    scrollTrigger: {
      trigger: '.section-4 ',
      start: '50% 50%',
      end: 'bottom 50%',
    }
  });
  gsap.from('.section-4-image .svg-elem-11', {
    opacity: 0,
    y: '100%',
    delay: 0.8,
    scrollTrigger: {
      trigger: '.section-4 ',
      start: '50% 50%',
      end: 'bottom 50%',
    }
  });
  gsap.from('.svg-stars', {
    opacity: 0,
    y: '100px',
    delay: 1,
    scrollTrigger: {
      trigger: '.section-4 ',
      start: '50% 50%',
      end: 'bottom 50%',
    }
  });
  
  
  
  
  
  
  
  
  
  gsap.from('.section-7-heading', {
    opacity: 0,
    y: -50,
    scrollTrigger: {
      trigger: '.section-7',
      start: "top 50%",
  
      end: "bottom top",
    }
  });
  
  gsap.to('.section-6-bg-1 img', {
    y: 300,
    x: -300,
    opacity: 0,
    scale: 1.5,
    duration: 3,
    scrollTrigger: {
      trigger: '.section-6',
      start: "70% top", // измените это
      end: "bottom", // и это
      scrub: true,
    }
  });
  gsap.to('.section-6-bg-2 img', {
    y: 100,
    x: 100,
    opacity: 0,
    scale: 1.5,
    scrollTrigger: {
      trigger: '.section-6',
      start: "70% top", // измените это
      end: "bottom", // и это
  
      scrub: true,
      id: 'bg-1'
    }
  });
  gsap.to('.section-6-bg-3 img', {
    xPercent: 100,
    opacity: 0,
    rotate: 180,
    scrollTrigger: {
      trigger: '.section-6',
      start: "70% top", // измените это
      end: "bottom", // и это
  
      scrub: true,
      id: 'bg-1'
    }
  });
  gsap.to('.section-6-bg-4 img', {
    xPercent: -100,
    opacity: 0,
    rotate: 180,
    scrollTrigger: {
      trigger: '.section-6',
      start: "70% top", // измените это
      end: "bottom", // и это
  
      scrub: true,
      id: 'bg-1'
    }
  });
  
  gsap.to('.section-6-bg-5 img', {
    yPercent: 100,
    opacity: 0,
    rotate: 180,
    scrollTrigger: {
      trigger: '.section-6',
      start: "70% top", // измените это
      end: "bottom", // и это
  
      scrub: true,
      id: 'bg-1'
    }
  });
  
  gsap.to('.section-6-bg-6 svg', {
    yPercent: -100,
    opacity: 0,
    rotate: 45,
    scale: 2,
    scrollTrigger: {
      trigger: '.section-6',
      start: "70% top", // измените это
      end: "bottom", // и это
  
      scrub: true,
      id: 'bg-1'
    }
  });
  

  
  
  
  
  gsap.from('.section-5-text', {
    scale: 0,
    delay: 2,
    scrollTrigger: {
      trigger: '.section-5',
      start: "top top",
    },
  });
  gsap.from('.section-5-btn', {
    y: 50,
    opacity: 0,
    delay: 2,
    scrollTrigger: {
      trigger: '.section-5',
      start: "top top",
    },
  });
  
  
  gsap.fromTo(
    '.circle-1', {
      scale: 0, // Начальный масштаб
      delay: 0.5,
      opacity: 0
    }, {
      scale: 1.2, // Конечный масштаб
      delay: 0.5,
      opacity: 1,
      duration: 0.3, // Продолжительность анимации
      scrollTrigger: {
        trigger: '.section-5',
        start: "top top",
      },
      onComplete: function () {
        // Callback функция после завершения первой анимации
        gsap.to('.circle-1', {
          scale: 1, // Конечный масштаб
          duration: 0.3, // Продолжительность анимации
          ease: 'power2.inOut', // Эффект анимации
        });
      },
    }
  );
  
  gsap.fromTo(
    '.circle-2 svg', {
      scale: 0, // Начальный масштаб
      delay: 0.7,
      opacity: 0
    }, {
      scale: 1.2, // Конечный масштаб
      delay: 0.7,
      opacity: 1,
      duration: 0.3, // Продолжительность анимации
      scrollTrigger: {
        trigger: '.section-5',
        start: "top top",
      },
      onComplete: function () {
        // Callback функция после завершения первой анимации
        gsap.to('.circle-2 svg', {
          scale: 1, // Конечный масштаб
          duration: 0.3, // Продолжительность анимации
  
          ease: 'power2.inOut', // Эффект анимации
        });
      },
    }
  );
  
  gsap.fromTo(
    '.circle-3 svg', {
      scale: 0, // Начальный масштаб
      delay: 0.9,
      opacity: 0
    }, {
      scale: 1.2, // Конечный масштаб
      delay: 0.9,
      opacity: 1,
      duration: 0.3, // Продолжительность анимации
      scrollTrigger: {
        trigger: '.section-5',
        start: "top top",
      },
      onComplete: function () {
        // Callback функция после завершения первой анимации
        gsap.to('.circle-3 svg', {
          scale: 1, // Конечный масштаб
          duration: 0.3, // Продолжительность анимации
          ease: 'power2.inOut', // Эффект анимации
        });
      },
    }
  );
  
  gsap.to(".svg-circle path", {
    duration: 5,
    motionPath: {
      path: "#line-path",
      align: "#line-path",
      autoRotate: true,
      alignOrigin: [0.5, 0.5]
    }
  });
  
  // Создаем анимацию для линии
  gsap.to("#line-path", {
    strokeDashoffset: 0,
    duration: 5,
    ease: "none"
  });
  
  
  gsap.from('.section-5-palma-1', {
    x: '-50%',
    opacity: 0,
    scale: 1.2,
  
    transformOrigin: 'left bottom', // Установка точки вращения снизу слева
    rotate: '-20deg',
    ease: "ease",
    scrollTrigger: {
      trigger: '.section-5',
      start: "top top",
  
      end: "bottom 50px",
      scrub: true
    }
  });
  
  gsap.from('.section-5-palma-2', {
    x: '50%',
    opacity: 0,
    scale: 1.2,
  
    transformOrigin: 'right bottom', // Установка точки вращения снизу слева
    rotate: '20deg',
    ease: "ease",
    scrollTrigger: {
      trigger: '.section-5',
      start: "top top",
  
      end: "bottom 50px",
      scrub: true
    }
  });
  
  
  
  
  class Sticker {
    constructor(obj) {
      this.btn = document.querySelectorAll('.sticky_w');
      this.text = document.querySelectorAll('.sticky_t');
  
      this.btn.forEach((b, i) => {
        b.innert = b.getAttribute("data-sticky");
        b.selfInnert = b.innert * 3;
        b.text = this.text[i];
        b.text.style.pointerEvents = "none";
  
        b.offsetY = 0;
        b.offsetX = 0;
  
        b.translateX = 0;
        b.translateY = 0;
  
        b.btnSize = {
          width: parseInt(getComputedStyle(b).width) + parseInt(getComputedStyle(b).paddingRight) * 2,
          height: parseInt(getComputedStyle(b).height) + parseInt(getComputedStyle(b).paddingTop) * 2
        }
  
        b.addEventListener("mousemove", (e) => {
          e = e || window.event;
          b.offsetX = e.offsetX;
          b.offsetY = e.offsetY;
          b.translateX = (-b.btnSize.width / 2) + b.offsetX;
          b.translateY = (-b.btnSize.height / 2) + b.offsetY;
          TweenLite.to(b.text, obj.inertion, {
            x: ((-b.btnSize.width / 2) + b.offsetX) / b.innert,
            y: ((-b.btnSize.height / 2) + b.offsetY) / b.innert,
            ease: Power1.easeOut
          })
          //B
          // TweenLite.to(b, obj.inertion, {
          //     x: ((-b.btnSize.width / 2) + b.offsetX) / b.selfInnert,
          //     y: ((-b.btnSize.height / 2) + b.offsetY) / b.selfInnert,
          //     ease: Power1.easeOut
          // })
  
        });
  
        b.addEventListener("mouseenter", (e) => {
          b.offsetX = e.offsetX;
          b.offsetY = e.offsetY;
          TweenLite.to(b.text, 0.1, {
            x: ((-b.btnSize.width / 2) + b.offsetX) / b.innert,
            y: ((-b.btnSize.height / 2) + b.offsetY) / b.innert,
            ease: Power1.easeOut
          })
          //B
          // TweenLite.to(b, 0.1, {
          //     x: ((-b.btnSize.width / 2) + b.offsetX) / b.selfInnert,
          //     y: ((-b.btnSize.height / 2) + b.offsetY) / b.selfInnert,
          //     ease: Power1.easeOut
          // },0)
        });
  
        b.addEventListener("mouseleave", (e) => {
          TweenLite.to(b.text, obj.spring, {
            x: 0,
            y: 0,
            ease: Power1.easeOut
          })
          //B
          // TweenLite.to(b, obj.spring, {
          //     x: 0,
          //     y: 0,
          //     ease: Power1.easeOut
          // })
        });
  
      })
    }
  }
  
  new Sticker({
    inertion: 0.4, // Change this for cool effects :) //  0.3 - 1
    spring: 0.5 // And change this    
  });
  

  function preloader() {
    const preloaderImages = document.querySelector('[data-preloader]') ? document.querySelectorAll('[data-preloader] img') : document.querySelectorAll('img');
    const preloaderContainer = document.querySelector('#preloader');
    if (preloaderImages.length) {
      const preloaderTemplate =`
        <div class="fls-preloader">
          <div class="fls-preloader__body">
            <div class="fls-preloader__logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="142" height="43" viewBox="0 0 142 43" fill="none">
<path d="M17.4569 34.0722L14.302 37.858C5.04808 27.1316 6.73062 19.1394 17.0362 13.671C9.75377 20.191 9.88535 28.1832 17.4569 34.0722Z" fill="#699CE2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.8611 23.557C27.7603 21.1741 28.8636 18.2502 29.0082 15.1991C29.1596 12.0023 28.2502 8.84516 26.4213 6.2189C24.5924 3.59264 21.9466 1.64458 18.8958 0.677887C15.845 -0.288809 12.5601 -0.219921 9.55251 0.873829C6.54488 1.96758 3.98315 4.02484 2.26596 6.72547C0.54878 9.4261 -0.227538 12.6186 0.0578209 15.8062C0.257374 18.0353 0.968293 20.1745 2.11974 22.0641C2.11435 22.0707 2.10896 22.0773 2.10357 22.0839L2.27197 22.3084C2.66734 22.9292 3.11104 23.5216 3.60046 24.0797L5.88937 27.1316C6.49664 20.7194 8.41978 17.7903 14.5126 13.671C10.2914 14.7338 7.75964 16.1093 5.1446 18.6789C4.68931 17.6554 4.40178 16.5572 4.30055 15.4264C4.09895 13.1744 4.6474 10.919 5.86054 9.01107C7.07369 7.10314 8.88349 5.64974 11.0083 4.87703C13.1331 4.10432 15.4538 4.05566 17.6091 4.7386C19.7645 5.42155 21.6336 6.7978 22.9257 8.65319C24.2177 10.5086 24.8603 12.739 24.7532 14.9975C24.6462 17.2559 23.7957 19.4156 22.334 21.1405C20.9318 22.7951 19.0427 23.9606 16.9401 24.4731C15.6606 22.6095 15.8899 20.5484 17.0354 16.1948C12.4083 22.5045 13.4598 27.9728 19.5593 31.5483L25.8688 23.5561L25.8611 23.557Z" fill="white"/>
<path d="M52.3218 28.3155H46.5474L45.3926 32.0001H39.8932L46.5474 12.7523H52.3218L58.976 32.0001H53.4766L52.3218 28.3155ZM51.0294 23.9435L49.4346 18.4166L47.8398 23.9435H51.0294ZM61.8791 32.0001V17.5367H57.947V12.7523H71.338V17.5367H67.3509V32.0001H61.8791ZM80.5077 12.7523L84.7972 24.191L89.1417 12.7523H96.2359V32.0001H91.0115V20.2864L87.2995 30.4877H82.3225L78.6379 20.2864V32.0001H73.3861V12.7523H80.5077ZM102.842 31.6976C102.403 32.1375 101.853 32.3575 101.193 32.3575C100.533 32.3575 99.9736 32.1375 99.5154 31.6976C99.0754 31.2393 98.8554 30.6894 98.8554 30.0478C98.8554 29.3879 99.0754 28.8288 99.5154 28.3705C99.9736 27.9122 100.533 27.6831 101.193 27.6831C101.853 27.6831 102.403 27.9122 102.842 28.3705C103.301 28.8288 103.53 29.3879 103.53 30.0478C103.53 30.6894 103.301 31.2393 102.842 31.6976ZM106.063 32.0001V12.1198H109.857V19.1315C110.151 18.7283 110.664 18.3158 111.397 17.8942C112.13 17.4726 113.038 17.2618 114.119 17.2618C116.172 17.2618 117.822 17.9675 119.069 19.379C120.315 20.7722 120.939 22.587 120.939 24.8234C120.939 27.0415 120.279 28.8563 118.959 30.2678C117.657 31.6609 115.971 32.3575 113.899 32.3575C112.836 32.3575 111.938 32.1559 111.205 31.7526C110.49 31.331 109.967 30.9185 109.637 30.5152V32.0001H106.063ZM109.747 24.8509C109.747 26.0241 110.077 27.014 110.737 27.8205C111.416 28.6088 112.314 29.0029 113.432 29.0029C114.514 29.0029 115.393 28.6271 116.072 27.8755C116.768 27.124 117.117 26.1157 117.117 24.8509C117.117 23.6044 116.777 22.587 116.099 21.7987C115.421 21.0105 114.532 20.6164 113.432 20.6164C112.35 20.6164 111.461 20.9922 110.765 21.7437C110.087 22.4953 109.747 23.531 109.747 24.8509ZM123.114 32.0001V17.6192H126.909V32.0001H123.114ZM123.417 15.7219C122.995 15.3003 122.784 14.7779 122.784 14.1546C122.784 13.5314 122.995 13.0181 123.417 12.6148C123.838 12.1932 124.361 11.9824 124.984 11.9824C125.625 11.9824 126.157 12.1932 126.579 12.6148C127 13.0181 127.211 13.5314 127.211 14.1546C127.211 14.7779 127 15.3003 126.579 15.7219C126.157 16.1252 125.625 16.3269 124.984 16.3269C124.361 16.3269 123.838 16.1252 123.417 15.7219ZM140.384 19.9839L133.895 28.8379H140.467V32.0001H129.193V29.6628L135.682 20.7814H129.385V17.6192H140.384V19.9839Z" fill="white"/>
<ellipse opacity="0.2" cx="14.1314" cy="41.2453" rx="8.78371" ry="1.5276" fill="white"/>
</svg>
            </div>
            <div class="fls-preloader__progressbar">
              <div class="fls-preloader__counter">0%</div>
              <div class="fls-preloader__line"><span></span></div>  
            </div>
          
          </div>
        </div>`;
      document.querySelector('html').insertAdjacentHTML("beforeend",preloaderTemplate);

      const
        preloader = document.querySelector('.fls-preloader'),
        showPecentLoad = document.querySelector('.fls-preloader__counter'),
        showLineLoad = document.querySelector('.fls-preloader__line span'),
        htmlDocument = document.documentElement;

      let imagesLoadedCount = counter = progress = 0;
      
      htmlDocument.classList.add('loading');
      htmlDocument.classList.add('lock');

      preloaderImages.forEach(preloaderImage => {
        const imgClone = document.createElement('img');
        if (imgClone) {
          imgClone.onload = imageLoaded;
          imgClone.onerror = imageLoaded;
          preloaderImage.dataset.src ? imgClone.src = preloaderImage.dataset.src : imgClone.src = preloaderImage.src;
        }
      });
      function setValueProgress(progress) {
        showPecentLoad ? showPecentLoad.innerText = `${progress}%`: null;
        showLineLoad ? showLineLoad.style.width = `${progress}%` : null;
      }
      showPecentLoad ? setValueProgress(progress) : null;

      function imageLoaded() {
        imagesLoadedCount++;
        progress = Math.round((100 / preloaderImages.length) * imagesLoadedCount);
        const intervalId = setInterval(() => {
          counter >= progress ? clearInterval(intervalId) : setValueProgress(++counter);
          counter >= 100 ? addLoadedClass() : null;
        }, 10);
      }
      function addLoadedClass() {
        htmlDocument.classList.add('loaded');
        htmlDocument.classList.remove('lock');
        htmlDocument.classList.remove('loading');
        setInterval(() => {
          preloader.remove();
          preloaderContainer.remove();
        }, 500);
      }
    }else{
      preloaderContainer.remove();
    }
  }
  preloader();

  
});