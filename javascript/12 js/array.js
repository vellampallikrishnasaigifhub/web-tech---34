//pop(),push,unshift,shift,reverse,,indexof,lastindex,call,spilt,slit,appy,foreach,map,redue,filter,find() in array.
let eids = [101, 102, 103, 104, 105, 106]
console.log(eids.length)
console.log(eids)
console.log(eids.push(107), 'push')
//it add the element in array.
console.log(eids)
console.log(eids.pop(), 'pop')
//it removes the element in array.
console.log(eids)
console.log(eids.shift(), "shift")
//it removes the first plase of the element in array.
console.log(eids)
console.log(eids.unshift(100), 'unshift')
//it add the first plase of the element in array.
console.log(eids)
console.log(eids.reverse(), 'reverse')
//it reverse the all elementsi n array.
console.log(eids.indexOf(4), 'indexof')
//it finds the index in array & if element or value is not found in array then output is -1.
console.log(eids.indexOf(104), 'indexof')
//it finds the index in array & if element or value is not found in array then output is -1.
console.log(eids.lastIndexOf(104), 'lastindexof')
//Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present
let b = eids.slice(2, 4)
//it slice in like python.
console.log(b)
console.log(eids.concat("108"))
//it add the element in the array without any modification of oiginal element. 
console.log(eids)
console.log(eids.join('*'))
//it join the all element into one string.
