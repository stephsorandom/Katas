//Hey awesome programmer!

//You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

//Therefore you need a method, which returns the smallest unused ID for your next new data item...

//Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

//Go on and code some pure awesomeness!


// method that returns the smalled UNUSED id
// loop through array..find smallest id....

function nextId(ids){
  let filteredArr = ids.filter(elm => {
    return ids.indexOf(elm) === ids.lastIndexOf(elm)
  })
  let uniqueArr = ids.filter(elm => {
    return ids.indexOf(elm) != ids.lastIndexOf(elm)
  })
  for (id of uniqueArr) {
    if (filteredArr.includes(id)) {
      
    } else {
      filteredArr.push(id)
    }
  }
  let sortedArr = filteredArr.sort((a, b) => a - b)
//Haha maybe include 
  for (let i = 0; i <= sortedArr.length; i++) {
    if (sortedArr[i] != i) {
      return i
    }
  }
}


//using SOME function..pretty sweet!!
function nextId(ids){
  
  for (let i=0; i <= ids.length; i++)  {//loops through 'ids' and sees if 0 is there = true, 1 is there = true,....4 is there = false...
  if(!ids.some((element) => element === i)) {//some() checks to see ifthere is some of that thing in the array IT COMPARES true or false 
    return i//returns 4!! Or first unused number
    }
  }
}

//includes function
function nextId(ids){
  let i = 0//starts at 0
  while(ids.includes(i)) i++//if the array includes 0, it returns 0..if it includes 4 (it doesn't) it will not return 4!
  return i
}


//using objects to solve
function nextId(ids) {
  const seen = {}
  let highest = -1
  for (let id of ids) {
    highest =  Math.max(id, highest)
    seen[id] = true
  }
  
  for (let i=0; i <= highest + 1; i++) {
    if (!seen[i]) {
      return i
    }
  }
}