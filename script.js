const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const convertNumerals = (input) => {
  if (!input) {
    output.innerHTML = `Please enter a valid number`;
    output.innerHTML += `<br></br><img width="200px" height="200px" src="defeated-gladiator.jpg">`
    return;
  } if (input < 0) {
    output.innerHTML = `Please enter a number greater than or equal to 1`
    output.innerHTML += `<br></br><img width="200px" height="200px" src="defeated-gladiator.jpg">`
    return;
  } if (input >= 4000) {
    output.innerHTML = `Please enter a number less than or equal to 3999`;
    output.innerHTML += `<br></br><img width="200px" height="200px" src="defeated-gladiator.jpg">`
    return;
  } else {
    while (input > 0) {
        
      if (input >= 1000) {
        output.innerHTML += `M`;
        input -= 1000;
        continue;
      }
      if (input >= 900) {
        output.innerHTML += `CM`;
        input -= 900;
        continue;
      }
      if (input >= 500) {
        output.innerHTML += `D`;
        input -= 500;
        continue;
      }
      if (input >= 400) {
        output.innerHTML += `CD`;
        input -= 400;
        continue;
      }
      if (input >= 100) {
        output.innerHTML += `C`;
        input -= 100;
        continue;
      }
      if (input >= 90) {
        output.innerHTML += `XC`;
        input -= 90;
        continue;
      }
      if (input >= 50) {
        output.innerHTML += `L`;
        input -= 50;
        continue;
      }
      if (input >= 40) {
        output.innerHTML += `XL`;
        input -= 40;
        continue;
      }
      if (input >= 10) {
        output.innerHTML += `X`;
        input -= 10;
        continue;
      }
      if (input >= 9) {
        output.innerHTML += `IX`;
        input -= 9;
        continue;
      }
      if (input >= 5) {
        output.innerHTML += `V`;
        input -= 5;
        continue;
      }
      if (input >= 4) {
        output.innerHTML += `IV`;
        input -= 4;
        continue;
      }
      if (input >= 1) {
        output.innerHTML += `I`;
        input -= 1;
        continue;
      }
      
    }
    output.innerHTML += `<br></br><img width="200px" height="200px" src="female-gladiator.jpg">`
    return;
    };
};

convertBtn.addEventListener("click", () => {
  output.innerHTML = "";
  convertNumerals(numberInput.value);
    numberInput.value = "";
    
    return;
});
numberInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    output.innerHTML = "";
    convertNumerals(numberInput.value);
    numberInput.value = "";
    return;
}});
