import React, { useEffect, useRef } from 'react';
import { useGraphContext } from './useGraphContext';

function drawGraph (ctx, axes, funcStr, color, thick) {
  let xx;
  let yy;
  let dx = 4;
  let x0 = axes.x0;
  let y0 = axes.y0;
  let scale = axes.scale;
  let iMax = Math.round((ctx.canvas.width - x0)/dx);
  let iMin = axes.doNegativeX ? Math.round(-x0/dx) : 0;
  ctx.beginPath();
  ctx.lineWidth = thick;
  ctx.strokeStyle = color;

  const func = Function(...funcStr);
 
  for (let i = iMin; i <= iMax; i++) {
    xx = dx*i; 
    yy = scale*func(xx/scale);
    if (i==iMin) {
      ctx.moveTo(x0+xx,y0-yy);
    } 
    else {
      ctx.lineTo(x0+xx,y0-yy);
    } 
  }
  ctx.stroke();
 }
 
function showAxes(ctx, axes) {
  let x0 = axes.x0;
  let w = ctx.canvas.width;
  let y0 = axes.y0;
  let h = ctx.canvas.height;
  let xmin = axes.doNegativeX ? 0 : x0;
  ctx.beginPath();
  ctx.strokeStyle = "rgb(128,128,128)"; 
  ctx.moveTo(xmin,y0); ctx.lineTo(w,y0);  // X axis
  ctx.moveTo(x0,0);    ctx.lineTo(x0,h);  // Y axis
  ctx.stroke();
}

function createAxes(ctxRef, axesRef, canvasRef) {
  if (!ctxRef.current) ctxRef.current = canvasRef.current.getContext("2d");
  axesRef.current.x0 = .5 + .5*canvasRef.current.width;  // x0 pixels from left to x=0
  axesRef.current.y0 = .5 + .5*canvasRef.current.height; // y0 pixels from top to y=0
  axesRef.current.scale = 40;                 // 40 pixels from x=0 to x=1
  axesRef.current.doNegativeX = true;
  showAxes(ctxRef.current, axesRef.current);
}

function Canvas() {
  const canvasRef = useRef();
  const ctxRef = useRef();
  const axesRef = useRef({});
  const { funcArray } = useGraphContext();

  useEffect(() => {
    if(canvasRef.current) {
      createAxes(ctxRef, axesRef, canvasRef);
    }
  }, []);

  useEffect(() => {
    if (!!funcArray?.length) {
      if (ctxRef.current) ctxRef.current.clearRect(0, 0, ctxRef.current.canvas.width, ctxRef.current.canvas.height);
      createAxes(ctxRef, axesRef, canvasRef);
      funcArray.forEach(({ func, color = "rgb(11,153,11)", strokeWidth = 1 }) => {
        drawGraph(ctxRef.current, axesRef.current, func, color, strokeWidth); 
      })
    }
  }, [funcArray]);

  return (
    <canvas ref={canvasRef}></canvas>
  )
};

export default Canvas;