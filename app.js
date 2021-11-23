//Login button event handler
document.getElementById('login').addEventListener('click', function() {
    const logInArea = document.getElementById('login-area');
    logInArea.style.display = "none";
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = "block";
});

//Deposit button event handler
document.getElementById('addDeposit').addEventListener('click', function() {
    const depositAmount = document.getElementById('depositAmount').value;
    const depositNumber = parseFloat(depositAmount);
    
    balanceUpdate('currentDeposit', depositNumber);
    balanceUpdate('currentBalance', depositNumber);

    document.getElementById('depositAmount').value = "";

});

function balanceUpdate(id, depositNumber){
    const currentBalance = document.getElementById(id).innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = currentBalanceNumber + depositNumber;
    document.getElementById(id).innerText = totalBalance;
}