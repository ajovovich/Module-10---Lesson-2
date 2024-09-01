//Task 1: Create a Deposit Function

let balance = 0;

function deposit(amount) {
    if (amount > 0) {
        balance += amount;
        console.log(`Deposited: $${amount.toFixed(2)}`);
    } else {
        console.log("Deposit amount must be positive.");
    }
}

//Task 2: Implement a Withdrawal Function

function withdraw(amount) {
    if (amount > 0) {
        if (amount <= balance) {
            balance -= amount;
            console.log(`Withdrew: $${amount.toFixed(2)}`);
        } else {
            console.log("Insufficient balance for this withdrawal.");
        }
    } else {
        console.log("Withdrawal amount must be positive.");
    }
}

//Task 3: Develop a Balance Inquiry Function

function checkBalance() {
    console.log(`Current Balance: $${balance.toFixed(2)}`);
}

//Usages

deposit(100);     // Deposits $100
withdraw(30);     // Withdraws $30
checkBalance();   // Displays current balance
withdraw(80);     // Attempts to withdraw $80 (expecting an insufficient balance message)
checkBalance();   // Displays current balance