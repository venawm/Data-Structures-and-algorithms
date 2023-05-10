function binarySearch(arr,e){
    let leftIndex = 0;
    let rightIndex = arr.length-1;
    
    while(leftIndex<=rightIndex){
        let middleIndex = Math.floor((leftIndex+rightIndex)/2)
        if(e === arr[middleIndex]){
            return middleIndex
        }
        if(e < arr[middleIndex]){
            rightIndex = middleIndex-1
        }
        else{
            leftIndex = middleIndex+1
        }
    }
    return -1

}

console.log(binarySearch([1,2,4,6,8,9],6))