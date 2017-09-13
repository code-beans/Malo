window.MathJax = {
  config: ["MMLorHTML.js"],
  jax: ["input/TeX", "output/HTML-CSS", "output/NativeMML"],
  extensions: ["tex2jax.js", "MathMenu.js", "MathZoom.js"],
  tex2jax: {
    inlineMath: [['$','$'], ['\\(','\\)']],
    processEscapes: true
  },
  TeX: {
       Macros: {
           dif: ["\\frac{d{#1}}{d{#2}}", 2],
           pdif: ["\\frac{\\partial{#1}}{\\partial{#2}}", 2],
           Tr: "\\mathop{\\rm Tr}\\limits",
           real: "\\mathop{\\rm Re}\\nolimits",
           imag: "\\mathop{\\rm Im}\\nolimits",
           Res: "\\mathop{\\rm Tr}\\limits",
           sn: "\\mathop{\\rm sn}\\nolimits",
           cn: "\\mathop{\\rm cn}\\nolimits",
           tn: "\\mathop{\\rm tn}\\nolimits",
           dm: "\\mathop{\\rm dm}\\nolimits",
           am: "\\mathop{\\rm am}\\nolimits",
           sign: "\\mathop{\\rm sgn}\\nolimits",
           bra: ["\\langle{#1}|", 1],
           ket: ["|{#1}\\rangle", 1],
           braket: ["\\langle{#1}\\rangle}", 1],
           ketbra: ["\\ket{#1}\\bra{#2}", 2],
           bb: ["\\mathbb{#1}",1],
           fr: ["\\mathfrak{#1}",1],
           nl : "\\newline"
       }
   }
};
