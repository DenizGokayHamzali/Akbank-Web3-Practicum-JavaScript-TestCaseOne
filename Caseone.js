function OddishorEvenish(num) {
    let strnum = num.toString()
    let arr = strnum.split('')
    let intarr = []
    let sum = 0

    for (let i = 0; i < arr.length; i++) {
        intarr.push(parseInt(arr[i]))
        
    }

    for (let i = 0; i < intarr.length; i++) {
        sum += intarr [i]
    }

    return sum % 2 == 0 ? "Evenish" : "Oddish"

}

console.log(OddishorEvenish(1984))
console.log(OddishorEvenish(1965))