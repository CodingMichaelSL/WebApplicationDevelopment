// Mortgage repayment algorithm
// Establishing the function to calculate repayment for the mortgage
function calculateMortgagePayment(principal, loanTermInYears, annualInterestRate) {
    // Converting to monthly interest rate from annual rate
    const monthlyInterestRate = annualInterestRate / 12 / 100;
    
    // Calculating the number of payments for the loan term in months
    const numberOfPayments = loanTermInYears * 12;
    
    // Monthly payment calculation using the fixed-rate mortgage formula
    const monthlyPayment =
        (principal * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    
    return monthlyPayment;
}

// Enter values
const principalAmount = 500000;  // Total loan amount, known as the principal
const annualInterestRate = 5.5;  // Percentage rate of interest per annum
const loanTermInYears = 30;      // Loan term in years

// Calculation of the mortgage payment for the months
const monthlyPayment = calculateMortgagePayment(principalAmount, loanTermInYears, annualInterestRate);

console.log(`Loan Term: ${loanTermInYears} years`)
console.log(`Annual Interest Rate: ${annualInterestRate}%`);
console.log(`Principal: $${principalAmount}`);
console.log(`Monthly Mortgage Payment: $${monthlyPayment.toFixed(2)}`);
