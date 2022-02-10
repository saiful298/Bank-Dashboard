// handle deposite button event
document.getElementById('deposit-button').addEventListener
    ('click', function () {
        //get the amount deposit
        const depositInput = document.getElementById('deposit-input');
        const newDepositAmount = depositInput.value;

        //update deposite total
        const depositTotal = document.getElementById('deposit-total');
        const previousDepositeAmount = depositTotal.innerText;
        const newDepositTotal = parseInt(previousDepositeAmount) + parseInt(newDepositAmount);
        depositTotal.innerText = newDepositTotal;

        //update account balance 
        const balanceTotal = document.getElementById('balance-total');
        const balanceTotalText = balanceTotal.innerText;
        const newBalanceTotal = parseInt(balanceTotalText) + parseInt(newDepositAmount);
        balanceTotal.innerText = newBalanceTotal;

        depositInput.value = '';
    });


/// handle withdraw button event
document.getElementById('withdraw-button').addEventListener
    ('click', function () {
        //get the amount withdraw
        const withdrawInput = document.getElementById('withdraw-input');
        const newWithdrawAmount = withdrawInput.value;

        //update Withdraw balance 
        const withdrawTotal = document.getElementById('withdraw-total');
        const withdrawTotalText = withdrawTotal.innerText;
        const newWithdrawTotal = parseInt(withdrawTotalText) + parseInt(newWithdrawAmount);
        withdrawTotal.innerText = newWithdrawTotal;


        //update account balance 
        const balanceTotal = document.getElementById('balance-total');
        const balanceTotalText = balanceTotal.innerText;
        const newBalanceTotal = parseInt(balanceTotalText) - parseInt(newWithdrawAmount);
        balanceTotal.innerText = newBalanceTotal;

        withdrawInput.value = '';
    });

