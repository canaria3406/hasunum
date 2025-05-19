inputValue.oninput = _ => {
    const numberValue = inputValue.value === '' ? '' : Number(inputValue.value);
    outputValue.innerHTML = numberValue + ' = <big>' + hasuNum(numberValue) + '</big>';
    container.setAttribute('numberValue', numberValue);
};

inputValue.oninput();
