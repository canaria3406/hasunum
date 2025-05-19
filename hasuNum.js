const hasuNum = ((Nums) => {
  const numsReversed = Object.keys(Nums).map(x => +x).filter(x => x > 0)
  const getMinDiv = (num) => {
    for (let i = numsReversed.length; i >= 0; i--)
      if (num >= numsReversed[i])
        return numsReversed[i]
  }
  const isDotRegex = /\.(\d+?)0{0,}$/
  const demolish = (num) => {
    if (typeof num !== "number")
      return ""

    if (num === Infinity || Number.isNaN(num))
      return `這麼廚的${num}有必要產生嗎？`

    if (num < 0)
      return `(✿)*(${demolish(num * -1)})`.replace(/\*\(1\)/g, "")

    if (!Number.isInteger(num)) {
      // abs(num) is definitely smaller than 2**51
      // rescale
      const n = num.toFixed(16).match(isDotRegex)[1].length
      return `(${demolish(num * Math.pow(10, n))})/(10)^(${n})`
    }

    if (Nums[num])
      return String(num)

    const div = getMinDiv(num)
    return (`${div}*(${demolish(Math.floor(num / div))})+` +
      `(${demolish(num % div)})`).replace(/\*\(1\)|\+\(0\)$/g, "")
  }
  //Finisher
  const finisher = (expr) => {
    expr = expr.replace(/\d+|✿/g, (n) => Nums[n]).replace("^", "**")
    //As long as it matches ([\*|\/])\(([^\+\-\(\)]+)\), replace it with $1$2
    while (expr.match(/[\*|\/]\([^\+\-\(\)]+\)/))
      expr = expr.replace(/([\*|\/])\(([^\+\-\(\)]+)\)/, (m, $1, $2) => $1 + $2)
    //As long as it matches ([\+|\-])\(([^\(\)]+)\)([\+|\-|\)]), replace it with $1$2$3
    while (expr.match(/[\+|\-]\([^\(\)]+\)[\+|\-|\)]/))
      expr = expr.replace(/([\+|\-])\(([^\(\)]+)\)([\+|\-|\)])/, (m, $1, $2, $3) => $1 + $2 + $3)
    //As long as it matches ([\+|\-])\(([^\(\)]+)\)$, replace it with $1$2
    while (expr.match(/[\+|\-]\(([^\(\)]+)\)$/))
      expr = expr.replace(/([\+|\-])\(([^\(\)]+)\)$/, (m, $1, $2) => $1 + $2)
    //If there is a bracket in the outermost part, remove it
    if (expr.match(/^\([^\(\)]+?\)$/))
      expr = expr.replace(/^\(([^\(\)]+)\)$/, "$1")

    expr = expr.replace(/\+-/g,'-')
    return expr
  }
  return (num) => finisher(demolish(num))
})({
  1384796133: "57*201*217*557",
  24294669: "201*217*557",
  6889533: "57*217*557",
  6381549: "57*201*557",
  2486169: "57*201*217",
  120869: "217*557",
  111957: "201*557",
  43617: "201*217",
  31749: "557*57",
  12369: "217*57",
  11457: "201*57",
  557: "557",
  500: "557-57",
  490: "2*1*7*5*7",
  418: "201+217",
  258: "201+57",
  217: "217",
  201: "201",
  199: "",
  197: "",
  193: "",
  191: "",
  181: "",
  179: "",
  175: "5*5*7",
  173: "",
  167: "",
  163: "",
  160: "217-57",
  157: "",
  151: "",
  149: "",
  144: "201-57",
  139: "557-217-201",
  137: "",
  131: "",
  127: "",
  113: "",
  109: "",
  107: "",
  103: "",
  102: "",
  101: "",
  100: "",
  99: "",
  98: "",
  97: "",
  96: "",
  95: "",
  94: "",
  93: "",
  92: "",
  91: "",
  90: "",
  89: "",
  88: "",
  87: "",
  86: "",
  85: "",
  84: "",
  83: "",
  82: "557-217-201-57",
  81: "",
  80: "",
  79: "",
  78: "",
  77: "",
  76: "",
  75: "",
  74: "",
  73: "",
  72: "",
  71: "",
  70: "",
  69: "",
  68: "",
  67: "",
  66: "",
  65: "",
  64: "",
  63: "",
  62: "",
  61: "",
  60: "",
  59: "",
  58: "",
  57: "57",
  56: "",
  55: "",
  54: "",
  53: "",
  52: "",
  51: "",
  50: "",
  49: "",
  48: "",
  47: "",
  46: "",
  45: "",
  44: "",
  43: "",
  42: "",
  41: "201+57-217",
  40: "",
  39: "",
  38: "",
  37: "",
  36: "",
  35: "5*7",
  34: "2*17",
  33: "",
  32: "",
  31: "",
  30: "",
  29: "5+7+5+5+7",
  28: "",
  27: "2+1+7+5+5+7",
  26: "",
  25: "",
  24: "",
  23: "",
  22: "2+1+7+5+7",
  21: "",
  20: "2+0+1+5+5+7",
  19: "",
  18: "",
  17: "5+5+7",
  16: "217-201",
  15: "2+0+1+5+7",
  14: "2*1*7",
  13: "2+0+1+2+1+7",
  12: "5+7",
  11: "",
  10: "2+1+7",
  9: "",
  8: "",
  7: "",
  6: "",
  5: "",
  4: "217-201-5-7",
  3: "2+0+1",
  2: "2+0*1",
  1: "2-0-1",
  0: "2*0*1",
  "✿": "217-201-5-5-7",
})

if (typeof module === 'object' && module.exports)
  module.exports = hasuNum
