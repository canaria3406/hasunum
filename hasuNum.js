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
  78125: "5^7",
  43617: "201*217",
  31749: "557*57",
  12369: "217*57",
  11457: "201*57",
  557: "557",
  500: "557-57",
  490: "2*1*7*5*7",
  418: "201+217",
  299: "557-57-201",
  258: "201+57",
  217: "217",
  201: "201",
  175: "5*5*7",
  160: "217-57",
  144: "201-57",
  139: "557-217-201",
  123: "557-217-217",
  114: "57+57",
  103: "217-57-57",
  82: "557-217-201-57",
  73: "217-201+57",
  66: "557-217-217-57",
  57: "57",
  46: "217-57-57-57",
  41: "201+57-217",
  35: "5*7",
  34: "2*17",
  32: "217-201+217-201",
  30: "5+5+7+5+7+2-0-1",
  29: "5+7+5+5+7",
  28: "5*7-2-1-7+2+0+1",
  27: "2+1+7+5+5+7",
  26: "2*1*7+5+7",
  25: "2+1+7+2+0+1+5+7",
  24: "5+7+5+7",
  23: "217-201+2+1+7-2-0-1",
  22: "2+1+7+5+7",
  21: "2*1*7+2+1+7-2-0-1",
  20: "2+0+1+5+5+7",
  19: "5+5+7+5+7-2-1-7",
  18: "5+5+7+2-0-1",
  17: "5+5+7",
  16: "217-201",
  15: "2+0+1+5+7",
  14: "2*1*7",
  13: "2+0+1+2+1+7",
  12: "5+7",
  11: "2+1+7+2-0-1",
  10: "2+1+7",
  9: "5+7-2-0-1",
  8: "5+7+201-217+5+7",
  7: "2+1+7-2-0-1",
  6: "(-2)+1+7",
  5: "5+5+7-5-7",
  4: "217-201-5-7",
  3: "2+0+1",
  2: "5+7-2-1-7",
  1: "2-0-1",
  0: "2*0*1",
  "✿": "217-201-5-5-7",
})

if (typeof module === 'object' && module.exports)
  module.exports = hasuNum
