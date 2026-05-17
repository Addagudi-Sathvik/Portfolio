import { useEffect } from 'react';

export default function usePortfolioEffects() {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');
    const navbar = document.getElementById('navbar');
    const canvas = document.getElementById('canvas-bg');
    const cleanup = [];

    const onMouseMove = (e) => {
      if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      }
      if (follower) {
        follower.style.left = e.clientX + 'px';
        follower.style.top = e.clientY + 'px';
      }
    };
    document.addEventListener('mousemove', onMouseMove);
    cleanup.push(() => document.removeEventListener('mousemove', onMouseMove));

    const interactiveItems = document.querySelectorAll('a, button, .project-item, .skill-card, .cert-card, .ach-item, .edu-item, .exp-item, .resume-fab');
    const activateCursor = () => {
      cursor?.classList.add('active');
      follower?.classList.add('active');
    };
    const deactivateCursor = () => {
      cursor?.classList.remove('active');
      follower?.classList.remove('active');
    };
    interactiveItems.forEach((el) => {
      el.addEventListener('mouseenter', activateCursor);
      el.addEventListener('mouseleave', deactivateCursor);
    });
    cleanup.push(() => {
      interactiveItems.forEach((el) => {
        el.removeEventListener('mouseenter', activateCursor);
        el.removeEventListener('mouseleave', deactivateCursor);
      });
    });

    const onScroll = () => {
      navbar?.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    cleanup.push(() => window.removeEventListener('scroll', onScroll));

    let animationId = 0;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      let W;
      let H;
      let mx;
      let my;
      const particles = [];

      const resize = () => {
        W = canvas.width = window.innerWidth;
        H = canvas.height = window.innerHeight;
        mx = mx ?? W / 2;
        my = my ?? H / 2;
      };
      resize();
      window.addEventListener('resize', resize);
      cleanup.push(() => window.removeEventListener('resize', resize));

      class Particle {
        constructor() {
          this.reset();
        }

        reset() {
          this.x = Math.random() * W;
          this.y = Math.random() * H;
          this.r = Math.random() * 1.2 + 0.2;
          this.vx = (Math.random() - 0.5) * 0.3;
          this.vy = (Math.random() - 0.5) * 0.3;
          this.alpha = Math.random() * 0.5 + 0.1;
          this.pulse = Math.random() * Math.PI * 2;
        }

        update() {
          this.x += this.vx;
          this.y += this.vy;
          this.pulse += 0.02;
          if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
        }

        draw() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(245,245,240,${this.alpha * (0.6 + 0.4 * Math.sin(this.pulse))})`;
          ctx.fill();
        }
      }

      for (let i = 0; i < 140; i++) particles.push(new Particle());
      mx = W / 2;
      my = H / 2;

      const onCanvasMouseMove = (e) => {
        mx = e.clientX;
        my = e.clientY;
      };
      document.addEventListener('mousemove', onCanvasMouseMove);
      cleanup.push(() => document.removeEventListener('mousemove', onCanvasMouseMove));

      const drawConnections = () => {
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 100) {
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.strokeStyle = `rgba(245,245,240,${(1 - dist / 100) * 0.08})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
          const dx = particles[i].x - mx;
          const dy = particles[i].y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mx, my);
            ctx.strokeStyle = `rgba(245,245,240,${(1 - dist / 150) * 0.18})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      };

      const animate = () => {
        animationId = requestAnimationFrame(animate);
        ctx.clearRect(0, 0, W, H);
        particles.forEach((p) => {
          p.update();
          p.draw();
        });
        drawConnections();
      };
      animate();
    }
    cleanup.push(() => cancelAnimationFrame(animationId));

    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    }, { threshold: 0.1 });
    reveals.forEach((el) => observer.observe(el));
    cleanup.push(() => observer.disconnect());

    const barObserver = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const fill = e.target.querySelector('.skill-bar-fill');
          if (fill) fill.style.width = fill.dataset.width + '%';
        }
      });
    }, { threshold: 0.3 });
    document.querySelectorAll('.skill-card').forEach((el) => barObserver.observe(el));
    cleanup.push(() => barObserver.disconnect());

    return () => {
      cleanup.forEach((fn) => fn());
    };
  }, []);
}
