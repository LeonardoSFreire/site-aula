import '../css/variables.css';
import '../css/base.css';
import '../css/components.css';
import '../css/sections.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Header Scroll Effect
const header = document.querySelector('#main-header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Hero Enter Animations
const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });
tl.to('.hero-title', { opacity: 1, y: 0, duration: 1.2, delay: 0.5 })
    .to('.hero-subtitle', { opacity: 1, y: 0, duration: 1 }, '-=0.8')
    .to('.hero-btn-wrapper', { opacity: 1, y: 0, duration: 1 }, '-=0.8');

// Parallax Hero Background
gsap.to('#hero-bg', {
    scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
    },
    yPercent: 20,
    scale: 1.05
});

console.log('Animations Initialized');

// Reveal Image Animation (Clinic)
gsap.utils.toArray('.reveal-mask').forEach(mask => {
   let img = mask.querySelector('.reveal-img');
   let tl = gsap.timeline({
       scrollTrigger: {
           trigger: mask,
           start: "top 80%",
           toggleActions: "play none none reverse"
       }
   });
   
   // Mask uncovers from left
   tl.fromTo(mask, { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: 1.5, ease: 'power3.out' })
     .from(img, { scale: 1.2, duration: 1.5, ease: 'power3.out' }, "<");
});

// Services Stagger Animation
gsap.from('.service-card', {
   scrollTrigger: {
       trigger: '#services',
       start: "top 80%",
   },
   y: 50,
   opacity: 0,
   duration: 0.8,
   stagger: 0.2,
   ease: "power2.out"
});

// Experts Stagger
gsap.from('.expert-card', {
   scrollTrigger: {
       trigger: '#specialists',
       start: "top 80%",
   },
   y: 50,
   opacity: 0,
   duration: 0.8,
   stagger: 0.2,
   ease: "power2.out"
});

// Contact Form Reveal
gsap.from('.contact-form-wrapper', {
   scrollTrigger: {
       trigger: '#contact',
       start: "top 75%",
   },
   x: 50,
   opacity: 0,
   duration: 1,
   ease: "power2.out"
});
