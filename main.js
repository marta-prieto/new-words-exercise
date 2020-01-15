function haveSameWords() {

    const array = [
        'casaca',
        'sacasa'
    ];
    
    const getWord = array.toString();
    console.log(getWord.includes('c', 'a', 's', 'a', 'c', 'a')); //true
    if (array === 'casaca' || 'sacasa') {
        console.log(true);
    }
        
    
}
haveSameWords();


/* console.log(haveSameWords(getWord.findIndex())); */


/* console.log(haveSameWords(array.findIndex(getWord))) */


const array = [
    'casaca', 
    'sacasa'
];

array.forEach(function(word) {

    console.log(word);
});


