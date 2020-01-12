const arrayWords = [
    'sacasa',
    'casaca',
];
arrayWords.forEach(myFunction);

function myFunction(item, index) {
    document.getElementById('word').innerHTML += index + item;    
    const getWords = arrayWords.map(word => word.includes(index[0,1,2,3,4,5]))
    console.log(arrayWords);
    if ((getWords.indexOf[0]) !== 's') {
        console.log('false');
    }else if (getWords.remove(index[0])) {
        console.log('')
    }else (getWords === '')
       console.log('false')
}
