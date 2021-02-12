// Write a function that takes 1 number (1-100) and returns the smallest combination of coins that equal that number
// for example exactChange(77)
// would return [25, 25, 25, 1, 1]
// so 25 cents, another 25 cents, another 25 cents, 1 penny and 1 penny
// exactChange(12) would return [10, 1, 1]
// 10 cents, 1 penny, 1 penny
// if u return [5, 5, 1, 1] that would be incorrect because [10, 1, 1] uses fewer coins



function exactChange(cents){
    let x = cents
    let o = x % 5
    let f = 0
    let t = 0
    let q = 0
    x -= o
    while(x>=25){x -= 25; q++}
    while(x>=10){x -= 10; t++}
    while(x>=5){x -= 5; f++}
    return getResults(q,t,f,o)
  }
  
  function getResults(q,t,f,o){
    let str = ""
    if (q){for(i=0;i<q;i++){str += " 25"}}
    if (t){for(i=0;i<t;i++){str += " 10"}}
    if (f){for(i=0;i<f;i++){str += " 5"}}
    if (o){for(i=0;i<o;i++){str += " 1"}}
    return str.slice(1)
  }



  function coinsToReturn(TotalCHangeToBeReturned){

    let coins =[25,10,5,1];
    i = 0;
    let corectChange =[]
    
          while(TotalCHangeToBeReturned > 0){
                if(coins[i] > TotalCHangeToBeReturned){
                  i = i+1
                }else{
                  corectChange.push(coins[i])
                  
                  TotalCHangeToBeReturned = TotalCHangeToBeReturned//coins[i]
              }
    
          }
    
      return corectChange
    }
    
    coinsToReturn(77);



    function exactChange (money) {
        let arr=[]
      
        while (money >=.25) {arr.push(25); money -= .25}
        while (money >=.10) {arr.push(10); money -= .10}
        while (money >=.05) {arr.push(5); money-= .05}  
        while (money >=.01) {arr.push(1); money -= .01}
      
        return arr;
      }


      //Reduce method
      function exactChange(q) {
        let changeArr = [];
      
        while (q > changeArr.reduce((a, b) => a + b, 0)) {
          if (q - changeArr.reduce((a, b) => a + b, 0) >= 25) {
            changeArr.push(25);
          } else if (q - changeArr.reduce((a, b) => a + b, 0) >= 10) {
            changeArr.push(10);
          } else if (q - changeArr.reduce((a, b) => a + b, 0) >= 5) {
            changeArr.push(5);
          } else if (q - changeArr.reduce((a, b) => a + b, 0) >= 1) {
            changeArr.push(1);
          }
        }
      
        console.log(changeArr)
        return changeArr
      }

      //Bobbie answer...just loops and Math.floor. much easier to understand
      function exactChange(number) {
        let quarters = 0;//let the denominations == 0
        let dimes = 0;
        let nickels = 0;
        let pennies = 0;
        if (number >= 25) {// these looops, if the requested amount goes in, it uses Modulos to divide it and find remainder...then goes down the list
          quarters = Math.floor(number / 25);
          number = number % 25;
        }
        if (number >= 10) {
          dimes = Math.floor(number / 10);
          number = number % 10;
        }
        if (number >= 5) {
          nickels = Math.floor(number / 5);
          number = number % 5;
        }
        pennies = number;
        let realAnswer = [];
        console.log(quarters, dimes, nickels, pennies);
        let totalCoins = quarters + dimes + nickels + pennies;
        for (let i = 0; i < totalCoins; i++) {
          if (quarters > 0) {
            realAnswer.push(25);
            quarters--;
          } else if (dimes > 0) {
            realAnswer.push(10);
            dimes--;
          } else if (nickels > 0) {
            realAnswer.push(5);
            nickels--;
          } else {
            realAnswer.push(1);
            pennies--;
          }
        }
        // let changeArr = [
        //   ` ${quarters} quarters`,
        //   ` ${dimes} dime(s)`,
        //   ` ${nickels} nickel(s)`,
        //   ` ${pennies} pennie(s)`,
        // ];
        let result = realAnswer;
        return result;
      }