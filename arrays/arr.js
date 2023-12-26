function multy(arr){
  let product = 1

  arr.forEach(num => product *= num)
  alert(product)
}

// multy([10,2,3])


function evenArr(arr) {
   arr = [ 2, 3, 4, 5]

  for (let i = 1; i < arr.length; i++){
    if (arr[i] % 2 === 0){
     console.log(i); 
    }
  }
}

evenArr([2,3,4,5,6])












// let myarray = [1,2,3,4]

// function compare(myarray){
//   if (myarray[0]< myarray[myarray.length-1]){
//     alert('Hi')
//   }else if (myarray[0]> myarray[myarray.length-1]){
//     alert('Bye')
//   }else if (myarray[0] === myarray[myarray.length-1]){
//     alert('We close in an hour')
//   }
// }

// let nums = [4, 3,5,6,7,22]
// compare(nums)