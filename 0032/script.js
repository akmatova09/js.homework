let arr = [19, [28, 17, 29], [4, 42, [11, [9, 2]]]];
let arr2 =[];

function recursion(myArr, resultArr) {
    for (let i = 0; i < myArr.length; i++) {
      if (Array.isArray(myArr[i])) {
        recursion(myArr[i], resultArr)
      } else {
        resultArr.push(myArr[i])
      }
    }
    return resultArr
  }
  
  console.log(recursion(arr2, arr))
  
  