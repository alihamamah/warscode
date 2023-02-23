/* 
kata lvl: 6
Task:
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)

*/
function findUniq(arr) {
  l = arr.length
  console.log(arr)
  if (l <2)
    {
      return false
    }
  let i = 0
  while( i < l)
    {
      if(i+2 < l)
        {
          let first = arr[i]
          let second = arr[i+1]
          let third = arr[i+2]
          if(first !== second && second === third) return first
          if(first !== second && second !== third) return second
          if(first === second && second !== third) return third
           
        }
      i = i+1
    }

}