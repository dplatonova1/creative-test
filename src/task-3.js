
  // 3. Найти самую длинную общую последовательность 2х строк.
  // Например:
  
  // Строка А "aababba"
  // Строка Б "abbaabcd"
  // Результат "abba"
  
  // Оформить так, чтобы выводить в консоль входых данных и результата
  
  function longestSub(str1, str2) {
    let arr1= str1.split('');
    let arr2= str2.split('');
  
    const substrMatrix = Array(arr2.length+1).fill(null).map(()=>{
      return Array(arr1.length+1).fill(null)
    })
  
    for (let colIndex = 0; colIndex<=arr1.length; colIndex++){
      substrMatrix[0][colIndex] = 0
    }
  
    for (let rowIndex = 0; rowIndex<=arr2.length; rowIndex++){
      substrMatrix[rowIndex][0] = 0
    }
  
    let longestSubstrLength = 0;
    let longestSubstrColumn = 0;
    let longestSubstrRow = 0;
  
    for (let rowIndex = 1; rowIndex<=arr2.length; rowIndex++){
      for (let colIndex = 1; colIndex<=arr1.length; colIndex++){
        if(arr1[colIndex-1]===arr2[rowIndex-1]){
          substrMatrix[rowIndex][colIndex] = substrMatrix[rowIndex-1][colIndex-1] + 1
        } else {
          substrMatrix[rowIndex][colIndex]
        }
        if(substrMatrix[rowIndex][colIndex]> longestSubstrLength){
          longestSubstrLength = substrMatrix[rowIndex][colIndex];
          longestSubstrRow = rowIndex;
          longestSubstrColumn = colIndex;
        }
      }
    }
  
    if(longestSubstrLength===0){
      return ''
    }
  
    let longestSubStr = '';
  
    while (substrMatrix[longestSubstrRow][longestSubstrColumn]>0){
      longestSubStr = arr1[longestSubstrColumn-1]+longestSubStr;
      longestSubstrRow --;
      longestSubstrColumn --;
    }
  
    console.log(`Строка А "${str1}"
  Строка Б "${str2}"
  Результат "${longestSubStr}"
    `);
  }
  
  longestSub('aababba', 'abbaabcd')