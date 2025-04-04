"use client";
import { Section } from "@/components";
import { useRef, useState, useEffect, MouseEvent as ReactMouseEvent } from "react";

const DesignForm = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const [drawing, setDrawing] = useState<boolean>(false);
  const [color, setColor] = useState<string>("#000000");
  const [pencilWidth, setPencilWidth] = useState<number>(3);
  const [eraserWidth, setEraserWidth] = useState<number>(20);
  const [history, setHistory] = useState<ImageData[]>([]);
  const [redoStack, setRedoStack] = useState<ImageData[]>([]);
  const [isEraser, setIsEraser] = useState<boolean>(false);

  // Initialize canvas dimensions
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const startDrawing = (e: ReactMouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;
    
    ctx.strokeStyle = isEraser ? "#FFFFFF" : color;
    ctx.lineWidth = isEraser ? eraserWidth : pencilWidth;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setDrawing(true);
    ctxRef.current = ctx;
    setRedoStack([]);
    saveState();
  };

  const draw = (e: ReactMouseEvent<HTMLCanvasElement>) => {
    if (!drawing || !ctxRef.current) return;
    ctxRef.current.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctxRef.current.stroke();
  };

  const stopDrawing = () => {
    setDrawing(false);
    if (ctxRef.current) {
      ctxRef.current.closePath();
    }
  };

  const clearCanvas = () => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    setHistory([]);
    setRedoStack([]);
  };

  const downloadImage = () => {
    if (!canvasRef.current) return;
    const link = document.createElement("a");
    link.download = "drawing.png";
    link.href = canvasRef.current.toDataURL();
    link.click();
  };

  const saveState = () => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;
    setHistory([
      ...history,
      ctx.getImageData(0, 0, canvasRef.current.width, canvasRef.current.height),
    ]);
  };

  const undo = () => {
    if (history.length === 0 || !canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;
    setRedoStack([history[history.length - 1], ...redoStack]);
    setHistory(history.slice(0, -1));
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    if (history.length > 1) {
      ctx.putImageData(history[history.length - 2], 0, 0);
    }
  };

  const redo = () => {
    if (redoStack.length === 0 || !canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;
    ctx.putImageData(redoStack[0], 0, 0);
    setHistory([...history, redoStack[0]]);
    setRedoStack(redoStack.slice(1));
  };

  return (
    <Section>
      <div className="">
        <div className="max-w-3xl mx-auto w-ful shadow-2xl rounded-sm">
          <form className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-6 w-full p-8 border-b border-gray-300">
              <div className="flex flex-col gap-4">
                <label htmlFor="name">Name</label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="w-full flex gap-3 flex-col">
                    <input
                      type="text"
                      id="name"
                      className="border w-full border-gray-300 rounded-sm p-2"
                    />
                    <span className="description3 text-tertiary">
                      First Name
                    </span>
                  </div>
                  <div className="w-full flex gap-3 flex-col">
                    <input
                      type="text"
                      className="border w-full border-gray-300 rounded-sm p-2"
                    />
                    <span className="description3 text-tertiary">
                      Last Name
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="w-full flex gap-3 flex-col">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="border w-full border-gray-300 rounded-sm p-2"
                  />
                  <span className="description3 text-tertiary">
                    example@example.com
                  </span>
                </div>
                <div className="w-full flex gap-3 flex-col">
                  <label htmlFor="number">Phone Number</label>
                  <input
                    type="number"
                    id="number"
                    className="border w-full border-gray-300 rounded-sm p-2 no-spinner"
                  />
                  <span className="description3 text-tertiary">
                    Please enter a valid phone number
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="w-full flex gap-3 flex-col">
                    <label htmlFor="name">Quantity</label>
                    <input
                      type="text"
                      placeholder="e.g.23"
                      className="border w-full border-gray-300 rounded-sm p-2"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <h2 className="text-lg">Add design</h2>
                <div className="flex gap-2 items-center">
                  <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                  />
                  
                  <button
                    type="button"
                    onClick={() => setIsEraser(false)}
                    className={`p-1 border ${!isEraser ? 'bg-gray-200' : ''}`}
                  >
                    ✏️
                  </button>
                  
                  {!isEraser && (
                    <div className="flex items-center gap-2">
                      <input
                        type="range"
                        min="1"
                        max="50"
                        value={pencilWidth}
                        onChange={(e) => setPencilWidth(Number(e.target.value))}
                        className="w-24"
                      />
                      <span>{pencilWidth}px</span>
                    </div>
                  )}
                  
                  <button
                    type="button"
                    onClick={() => setIsEraser(true)}
                    className={`p-1 border ${isEraser ? 'bg-gray-200' : ''}`}
                  >
                    🧽
                  </button>
                  
                  {isEraser && (
                    <div className="flex items-center gap-2">
                      <input
                        type="range"
                        min="5"
                        max="100"
                        value={eraserWidth}
                        onChange={(e) => setEraserWidth(Number(e.target.value))}
                        className="w-24"
                      />
                      <span>{eraserWidth}px</span>
                    </div>
                  )}
                  
                  <button type="button" onClick={undo} className="p-1 border">
                    ⬅️
                  </button>
                  <button type="button" onClick={redo} className="p-1 border">
                    ➡️
                  </button>
                  <button
                    type="button"
                    onClick={clearCanvas}
                    className="p-1 border"
                  >
                    ❌
                  </button>
                  <button
                    type="button"
                    onClick={downloadImage}
                    className="p-1 border"
                  >
                    ⬇️
                  </button>
                </div>
                <div className="w-full h-[400px]">
                  <canvas
                    ref={canvasRef}
                    style={{ width: "100%", height: "100%" }}
                    className="border bg-white cursor-crosshair"
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}
                  ></canvas>
                </div>
              </div>
            </div>
            <button className="bg-primary text-white py-2 w-fit px-12 border border-secondary hover:bg-secondary transition-colors duration-300 ease-in-out rounded-sm my-4 mx-auto">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default DesignForm;