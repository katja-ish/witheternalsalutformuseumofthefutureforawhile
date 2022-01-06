import styles from "./Canvas.module.css";
import { useEffect, useRef, useState } from "react";

const Canvas = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext("2d");
    context.scale(2, 2);
    context.lineCap = "round";
    context.lineJoin = "round";
    context.strokeStyle = "#fe2222";
    context.lineWidth = 1;
    contextRef.current = context;
  }, []);

  const mobileFlower = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
  };

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const clean = () => {
    contextRef.current.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
  };

  const download = (el) => {
    const dataUrl = canvasRef.current.toDataURL();
    let button = document.getElementById("downloadBtn");
    button.href = dataUrl;
    button.download = `${dataUrl.charAt(
      Math.floor(Math.random() * dataUrl.length)
    )}-you-re-beautiful-human-being-${Math.random()}.jpg`;
  };

  return (
    <>
      <a
        className={[styles.btnDownload, styles.btn].join(" ")}
        href=""
        id="downloadBtn"
        onClick={download}
      >
        Download
      </a>

      <a className={styles.btn} onClick={clean}>
        Clear
      </a>

      <canvas
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        onTouchStart={startDrawing}
        onTouchEnd={finishDrawing}
        onTouchMove={draw}
        ref={canvasRef}
      />
    </>
  );
};

export default Canvas;
