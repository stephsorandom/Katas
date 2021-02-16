In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.

The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).

In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].

Task
Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

The Haskell version takes a list of directions with data Direction = North | East | West | South.
The Clojure version returns nil when the path is reduced to nothing.
The Rust version takes a slice of enum Direction {NORTH, SOUTH, EAST, WEST}.


function dirReduc(arr){
  let testArr = arr.map(direct => direct.toUpperCase());
  remover(testArr);
  remover(testArr);
  return testArr;
  }
function remover(arr2) {
 for (i=0; i<arr2.length-1; i++) {
    if (arr2[i] == "NORTH" && arr2[i+1] == "SOUTH") {
      arr2.splice(i, 2);
    } else if (arr2[i] == "SOUTH" && arr2[i+1] == "NORTH") { 
      arr2.splice(i, 2);
    } else if (arr2[i] == "EAST" && arr2[i+1] == "WEST") {
      arr2.splice(i, 2);
    } else if (arr2[i] == "WEST" && arr2[i+1] == "EAST") {
      arr2.splice(i, 2);
    }
    } return arr2;
  }


  const dirReduc = (arr) => {
    const dir = { NORTH: 'SOUTH', EAST: 'WEST', SOUTH: 'NORTH', WEST: 'EAST' }
    return arr.reduce(
      (actDir, curDir) => (
        dir[actDir.slice(-1)] === curDir ? actDir.pop() : actDir.push(curDir),
        actDir
      ),
      []
    )
  }

  function dirReduc(arr){
    let str = arr.join('-')
    let matched = false
    do {
        matched = false
        str = str.replace(/((NORTH-SOUTH|SOUTH-NORTH)|(EAST-WEST|WEST-EAST))/g, function(match) {
          matched = match 
          return ''
        }).replace(/--+/g, '-')
    } while(matched)
    return str.split('-').filter(x => x.length)
  }
