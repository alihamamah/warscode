/* Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81 and 1^2 is 1.

Note: The function accepts an integer and returns an integer */


function squareDigits(num){
    let numStr = num.toString()
    let p = []
   
    for (let index = 0; index < numStr.length; index++) {
        p.push(Number(numStr.charAt(index))**2);
    }
    
    output= ""
    for (let index = 0; index < p.length; index++) {
        output = output + p[index]
    }
    output = Number(output)
    return output;
}