export const hashtags = (text) => {
  const hashtags = []
  text.split(' ').map((word)=> word[0] === '#' ? hashtags.push(word) : word)
  return hashtags
}
