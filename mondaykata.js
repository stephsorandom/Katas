You will have to create a function which takes in a sequence of numbers in random order and you will have to return the correct base of those numbers.

The base is the number of unique digits. For example, a base 10 number can have 10 unique digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 and a base 2 number (Binary) can have 2 unique digits: 0 and 1.

Constraints
The sequence will always be 10 numbers long and we know that the base is going to be between 2 and 10 inclusive so no need to worry about any letters. When sorted, the sequence is made up of consecutive numbers.

Examples
[ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10" ]     -->  10
[ "1", "2", "3", "4", "5", "6", "10", "11", "12", "13" ]  -->   7


//bobby
function baseFinder(seq){
    let arr = [];
    let baseArr=[];
    arr = seq.map((x)=> x.split(''));
      for (let i = 0; i < arr.length;i++)
        {
          for (let j = 0; j < arr[i].length; j++)
            {
                if(!baseArr.includes(arr[i][j]))
                  {
                    baseArr.push(arr[i][j])
                  }
              }
        }
    return baseArr.length
  }

//xavier
  baseFinder = (a) => Math.max(...a.map(x => x.slice(-1) < 10 ? x.slice(-1) : 0)) + 1