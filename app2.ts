function getTotal(number:Array<number>){
    return number.reduce((acc,item)=>{
            return acc+item
    },0)
}

console.log(getTotal([1,8,6,4]))