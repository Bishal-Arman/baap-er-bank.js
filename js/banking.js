document.getElementById('deposit-button').addEventListener('click',function(){
    const dipositInput=document.getElementById('deposit-input');
    const dipositAmmount=dipositInput.value;
    const dipositTotal=document.getElementById('deposit-ammount');
    const previousDeposit=dipositTotal.innerText;
    const newDepositTotal=parseFloat(previousDeposit)+parseFloat(dipositAmmount);
    dipositTotal.innerText=newDepositTotal;
    dipositInput.value='';


    const balanceTotal=document.getElementById('balance-total');
    const balanceTotalAmmount=balanceTotal.innerText;
    const newBalanceTotal=parseFloat(balanceTotalAmmount)+parseFloat(dipositAmmount);
    balanceTotal.innerText=newBalanceTotal;
    
})

//handle event halder for withdraw
document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawInput=document.getElementById('withdraw-input');
    const withdrawAmmount=withdrawInput.value;
    const withdrawTotal=document.getElementById('withdraw-total');
    
    const newWithdrawTotal= parseFloat( withdrawTotal.innerText)+parseFloat(withdrawAmmount);
    withdrawTotal.innerText=newWithdrawTotal;
    withdrawInput.value='';



      const balanceTotal=document.getElementById('balance-total');
      const balanceTotalAmmount=balanceTotal.innerText;
      const newBalance=parseFloat(balanceTotalAmmount)-parseFloat(withdrawAmmount);
      balanceTotal.innerText=newBalance;
})