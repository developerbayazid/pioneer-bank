//Login button event handler
document.getElementById('login').addEventListener('click', function() {
    const logInArea = document.getElementById('login-area');
    logInArea.style.display = "none";
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = "block";
});

//Deposit button event handler
document.getElementById('addDeposit').addEventListener('click', function() {
    const depositNumber = getInputValue('depositAmount');
    
    balanceUpdate('currentDeposit', depositNumber);
    balanceUpdate('currentBalance', depositNumber);
    document.getElementById('depositAmount').value = "";

});

//Withdraw button event handler
document.getElementById('addWithdraw').addEventListener('click', function() {
    const withdrawNumber = getInputValue('withdrawAmount');
    balanceUpdate('currentWithdraw', withdrawNumber);
    balanceUpdate('currentBalance', -1 * withdrawNumber);


    document.getElementById('withdrawAmount').value = "";
});

//Functions
function getInputValue(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}
function balanceUpdate(id, number){
    const currentBalance = document.getElementById(id).innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = currentBalanceNumber + number;
    document.getElementById(id).innerText = totalBalance;
}