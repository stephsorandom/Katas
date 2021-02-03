Mumbling
Go through alphabet and capatilize each letter once,and add one extra letter each time
i.e: A, Bb, Ccc, Dddd, Eeeee


1. split & join
function accum(s) {
    var letters = s.split(''), words = [];

  for(var i = 0; i < letters.length; i++) {
    words.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
  }

  return words.join('-');
}



2. for loop
function accum(s) {
   
    let sResult= ''
    for (let i = 0 ; i<s.length; i++) {
        sResult += sArr[i].toUpperCase() + sArr[i].repeat().toLowerCase() + '-'
       }
       return sResult.slice(0, -1)
}


3.for loop2 
function accum(s) {
   
    let sResult= ''
    for (let i = 0 ; i<s.length; i++) {
        sResult += s[i].toUpperCase() + s[i].repeat(i).toLowerCase() + '-'
       }
       return sResult.slice(0, -1)
}