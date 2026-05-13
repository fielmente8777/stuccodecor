"use client";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

//add these variables to .env file
const REACT_APP_EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const REACT_APP_EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ;
const REACT_APP_EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC ;

const globalCSS = `
  .mkl-input:hover { border-color: #a0a8be !important; }
  .mkl-input:focus { border-color: #2e69ff !important; box-shadow: 0 0 0 3px rgba(46,105,255,0.18) !important; }
  .mkl-input.error:focus { border-color: #e03 !important; box-shadow: 0 0 0 3px rgba(221,0,51,0.15) !important; }
`;

function InjectCSS() {
  useEffect(() => {
    const tag = document.createElement("style");
    tag.textContent = globalCSS;
    document.head.appendChild(tag);
    return () => document.head.removeChild(tag);
  }, []);
  return null;
}

const S = {
  supernova: {
    // minHeight: "100vh",
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "16px",
    fontFamily: '"Inter", sans-serif',
    fontSize: "16px",
    color: "#2c3345",
    boxSizing: "border-box",
  },
  formAll: {
    // backgroundColor: "#ffffff",
    width: "100%",
    borderRadius: "4px",
    // boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    overflow: "hidden",
  },
  formSection: {
    listStyle: "none",
    margin: 0,
    // padding: "0 38px",
  },
  formSectionMobile: {
    listStyle: "none",
    margin: 0,
    // padding: "0 20px",
  },
  formLineDesktop: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    paddingTop: "16px",
    paddingBottom: "16px",
    borderBottom: "1px solid #f0f0f5",
  },
  formLineMobile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    paddingTop: "14px",
    paddingBottom: "14px",
    borderBottom: "1px solid #f0f0f5",
  },
  formLineButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "20px",
    paddingBottom: "24px",
    borderTop: "1px solid #e8e8e8",
  },
  labelDesktop: {
    color: "#2c3345",
    fontSize: "16px",
    fontWeight: "500",
    minWidth: "180px",
    maxWidth: "180px",
    paddingTop: "8px",
    flexShrink: 0,
  },
  labelMobile: {
    color: "#2c3345",
    fontSize: "15px",
    fontWeight: "500",
    marginBottom: "8px",
  },
  required: { color: "#e03", marginLeft: "2px" },
  inputWrap: { flex: 1 },
  nameRowDesktop: { display: "flex", gap: "16px", width: "100%" },
  nameRowMobile: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    width: "100%",
  },
  nameField: { display: "flex", flexDirection: "column", flex: 1 },
  textbox: {
    width: "100%",
    boxSizing: "border-box",
    border: "1px solid #c8ccd6",
    borderRadius: "3px",
    backgroundColor: "#ffffff",
    color: "#2c3345",
    fontFamily: '"Inter", sans-serif',
    fontSize: "16px",
    padding: "8px 10px",
    outline: "none",
    transition: "border-color 0.2s",
  },
  textboxError: { borderColor: "#e03" },
  subLabel: { color: "#6f7587", fontSize: "12px", marginTop: "4px" },
  textarea: {
    width: "100%",
    boxSizing: "border-box",
    border: "1px solid #c8ccd6",
    borderRadius: "3px",
    backgroundColor: "#ffffff",
    color: "#2c3345",
    fontFamily: '"Inter", sans-serif',
    fontSize: "16px",
    padding: "8px 10px",
    resize: "vertical",
    outline: "none",
    transition: "border-color 0.2s",
  },
  btnBase: {
    backgroundColor: "#d1262a",
    color: "#ffffff",
    border: "none",
    borderRadius: "3px",
    fontFamily: '"Inter", sans-serif',
    fontSize: "16px",
    fontWeight: "normal",
    padding: "10px 24px",
    cursor: "pointer",
    transition: "background-color 0.2s",
  },
  errorText: { color: "#e03", fontSize: "12px", marginTop: "4px" },
  successMsg: {
    textAlign: "center",
    padding: "40px 38px",
    color: "#2c3345",
    fontSize: "18px",
    fontWeight: "500",
  },
};

function useIsMobile() {
  const [mobile, setMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 540 : false
  );
  useEffect(() => {
    const fn = () => setMobile(window.innerWidth < 540);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);
  return mobile;
}

function Field({ id, label, required, isMobile, children }) {
  return (
    <li style={isMobile ? S.formLineMobile : S.formLineDesktop}>
      <label htmlFor={id} style={isMobile ? S.labelMobile : S.labelDesktop}>
        {label}
        {required && <span style={S.required}>*</span>}
      </label>
      <div style={isMobile ? {} : S.inputWrap}>{children}</div>
    </li>
  );
}

export default function StuccoContactForm() {
  const isMobile = useIsMobile();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [hovered, setHovered] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = "This field is required.";
    if (!form.lastName.trim()) e.lastName = "This field is required.";
    if (!form.email.trim()) e.email = "This field is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid e-mail address.";
    if (!form.phone.trim()) e.phone = "This field is required.";
    else if (!/^\(\d{3}\) \d{3}-\d{4}$/.test(form.phone))
      e.phone = "Please enter a valid phone number.";
    return e;
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: undefined }));
  };

  const onPhoneChange = (e) => {
    let v = e.target.value.replace(/\D/g, "").slice(0, 10);
    let f = "";
    if (v.length > 0) f = "(" + v.slice(0, 3);
    if (v.length >= 4) f += ") " + v.slice(3, 6);
    if (v.length >= 7) f += "-" + v.slice(6, 10);
    setForm((p) => ({ ...p, phone: f }));
    if (errors.phone) setErrors((p) => ({ ...p, phone: undefined }));
  };

  const onSubmit = () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    const templateParams = {
      first_name: form.firstName,
      last_name: form.lastName,
      email: form.email,
      phone: form.phone,
      message: form.message,
    };

    emailjs
      .send(
        REACT_APP_EMAILJS_SERVICE_ID,
        REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSubmitted(true); // success UI
      })
      .catch((error) => {
        console.error("Email error:", error);
        alert("Failed to send message. Please try again.");
      });
  };

  const sec = isMobile ? S.formSectionMobile : S.formSection;

  if (submitted) {
    return (
      <div style={S.supernova}>
        <div style={S.formAll}>
          <div style={S.successMsg}>
            ✅ Thank you! Your message has been submitted successfully.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={S.supernova}>
      <InjectCSS />
      <div>
        <div
          style={{
            textTransform: "upperCase",
            fontSize: "1rem",
            lineHeight: "1.5rem",
            color: "rgb(255 79 71)",
            fontWeight: "700",
            paddingBottom: "0.5rem",
          }}
        >
          contact with us
        </div>
        <div
          style={{
            fontSize: "1.5rem",
            lineHeight: "1.5rem",
            fontWeight: "700",
            // paddingBottom: "0.5rem",
          }}
        >
          Feel free to write our Mouldings experts
        </div>
        <div style={S.formAll}>
          <ul style={sec}>
            {/* Name */}
            <Field label="Name" required isMobile={isMobile}>
              <div style={isMobile ? S.nameRowMobile : S.nameRowDesktop}>
                <div style={S.nameField}>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={form.firstName}
                    onChange={onChange}
                    autoComplete="given-name"
                    className={`mkl-input${errors.firstName ? " error" : ""}`}
                    style={{
                      ...S.textbox,
                      ...(errors.firstName ? S.textboxError : {}),
                    }}
                  />
                  <span style={S.subLabel}>First Name</span>
                  {errors.firstName && (
                    <span style={S.errorText}>{errors.firstName}</span>
                  )}
                </div>
                <div style={S.nameField}>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={form.lastName}
                    onChange={onChange}
                    autoComplete="family-name"
                    className={`mkl-input${errors.lastName ? " error" : ""}`}
                    style={{
                      ...S.textbox,
                      ...(errors.lastName ? S.textboxError : {}),
                    }}
                  />
                  <span style={S.subLabel}>Last Name</span>
                  {errors.lastName && (
                    <span style={S.errorText}>{errors.lastName}</span>
                  )}
                </div>
              </div>
            </Field>

            {/* Email */}
            <Field id="email" label="Email" required isMobile={isMobile}>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={onChange}
                autoComplete="email"
                className={`mkl-input${errors.email ? " error" : ""}`}
                style={{
                  ...S.textbox,
                  ...(errors.email ? S.textboxError : {}),
                }}
              />
              <div style={S.subLabel}>example@example.com</div>
              {errors.email && <span style={S.errorText}>{errors.email}</span>}
            </Field>

            {/* Phone */}
            <Field id="phone" label="Phone" required isMobile={isMobile}>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={onPhoneChange}
                placeholder="(000) 000-0000"
                autoComplete="tel-national"
                className={`mkl-input${errors.phone ? " error" : ""}`}
                style={{
                  ...S.textbox,
                  ...(errors.phone ? S.textboxError : {}),
                }}
              />
              <div style={S.subLabel}>Please enter a valid phone number.</div>
              {errors.phone && <span style={S.errorText}>{errors.phone}</span>}
            </Field>

            {/* Message */}
            <Field id="message" label="Message" isMobile={isMobile}>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={onChange}
                className="mkl-input"
                style={{ ...S.textarea, height: isMobile ? "120px" : "163px" }}
              />
            </Field>
          </ul>

          {/* Submit */}
          <ul style={{ ...sec, paddingTop: 0, paddingBottom: 0 }}>
            <li style={S.formLineButton}>
              <button
                type="button"
                onClick={onSubmit}
                style={{
                  ...S.btnBase,
                  backgroundColor: hovered ? "#7b1619" : "#d1262a",
                  minWidth: isMobile ? "unset" : "180px",
                  width: isMobile ? "100%" : "auto",
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                Submit
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
