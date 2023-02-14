// Add an event listener to the LENGTH form submission
document.querySelector('#length-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting and reloading page

  // Get the values from the form inputs for the LENGTH section
  const numberInputLength = document.getElementById('number-input-length').value;
  const fromUnitLength = document.getElementById('from-unit-length').value;
  const toUnitLength = document.getElementById('to-unit-length').value;

  // Conversion constants
  const inchesInFoot = 12;
  const inchesInYard = 36;
  const inchesInMile = 63360;
  const feetInYard = 3;
  const feetInMile = 5280;
  const yardsInMile = 1760;

  let result1 = 0;

  // Perform the conversion based on the selected units
  if (fromUnitLength === 'inches' && toUnitLength === 'feet') {
    result1 = numberInputLength / inchesInFoot;
  } else if (fromUnitLength === 'inches' && toUnitLength === 'yards') {
    result1 = numberInputLength / inchesInYard;
  } else if (fromUnitLength === 'inches' && toUnitLength === 'miles') {
    result1 = numberInputLength / inchesInMile;
  } else if (fromUnitLength === 'feet' && toUnitLength === 'inches') {
    result1 = numberInputLength * inchesInFoot;
  } else if (fromUnitLength === 'feet' && toUnitLength === 'yards') {
    result1 = numberInputLength / feetInYard;
  } else if (fromUnitLength === 'feet' && toUnitLength === 'miles') {
    result1 = numberInputLength / feetInMile;
  } else if (fromUnitLength === 'yards' && toUnitLength === 'inches') {
    result1 = numberInputLength * inchesInYard;
  } else if (fromUnitLength === 'yards' && toUnitLength === 'feet') {
    result1 = numberInputLength * feetInYard;
  } else if (fromUnitLength === 'yards' && toUnitLength === 'miles') {
    result1 = numberInputLength / yardsInMile;
  } else if (fromUnitLength === 'miles' && toUnitLength === 'inches') {
    result1 = numberInputLength * inchesInMile;
  } else if (fromUnitLength === 'miles' && toUnitLength === 'feet') {
    result1 = numberInputLength * feetInMile;
  } else if (fromUnitLength === 'miles' && toUnitLength === 'yards') {
    result1 = numberInputLength * yardsInMile;
  } else {
    result1 = numberInputLength; // If the units are the same, return the input value
  }

  // Updates the output with the length result
  const output1 = document.getElementById('output1');
  output1.innerText = `${numberInputLength} ${fromUnitLength} is equal to ${parseFloat(result1).toFixed(2)} ${toUnitLength}`;
});

// Event listener to the convert button for the LENGTH section
document.getElementById('convert-btn-length').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent form from submitting and reloading page

  // Simulate form submission by triggering a submit event on the form
  document.querySelector('#length-form').dispatchEvent(new Event('submit'));
});



// Add an event listener to the SPEED form submission
document.querySelector('#speed-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting and reloading page END OF LENGTH

// Get the values from the form inputs for the SPEED section
  const numberInputSpeed = document.getElementById('number-input-speed').value;
  const fromUnitSpeed = document.getElementById('from-unit-speed').value;
  const toUnitSpeed = document.getElementById('to-unit-speed').value;
  const milePerHourInKilo = 1.60934;
  let result2 = 0;

// Perform the conversion based on the selected units
  if(fromUnitSpeed === 'Miles Per Hour' && toUnitSpeed === 'Kilometers Per Hour') {
    result2 = numberInputSpeed * milePerHourInKilo;
  } else if (fromUnitSpeed === 'Kilometers Per Hour' && toUnitSpeed === 'Miles Per Hour') {
    result2 = numberInputSpeed / milePerHourInKilo;
  } else {
    result2 = numberInputSpeed;
  }
// Updates the output with the SPEED result
  const output2 = document.getElementById('output2');
  output2.innerText = `${numberInputSpeed} ${fromUnitSpeed} is equal to ${parseFloat(result2).toFixed(2)} ${toUnitSpeed}`;
});

// Event listener to the convert button for the SPEED section
document.getElementById('convert-btn-speed').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent form from submitting and reloading page

  // Simulate form submission by triggering a submit event on the form
  document.querySelector('#speed-form').dispatchEvent(new Event('submit'));
}); // END OF SPEED

// Start of TIME section
document.querySelector('#time-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting and reloading page END OF LENGTH

// Get the values from the form inputs for the SPEED section
  const numberInputTime = document.getElementById('number-input-time').value;
  const fromUnitTime = document.getElementById('from-unit-time').value;
  const toUnitTime = document.getElementById('to-unit-time').value;
  // Conversion constants
  const secondsInMinute = 60;
  const secondsInHour = 3600;
  const secondsInDay = 86400;
  const minutesInHour = 60;
  const minutesInDay = 1440;
  const hoursInDay = 24;
  // Result initialization
  let result3 = 0;

  if (fromUnitTime === 'seconds' && toUnitTime === 'minutes') {
    result3 = numberInputTime / secondsInMinute;
  } else if (fromUnitTime === 'seconds' && toUnitTime === 'hours') {
    result3 = numberInputTime / secondsInHour;
  } else if (fromUnitTime === 'seconds' && toUnitTime === 'days') {
    result3 = numberInputTime / secondsInDay;
  } else if (fromUnitTime === 'minutes' && toUnitTime === 'seconds') {
    result3 = numberInputTime * secondsInMinute;
  } else if (fromUnitTime === 'minutes' && toUnitTime === 'hours') {
    result3 = numberInputTime / minutesInHour;
  } else if (fromUnitTime === 'minutes' && toUnitTime === 'days') {
    result3 = numberInputTime / minutesInDay;
  } else if (fromUnitTime === 'hours' && toUnitTime === 'seconds') {
    result3 = numberInputTime * secondsInHour; 
  } else if (fromUnitTime === 'hours' && toUnitTime === 'minutes') {
    result3 = numberInputTime * minutesInHour; 
  } else if (fromUnitTime === 'hours' && toUnitTime === 'days') {
    result3 = numberInputTime / hoursInDay; 
  } else if (fromUnitTime === 'days' && toUnitTime === 'seconds') {
    result3 = numberInputTime * secondsInDay;
  } else if (fromUnitTime === 'days' && toUnitTime === 'minutes') {
    result3 = numberInputTime * minutesInDay;
  } else if (fromUnitTime === 'days' && toUnitTime === 'hours') {
    result3 = numberInputTime * hoursInDay;
  }
  else {
    result3 = numberInputTime;
  }



// Updates the output with the TIME result
const output3 = document.getElementById('output3');
output3.innerText = `${numberInputTime} ${fromUnitTime} is equal to ${parseFloat(result3).toFixed(2)} ${toUnitTime}`;
});

// Event listener to the convert button for the TIME section
document.getElementById('convert-btn-time').addEventListener('click', function(event) {
event.preventDefault(); // Prevent form from submitting and reloading page

// Simulate form submission by triggering a submit event on the form
document.querySelector('#time-form').dispatchEvent(new Event('submit'));
}); // END OF TIME