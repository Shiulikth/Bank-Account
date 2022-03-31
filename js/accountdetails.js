//add handler to deposit button
document.getElementById("deposit-btn").addEventListener("click",function(){
   const depositInput = document.getElementById("deposit-input");
  
   const newDepositAmount = 
   depositInput.value;

   const depositTotal = document.getElementById("deposit-total");
  
   const existingDepositAmount = depositTotal.innerText;

  
   const totalDepositAmount = parseFloat(newDepositAmount) + parseFloat(existingDepositAmount);
   
   depositTotal.innerText = totalDepositAmount;

   depositInput.value = "";
})


//add handler to withdraw button

document.getElementById ("withdraw-btn").addEventListener("click",function(){
    const withdrawInput = document.getElementById("withdraw-amount");

    const newWithdrawAmount = withdrawInput.value;

    console.log (newWithdrawAmount);

    const withdrawTotal = document.getElementById ("withdraw-total");

    const existingWithdrawAmount = withdrawTotal.innerText;
    console.log (existingWithdrawAmount);


    const totalWithdrawAmount =  parseFloat(newWithdrawAmount)+ parseFloat(existingWithdrawAmount);

    withdrawTotal.innerText = totalWithdrawAmount;

    //Blance calculation

    const existingBlancedrawAmount = document.getElementById("blance-total");

    const totalAmount = existingBlancedrawAmount.innerText;

    const totalBlanceAfterWithdraw = parseFloat(totalAmount)- parseFloat(newWithdrawAmount);

    existingBlancedrawAmount.innerText= totalBlanceAfterWithdraw;

    


})