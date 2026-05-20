"use client";

import emailjs from "@emailjs/browser";
import {
  type MouseEvent as ReactMouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";

const REACT_APP_EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID_3;

const REACT_APP_EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_3;

const REACT_APP_EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_3;

const DesignForm = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  const [drawing, setDrawing] = useState(false);
  const [color, setColor] = useState("#000000");
  const [pencilWidth, setPencilWidth] = useState(3);
  const [eraserWidth, setEraserWidth] = useState(20);
  const [history, setHistory] = useState<ImageData[]>([]);
  const [redoStack, setRedoStack] = useState<ImageData[]>([]);
  const [isEraser, setIsEraser] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    quantity: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

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

  const saveState = () => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext("2d");

    if (!ctx) return;

    setHistory((prev) => [
      ...prev,
      ctx.getImageData(
        0,
        0,
        canvasRef.current!.width,
        canvasRef.current!.height,
      ),
    ]);
  };

  const undo = () => {
    if (history.length === 0 || !canvasRef.current) return;

    const ctx = canvasRef.current.getContext("2d");

    if (!ctx) return;

    setRedoStack((prev) => [history[history.length - 1], ...prev]);

    const newHistory = history.slice(0, -1);

    setHistory(newHistory);

    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    if (newHistory.length > 0) {
      ctx.putImageData(newHistory[newHistory.length - 1], 0, 0);
    }
  };

  const redo = () => {
    if (redoStack.length === 0 || !canvasRef.current) return;

    const ctx = canvasRef.current.getContext("2d");

    if (!ctx) return;

    ctx.putImageData(redoStack[0], 0, 0);

    setHistory((prev) => [...prev, redoStack[0]]);

    setRedoStack((prev) => prev.slice(1));
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

  const isCanvasBlank = (canvas: HTMLCanvasElement) => {
    const blankCanvas = document.createElement("canvas");

    blankCanvas.width = canvas.width;
    blankCanvas.height = canvas.height;

    return canvas.toDataURL() === blankCanvas.toDataURL();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      let drawingImage = "";

      if (
        canvasRef.current &&
        !isCanvasBlank(canvasRef.current)
      ) {
        drawingImage = canvasRef.current.toDataURL("image/png");
      }

      const templateParams = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        quantity: formData.quantity,
        drawingImage: drawingImage,
        drawing: drawingImage
          ? "Customer attached a drawing/design."
          : "No drawing added.",

        details: `
Design Request Details

Customer Information
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}

Quantity Required
${formData.quantity}

Drawing Status
${
  drawingImage
    ? "Customer submitted a custom drawing."
    : "No drawing submitted."
}
        `,
      };

      await emailjs.send(
        REACT_APP_EMAILJS_SERVICE_ID!,
        REACT_APP_EMAILJS_TEMPLATE_ID!,
        templateParams,
        REACT_APP_EMAILJS_PUBLIC_KEY,
      );

      setSubmitSuccess(true);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        quantity: "",
      });

      clearCanvas();
    } catch (error) {
      console.error(error);

      alert("Failed to submit design request.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={`max-screen lg:py-12 py-5`}>
      <div className="">
        <div className="max-w-3xl mx-auto w-ful shadow-2xl rounded-sm">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-6 w-full p-8 border-b border-gray-300">
              {/* Name */}
              <div className="flex flex-col gap-4">
                <label htmlFor="name">Name</label>

                <div className="grid grid-cols-2 gap-4">
                  <div className="w-full flex gap-3 flex-col">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="border w-full border-gray-300 rounded-sm p-2"
                    />

                    <span className="description3 text-tertiary">
                      First Name
                    </span>

                    {errors.firstName && (
                      <span className="text-red-500 text-sm">
                        {errors.firstName}
                      </span>
                    )}
                  </div>

                  <div className="w-full flex gap-3 flex-col">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="border w-full border-gray-300 rounded-sm p-2"
                    />

                    <span className="description3 text-tertiary">
                      Last Name
                    </span>

                    {errors.lastName && (
                      <span className="text-red-500 text-sm">
                        {errors.lastName}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="grid grid-cols-2 gap-4">
                <div className="w-full flex gap-3 flex-col">
                  <label htmlFor="email">Email</label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border w-full border-gray-300 rounded-sm p-2"
                  />

                  <span className="description3 text-tertiary">
                    example@example.com
                  </span>

                  {errors.email && (
                    <span className="text-red-500 text-sm">{errors.email}</span>
                  )}
                </div>

                <div className="w-full flex gap-3 flex-col">
                  <label htmlFor="number">Phone Number</label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border w-full border-gray-300 rounded-sm p-2 no-spinner"
                  />

                  <span className="description3 text-tertiary">
                    Please enter a valid phone number
                  </span>

                  {errors.phone && (
                    <span className="text-red-500 text-sm">{errors.phone}</span>
                  )}
                </div>
              </div>

              {/* Quantity */}
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="w-full flex gap-3 flex-col">
                    <label htmlFor="quantity">Quantity</label>

                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder="e.g.23"
                      className="border w-full border-gray-300 rounded-sm p-2"
                    />
                  </div>
                </div>
              </div>

              {/* Drawing */}
              <div className="flex flex-col gap-2 w-full">
                <h2 className="text-lg">Add design</h2>

                <div className="flex gap-2 items-center flex-wrap">
                  <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                  />

                  <button
                    type="button"
                    onClick={() => setIsEraser(false)}
                    className={`p-1 border ${!isEraser ? "bg-gray-200" : ""}`}
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
                    className={`p-1 border ${isEraser ? "bg-gray-200" : ""}`}
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
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary text-white py-2 w-fit px-12 border border-secondary hover:bg-secondary transition-colors duration-300 ease-in-out rounded-sm my-4 mx-auto disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>

            {submitSuccess && (
              <p className="text-green-600 text-center pb-6">
                Design request submitted successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default DesignForm;
