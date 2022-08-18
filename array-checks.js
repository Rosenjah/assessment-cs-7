// 1) Sum Zero
function addToZero(arrInput) {
  if (arrInput.length > 2) {
    for (let i = 0; i < arrInput.length; i++) {
      for (let j = i + 1; j < arrInput.length; j++) {
        if (arrInput[i] + arrInput[j] === 0) {
          return true
        }
      }
    }
  }
  return false
}

// 2) Unique Characters
function hasUniqueChars(wordsString) {
  let chars = []

  for (let i = 0; i < wordsString.length; i++) {
    if (chars[wordsString[i]]) {
      return false
    } else {
      chars[wordsString[i]] = 1
    }
  }

  return true
}

// 4) Longest Word
function isLongestWord(arr) {
  arr.sort((a, b) => b.length - a.length)

  return arr[0].length
}
