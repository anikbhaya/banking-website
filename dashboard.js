// Calculate User Input
function getUserInputValue(inputId){
    const  userInputText = document.getElementById(inputId);
    let  userInputAmount = parseFloat(userInputText.value);

      userInputText.value = '';
      return userInputAmount;
}

// User Action Calculation
function userActionTotalField(userAction, userInputAmount){
    const  previousActionText = document.getElementById(userAction);
    const  previousActionAmount = parseFloat(previousActionText.innerText);

    const userActionTotal = previousActionAmount + userInputAmount;
    previousActionText.innerText = userActionTotal;
}

// Total Balance Calculation
function updateTotalBalance(userInputAmount, isAdd){
    const  totalBalanceText = document.getElementById('accountBalance');
    const  previousBalanceAmount = parseFloat(totalBalanceText.innerText);
    if(isAdd == true){
      totalBalanceText.innerText = previousBalanceAmount + userInputAmount;
    }else{
      totalBalanceText.innerText = previousBalanceAmount - userInputAmount;
    }
}

// Account History
function accounthistory(action, userInputAmount, actionColor){
    const tableBody = document.getElementById('tableBody');
    const tableRow = document.createElement('tr');
    tableRow.classList.add(actionColor);
    tableBody.prepend(tableRow)
    const tableHeader = document.createElement('th')
    tableRow.append(tableHeader);
    tableHeader.innerText = historyCount;
    historyCount += 1

    const tableData1 = document.createElement('td')
    tableRow.append(tableData1);
    tableData1.innerText = action;
    const tableData2 = document.createElement('td')
    tableRow.append(tableData2);
    tableData2.innerText = userInputAmount;
}


let historyCount = 0; 

document.getElementById('submitDiposit').addEventListener('click', function(){
    const userInputAmount = getUserInputValue('dipositAmount') // Get User Input
    if(userInputAmount > 0){
        userActionTotalField('deposit', userInputAmount) // User Action
        updateTotalBalance(userInputAmount, true); //   Total Balance

        accounthistory("Deposit", userInputAmount, "table-success"); // Account History
    }
    
})

document.getElementById('submitwithdraw').addEventListener('click', function(){
    const userInputAmount = getUserInputValue('withdrawAmount') // Get User Input
    if(userInputAmount > 0){
        userActionTotalField('withdraw', userInputAmount) // User Action
        updateTotalBalance(userInputAmount, false); //   Total Balance

        accounthistory("Withdraw", userInputAmount, "table-danger"); // Account History
    }
})