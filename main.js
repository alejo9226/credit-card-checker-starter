// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [8, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

// Visa credit card numbers to validate
const number1 = '4916313205097696';
const number2 = '4929132657470085'
const number3 = '7720999238724205'

const batch1 = [number1, number2, number3];

// Add your functions below:

// Validate Credit Card number (array of numbers)
 const validateCred = array => {
    array = numberIntoArray(array);
    let contador = 1;
    let sumapar = 0;
    let sumatotal = 0;
    for (let i = array.length - 1; i >= 0; i--) {
        if (contador % 2 === 0) {
            if (array[i] * 2 > 9) {
                sumapar = sumapar + array[i] * 2 - 9;
            } else {
                sumapar = sumapar + array[i] * 2;
            }
        } else if (contador % 2 !== 0) {
            sumapar = sumapar + array[i];
        } contador++;
    } sumatotal = sumapar;
    if (sumatotal % 10 === 0) {
        return true;
    } else {
        return false;
    }
}; 

const invalidArray = [];

// Get the wrong numbers in an array of credit card numbers
const findInvalidCards = arrayOfArrays => {
  for (let i = 0; i < arrayOfArrays.length; i++) {
    if (!validateCred(arrayOfArrays[i])) {
        invalidArray.push(arrayOfArrays[i]);    
        }
  }
  return invalidArray;
};
// Returns the companies distinctly that issued the wrong numbers
const idInvalidCardCompanies = invalidArrayOfArrays => {
    let companies = [];
    let tres = 0;
    let cuatro = 0;
    let cinco = 0;
    let seis = 0;
    let siete = 0;
    for (let i = 0; i < invalidArrayOfArrays.length; i++) {
        if (invalidArrayOfArrays[i][0] === 3) {
            if (tres === 0) {
                companies.push('Amex');
            }
            tres++;
        }
        else if (invalidArrayOfArrays[i][0] === 4) {
            if (cuatro === 0) {
                companies.push('Visa');
            }
            cuatro++;
        }
        else if (invalidArrayOfArrays[i][0] === 5) {
            if (cinco === 0) {
                companies.push('Mastercard');
            }
            cinco++;
        }
        else if (invalidArrayOfArrays[i][0] === 6) {
            if (seis === 0) {
                companies.push('Discover');
            }
            seis++;
        } else {
            if (siete === 0) {
            companies.push('Company not found');
            }
            siete++;
        }
    }
    return companies;
};
// Convert a string of numbers into an array of numbers
const numberIntoArray = numero => {
    let arreglo = [];
    for (let i = 0; i < numero.length; i++) {
        arreglo.push(parseInt(numero[i]));
    }
    return arreglo;
}

console.log(validateCred(numberIntoArray('5178843674350226'))); // Validate the number between brackets

console.log(findInvalidCards(batch)); //Prints out an array with the wrong numbers

console.log(idInvalidCardCompanies(findInvalidCards(batch))); // Prints out the companies that issued the wrong numbers
