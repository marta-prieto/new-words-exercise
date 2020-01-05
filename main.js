function words(casasa, casaca) {

  const newWord = casasa;
  const isWord = newWord === casasa; //true
  const secondWord = newWord === casaca; //false
  if (isWord === newWord) {
    return true;
  } else (secondWord !== newWord)
  return false;
}

function getWords(casasa, casaca) {
  const newWord = casasa;

  if (newWord === casasa) {
    return true;
  } else if (newWord !== casasa) {
    return false;
  } else (newWord === casaca)
  return false;
}
 

const words = ['casasa', 'casaca'];
const checkNewWord = words.map( name => name.includes('casasa') );

console.log(checkNewWord);