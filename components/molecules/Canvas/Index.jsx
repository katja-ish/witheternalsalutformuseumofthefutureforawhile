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

  const startDrawing = ({ nativeEvent }) => {
    console.log("startDrawing");
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    console.log("finishDrawing");
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
  };

  return (
    <>
      <a className={styles.btn} onClick={clean}>
        Clear me
      </a>

      <a
        className={[styles.btnDownload, styles.btn].join(" ")}
        download="hello.jpg"
        href=""
        id="downloadBtn"
        onClick={download}
      >
        Download
      </a>

      <canvas
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        ref={canvasRef}
      />
    </>
  );
};

export default Canvas;
