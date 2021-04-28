const header = document.querySelector('.header');
const sidebar = document.querySelector('.sidebar');
const leadItems = document.querySelector('.lead__items');
const leadItemsArray = Array.from(leadItems.children);
const switches = document.querySelector('.switches');
const switchItemsArray = Array.from(switches.children);

function hide(id){
  leadItemsArray[id].classList.toggle('hidden');
}

header.addEventListener("click", (event) => {
  if ((event.target.closest(".header__button")) || (event.target.closest("span"))) {
    sidebar.classList.toggle("hidden");
    let spans = Array.from(event.target.children);

    spans.forEach((el) => {
      if (sidebar.classList.contains("hidden")) {
        el.setAttribute("style", "transform: none; opacity: 1");
      } else {
        el.removeAttribute('style', 'transform: none; opacity: 1')
      }
    });
  }
});


switches.addEventListener('click', (event)=>{
  // if(event.target.parentNode.closest('.switch__item-all')){
  //   switchItemsArray.forEach(el=>el.closest('.switch__item').firstChild.nextSibling.children[0].checked='true')
  // }
  if(event.target.closest('.slider')){
    hide(switchItemsArray.indexOf(event.target.parentNode.parentNode))
  }
});

// 2. Сделать функцию сдвига элементов массива вправо на N шагов
// Например:

// Входной массив [1,2,3,4,5]
// К = 3
// Выходной массив [3,4,5,1,2]

// Условие: Не использовать вспомогательный массив
// Оформить так, чтобы выводить в консоль входых данных и результата

function shift(arr, k) {
    console.log(`Входной массив: [${arr}]
  k=${k}
  Выходной массив: [${arr.splice(-k).concat(arr)}]`);
  }
  
  shift([1,2,3,4,5], 3)
  
  
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