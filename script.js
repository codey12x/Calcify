function appendToResult(value) {
    const resultField = document.getElementById('result');
    if (resultField.value === 'Error') {
        resultField.value = ''; // Clear error on new input
    }
    resultField.value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculateResult() {
    const resultField = document.getElementById('result');
    let expression = resultField.value;
    expression = expression.replace(/×/g, '*').replace(/÷/g, '/'); // Convert symbols for eval
    try {
        resultField.value = eval(expression) || ''; // Handle empty input
    } catch (error) {
        resultField.value = 'Error';
    }
}
