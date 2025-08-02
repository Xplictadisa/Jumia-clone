"use client";

import { useEffect, useRef } from "react";

export default function Star({
  width,
  height,
  className,
  circleColor,
  starColor
}: {
  width: number;
  height: number;
  className?: string;
  circleColor: string;
  starColor: string
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    canvas.width = width;
    canvas.height = height;
    const centerX = canvas.width * 0.5;
    const centerY = canvas.height * 0.5;
    const ctx = canvas.getContext("2d")!;
    const radius = centerX - 1;
    const outerRadius = radius - 3;
    const innerRadius = outerRadius * 0.5;

    drawCircle(ctx, centerX, centerY, radius, circleColor);
    drawStar(ctx, centerX, centerY, 5, outerRadius, innerRadius, starColor);
  }, [height, width, circleColor, starColor]);

  return <canvas className={className} ref={canvasRef}>star</canvas>;
}

// functions
function drawStar(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  spikes: number,
  outerRadius: number,
  innerRadius: number,
  color: string
  
) {
  let rot = (Math.PI / 2) * 3;
  let x = cx;
  let y = cy;
  const step = Math.PI / spikes;

  ctx.beginPath();
  ctx.moveTo(cx, cy - outerRadius);

  for (let i = 0; i < spikes; i++) {
    x = cx + Math.cos(rot) * outerRadius;
    y = cy + Math.sin(rot) * outerRadius;
    ctx.lineTo(x, y);
    rot += step;

    x = cx + Math.cos(rot) * innerRadius;
    y = cy + Math.sin(rot) * innerRadius;
    ctx.lineTo(x, y);
    rot += step;
  }

  ctx.lineTo(cx, cy - outerRadius);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
  ctx.strokeStyle = color;
  ctx.stroke();
}

// 
function drawCircle(
  ctx: CanvasRenderingContext2D,
  centerX: number,
  centerY: number,
  radius: number,
  color: string
) {
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
}
