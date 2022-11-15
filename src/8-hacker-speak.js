export const hackerSpeak = (words) => {
  return words.split("").map((letter) => letter === 'a' || letter === 'A' ? letter = 4 : letter === 'e' || letter === 'E' ? letter = 3 : letter === 'o' || letter === 'O' ? letter = 0 : letter === 'i' || letter === 'I' ? letter = 1 : letter === 's' || letter === 'S' ? letter = 5 :  letter ).join('')
}
