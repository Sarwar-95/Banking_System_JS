document.getElementById('deposit-button').addEventListener('click',function(){
    
const depositInput = document.getElementById('deposit-input');
const depositAmountText=depositInput.value;
const depositAmount=parseFloat(depositAmountText);
   

//get current deposit
const depositTotal=document.getElementById('deposit-total');
const depositTotalText=depositTotal.innerText;
const previousDepositTotal=parseFloat(depositTotalText);
depositTotal.innerText = depositAmount+previousDepositTotal;

// total balance
const totalBalance =document.getElementById('balance-total');
const totalBalanceText=totalBalance.innerText;
const previousTotalBalance =parseFloat(totalBalanceText);
totalBalance.innerText=previousTotalBalance+depositAmount;

//clear input field
depositInput.value='';

})

// withdraw handler
document.getElementById('withdraw-button').addEventListener('click', function(){

    // withdraw input Filed
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText=withdrawInput.value;
    const withdrawAmount=parseFloat(withdrawInputText);

    //current withdraw balance
     const withdrawTotal=document.getElementById('withdraw-total');
     const withdrawTotalText=withdrawTotal.innerText;
     const previousWithdrawTotal=parseFloat(withdrawTotalText);
     withdrawTotal.innerText=withdrawAmount+previousWithdrawTotal;

    // total balance
    const totalBalance =document.getElementById('balance-total');
    const totalBalanceText=totalBalance.innerText;
    const previousTotalBalance =parseFloat(totalBalanceText);
    totalBalance.innerText=previousTotalBalance-withdrawAmount;

    //withdraw input field
     withdrawInput.value='';

})