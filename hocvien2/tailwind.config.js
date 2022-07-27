const color = require('tailwindcss/colors')
const renderSpacings = () => {
  const spacing = {
    full: "100%",
    fit: "fit-content",
  };
  // 0px --> 100px | 0px 5px 10px 15px,...
  for (let i = 0; i < 10; i += 0.5) {
    spacing[i] = `${i * 10}px`;
  }
  // 100px --> 1000px | 100px 110px 120px,...
  for (let i = 10; i < 100; i++) {
    spacing[i] = `${i * 10}px`;
  }
  return spacing;
};
const spacing = renderSpacings();
module.exports = {
    content: ["./src/**/*.{tsx,ts,html}"],
    theme: {
      spacing,
      colors: {
        ...color,
        transparent: 'transparent',
        white: '#ffffff',
        green:"#00a65a",
        dark:"#1e282c",
        black:"#222d32",
        grey:"#8aa4af",
        blue:"#3c8dbc",
        "grey-dark":"#969595",
        line:"#ddd",
        warn:"#f39c12",
        
      },
      fontSize: {
        10:"10px",
        12:"12px",
        14:"14px",
        16:"16px",
        18:"18px",
        20:"20px",
        24:"24px",
        32:"32px",
        48:"48px",
      },
      extend: {
        
      },
    },
    plugins: [require("tailwindcss"),
    require("autoprefixer")],
}