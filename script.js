document.addEventListener('DOMContentLoaded', () => {
     const loadingOverlay = document.createElement('div');
     loadingOverlay.classList.add('loading-overlay');
     document.body.appendChild(loadingOverlay);
     
     setTimeout(() => {
         loadingOverlay.style.opacity = '0';
         setTimeout(() => {
             loadingOverlay.remove();
             
             const techItems = document.querySelectorAll('.tech-item');
             techItems.forEach((item, index) => {
                 item.style.opacity = '0';
                 item.style.animation = `fadeIn 0.5s ease-out ${1.2 + (index * 0.1)}s forwards`;
             });
             
             const teamItems = document.querySelectorAll('.team-item');
             teamItems.forEach((item, index) => {
                 item.style.opacity = '0';
                 item.style.animation = `fadeIn 0.5s ease-out ${1.8 + (index * 0.1)}s forwards`;
             });
         }, 500);
     }, 800);
     particlesJS('particles-js', {
         particles: {
             number: {
                 value: 80,
                 density: {
                     enable: true,
                     value_area: 800
                 }
             },
             color: {
                 value: ['#00ffcc', '#ff00aa', '#7700ff', '#f0f0f0']
             },
             shape: {
                 type: ['circle', 'star'],
                 stroke: {
                     width: 0,
                     color: '#000000'
                 },
                 polygon: {
                     nb_sides: 5
                 }
             },
             opacity: {
                 value: 0.5,
                 random: true,
                 anim: {
                     enable: true,
                     speed: 1,
                     opacity_min: 0.1,
                     sync: false
                 }
             },
             size: {
                 value: 3,
                 random: true,
                 anim: {
                     enable: true,
                     speed: 2,
                     size_min: 0.1,
                     sync: false
                 }
             },
             line_linked: {
                 enable: true,
                 distance: 150,
                 color: '#00ffcc',
                 opacity: 0.2,
                 width: 1
             },
             move: {
                 enable: true,
                 speed: 2,
                 direction: 'none',
                 random: true,
                 straight: false,
                 out_mode: 'out',
                 bounce: false,
                 attract: {
                     enable: true,
                     rotateX: 600,
                     rotateY: 1200
                 }
             }
         },
         interactivity: {
             detect_on: 'canvas',
             events: {
                 onhover: {
                     enable: true,
                     mode: 'grab'
                 },
                 onclick: {
                     enable: true,
                     mode: 'push'
                 },
                 resize: true
             },
             modes: {
                 grab: {
                     distance: 140,
                     line_linked: {
                         opacity: 0.5
                     }
                 },
                 bubble: {
                     distance: 400,
                     size: 4,
                     duration: 2,
                     opacity: 0.8,
                     speed: 3
                 },
                 repulse: {
                     distance: 200,
                     duration: 0.4
                 },
                 push: {
                     particles_nb: 4
                 },
                 remove: {
                     particles_nb: 2
                 }
             }
         },
         retina_detect: true
     });
 
     setInterval(createShootingStar, 3000);
 
     function createShootingStar() {
         const shootingStar = document.createElement('div');
         shootingStar.classList.add('shooting-star');
         
         const startX = Math.random() * window.innerWidth;
         const startY = -50;
         
         const endX = startX + (Math.random() * 300 - 150);
         const endY = window.innerHeight + 50;
         
         const colors = ['#00ffcc', '#ff00aa', '#7700ff'];
         const color = colors[Math.floor(Math.random() * colors.length)];
         
         shootingStar.style.left = `${startX}px`;
         shootingStar.style.top = `${startY}px`;
         shootingStar.style.background = `linear-gradient(to bottom right, transparent, ${color})`;
         
         document.body.appendChild(shootingStar);
         
         shootingStar.animate([
             { transform: `translate(0, 0)` },
             { transform: `translate(${endX - startX}px, ${endY - startY}px)` }
         ], {
             duration: 1000 + Math.random() * 1000,
             easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
         }).onfinish = () => {
             shootingStar.remove();
         };
     }
 
     const style = document.createElement('style');
     style.textContent = `
         .shooting-star {
             position: fixed;
             width: 2px;
             height: 50px;
             background: linear-gradient(to bottom right, transparent, #00ffcc);
             transform: rotate(45deg);
             pointer-events: none;
             z-index: -1;
         }
         
         .loading-overlay {
             position: fixed;
             top: 0;
             left: 0;
             width: 100%;
             height: 100%;
             background-color: #0a0a0a;
             z-index: 9999;
             transition: opacity 0.5s ease;
         }
     `;
     document.head.appendChild(style);
 });
