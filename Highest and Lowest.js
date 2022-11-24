/* In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
 */

function highAndLow(numbers){
    let i = 0
    let p = []
    console.log(numbers)
    for (let index = 0; index < numbers.length; index++) {
         while (numbers.charAt(index) !== " " && index < numbers.length){
            if(p[i] == null){ 
                p[i] = numbers.charAt(index)
            }
            else{
                p[i] = p[i] + numbers.charAt(index)
            }
            index++
        }
        if (numbers.charAt(index) === " ")
        {
            i++
        }
        
    }
    console.log(p)
    
    let min = p[0]
    let max = p[0]
    
    for (let index = 0; index < p.length; index++) {
        if (Number(min) > Number(p[index])){
            min = Number(p[index])
        }
        if(Number(max) < Number(p[index]))
        {
            max = Number(p[index])
        }
    }
    return (`${max} ${min}`)
    
    }