import { useEffect, useRef } from 'react';

type CanvasOrbitProps = {
  className?: string;
};

export const CanvasOrbit = ({ className = '' }: CanvasOrbitProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const pulse = 0.5 + Math.sin(time * 0.0007) * 0.15;

      const glow = context.createRadialGradient(cx, cy, 10, cx, cy, Math.max(width, height) * 0.6);
      glow.addColorStop(0, `rgba(255,255,255,${0.08 + pulse * 0.05})`);
      glow.addColorStop(0.4, 'rgba(255,255,255,0.03)');
      glow.addColorStop(1, 'rgba(255,255,255,0)');
      context.fillStyle = glow;
      context.fillRect(0, 0, width, height);

      const ringCount = 3;
      for (let index = 0; index < ringCount; index += 1) {
        const ringRadius = Math.min(width, height) * (0.18 + index * 0.11);
        context.beginPath();
        context.strokeStyle = `rgba(255,255,255,${0.08 - index * 0.015})`;
        context.lineWidth = 1;
        context.setLineDash([6, 14]);
        context.lineDashOffset = -time * 0.02 * (index + 1);
        context.arc(cx, cy, ringRadius, 0, Math.PI * 2);
        context.stroke();
      }
      context.setLineDash([]);

      const orbitCount = 14;
      for (let index = 0; index < orbitCount; index += 1) {
        const angle = time * 0.00035 * (index % 4 + 1) + index * 0.45;
        const radius = Math.min(width, height) * (0.14 + (index % 5) * 0.04);
        const x = cx + Math.cos(angle) * radius;
        const y = cy + Math.sin(angle * 1.2) * radius * 0.66;
        const size = 1.6 + (index % 3) * 0.8;

        const particle = context.createRadialGradient(x, y, 0, x, y, size * 6);
        particle.addColorStop(0, 'rgba(120, 168, 255, 0.9)');
        particle.addColorStop(0.5, 'rgba(255,255,255,0.32)');
        particle.addColorStop(1, 'rgba(255,255,255,0)');
        context.fillStyle = particle;
        context.beginPath();
        context.arc(x, y, size * 2.4, 0, Math.PI * 2);
        context.fill();
      }

      const drift = Math.sin(time * 0.0004) * 18;
      const blob = context.createRadialGradient(cx - 30 + drift, cy + 10, 0, cx, cy, Math.min(width, height) * 0.32);
      blob.addColorStop(0, 'rgba(118, 255, 220, 0.28)');
      blob.addColorStop(0.45, 'rgba(118, 255, 220, 0.12)');
      blob.addColorStop(1, 'rgba(118, 255, 220, 0)');
      context.fillStyle = blob;
      context.beginPath();
      context.arc(cx - 10 + drift, cy + 12, Math.min(width, height) * 0.24, 0, Math.PI * 2);
      context.fill();

      animationFrame = window.requestAnimationFrame(draw);
    };

    resize();
    animationFrame = window.requestAnimationFrame(draw);
    window.addEventListener('resize', resize);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />;
};
