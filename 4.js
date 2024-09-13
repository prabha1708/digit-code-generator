document.getElementById('generateButton').addEventListener('click', function () {
  const minValue = parseInt(document.getElementById('minValue').value);
  const maxValue = parseInt(document.getElementById('maxValue').value);
  const resultElement = document.getElementById('randomNumber');

  if (isNaN(minValue) || isNaN(maxValue)) {
      resultElement.textContent = 'Please enter valid numbers!';
      resultElement.style.color = 'red';
      return;
  }

  if (minValue > maxValue) {
      resultElement.textContent = 'Minimum value should be less than maximum value!';
      resultElement.style.color = 'red';
      return;
  }

  const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  resultElement.textContent = randomNumber;
  resultElement.style.color = '#ff5722';
});
