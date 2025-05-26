export default function confetti() {
    const colors = ['#FFD700', '#FF6B6B', '#4CAF50', '#2196F3'];
    
    for (let i = 0; i < 100; i++) {
      createParticle();
    }
  
    function createParticle() {
      const particle = document.createElement('div');
      const size = Math.random() * 10 + 5;
      
      Object.assign(particle.style, {
        width: size + 'px',
        height: size + 'px',
        backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        position: 'fixed',
        top: '50%',
        left: '50%',
        borderRadius: '50%',
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        zIndex: '9999',
      });
  
      document.body.appendChild(particle);
  
      const angle = Math.random() * Math.PI * 2;
      const velocity = Math.random() * 300 + 200;
      const vx = Math.cos(angle) * velocity;
      const vy = Math.sin(angle) * velocity;
      let x = 0;
      let y = 0;
      let start = performance.now();
  
      function update() {
        const elapsed = (performance.now() - start) / 1000;
        x += vx * elapsed * 0.1;
        y += (vy * elapsed + 500 * elapsed * elapsed) * 0.1;
  
        Object.assign(particle.style, {
          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
          opacity: Math.max(0, 1 - elapsed / 1),
        });
  
        if (elapsed < 1) {
          requestAnimationFrame(update);
        } else {
          particle.remove();
        }
      }
  
      requestAnimationFrame(update);
    }
  }