let a = parseInt(prompt('Enter first number'));
let operator = prompt('Enter opertor (+,*,/, or - )');
let b = parseInt(prompt('Enter Second number'));

let result = 0
if (isNaN(a) || isNaN(b)) {
  alert('Invalid input,Refresh page and provide correct details');
} else {
  if (operator == '+') {
    result = a + b
  } else if (operator == '*') {
    result = a * b
  } else if (operator == '/') {
    result = a / b
  } else if (operator == '-') {
    result = a - b
  }
  alert(a + operator + b + '=' + result);
}
