/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-surface": "#161c21",
        "on-primary-container": "#8ebdf9",
        "secondary-container": "#8cd5ff",
        "secondary-fixed": "#c4e7ff",
        "on-secondary": "#ffffff",
        "on-tertiary-fixed-variant": "#00504c",
        "on-tertiary-container": "#77c8c1",
        "surface-container": "#e9eff5",
        "surface": "#f5faff",
        "tertiary-fixed-dim": "#84d5cd",
        "on-primary-fixed": "#001c37",
        "on-secondary-fixed-variant": "#004c69",
        "secondary-fixed-dim": "#87cff9",
        "on-primary-fixed-variant": "#07497d",
        "primary-container": "#0f4c81",
        "surface-tint": "#2d6197",
        "on-error": "#ffffff",
        "inverse-on-surface": "#ebf1f7",
        "surface-container-lowest": "#ffffff",
        "on-tertiary": "#ffffff",
        "tertiary-fixed": "#9ff1ea",
        "error": "#ba1a1a",
        "surface-bright": "#f5faff",
        "on-secondary-container": "#005d7f",
        "error-container": "#ffdad6",
        "primary-fixed-dim": "#a0c9ff",
        "on-tertiary-fixed": "#00201e",
        "on-error-container": "#93000a",
        "outline": "#727780",
        "primary-fixed": "#d2e4ff",
        "surface-container-low": "#eef4fa",
        "on-secondary-fixed": "#001e2c",
        "surface-container-high": "#e3e9ef",
        "background": "#f5faff",
        "surface-variant": "#dde3e9",
        "primary": "#00355f",
        "tertiary": "#003b38",
        "surface-dim": "#d5dbe1",
        "on-primary": "#ffffff",
        "on-background": "#161c21",
        "tertiary-container": "#00544f",
        "outline-variant": "#c2c7d1",
        "secondary": "#00658a",
        "inverse-primary": "#a0c9ff",
        "inverse-surface": "#2b3136",
        "on-surface-variant": "#42474f",
        "surface-container-highest": "#dde3e9"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "container-max": "1280px",
        "base": "8px",
        "gutter": "24px",
        "margin-mobile": "16px",
        "section-gap": "80px",
        "margin-desktop": "48px"
      },
      fontFamily: {
        "body-lg": ["Manrope"],
        "button": ["Inter"],
        "h3": ["Manrope"],
        "label-caps": ["Inter"],
        "body-md": ["Manrope"],
        "h1": ["Manrope"],
        "h2": ["Manrope"]
      },
      fontSize: {
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "button": ["14px", { lineHeight: "1.0", fontWeight: "600" }],
        "h3": ["24px", { lineHeight: "1.4", fontWeight: "600" }],
        "label-caps": ["12px", { lineHeight: "1.0", letterSpacing: "0.05em", fontWeight: "600" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "h1": ["48px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }],
        "h2": ["32px", { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "600" }]
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
