You've been collecting change all day, and it's starting to pile up in your pocket, but you're too lazy to see how much you've found.
Good thing you can code!

Create change_count() to return a dollar amount of how much change you have!
Valid types of change include:

penny: 0.01
nickel: 0.05
dime: 0.10
quarter: 0.25
dollar: 1.00
These amounts are already preloaded as floats into the CHANGE object for you to use!
You should return the total in the format $x.xx.


// SOULTION 1
function changeCount( change ){
    let arr = change.split(" ")
    let total = 0
    for(i = 0; i < arr.length; i++) {
      total += CHANGE[arr[i]]
    }
    return "$" + total.toFixed(2)
}


  //SOLUTION2
function changeCount(change) {
    let makeArr = change.split(" ")
    let numberValues = makeArr.map(element => CHANGE[element])
    let sumVal = numbersValues.reduce((acc, val) => acc + val, 0)
    let result = `$${sumVal.toFixed(2)}`
    return result
}
