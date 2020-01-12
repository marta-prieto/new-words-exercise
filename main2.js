/* function haveSameLetters(sacasa, casaca) {


  param1_to_array = param1.to_array
  param2_to_array = param2.to_array
   */
  /* return (
getNewWords.map(name=> name.includes('sa'))
) */ 
/* const arrayWords = [
  'sacasa',
  'casaca'
];
arrayWords.forEach(myFunction);

function myFunction(index) {
   document.getElementById('word').innerHTML= { 
    return(
  .map( name=> name.includes(index[0])) = index[0]
    )
  
 




    
 /*  param1_to_array.each do |letter|
      if !param2_to_array.includes?(letter)
          return false
      else
         param2_to_array.remove('letter')
      end
  end
  
  if param2_to_array.empty?
     return true
  else
     return false
  end  */



/*   if (haveSameLetters(casaca, sacasa)) {
    console.log('true');
  } else 
  console.log('false'); */
/* } */












/* def haveSameLetters (param1, param2)
      //Aquí dentro irá el código
ene


Entonces desde la consola luego llamaremos a la función de alguna manera parecida a esta:

haveSameLetters('casaca', 'sacasa')

Y nos devolverá false

O
haveSameLetters('casa', 'saca')
Y nos devolverá true

Para el código que va dentro de la función, cogeremos el param1 y param2 y los convertiremos en array.

A continuación recorremos cada elemento (letra) del param1_to_array y buscaremos en el param2_to_array si está esta letra.
En caso afirmativo quitamos la letra del param2_to_array y continuamos la iteración de letras en el param1_to_array.

En caso negativo ya devolvemos false.

En los casos positivos cuando hayamos recorrido todas las letras del param1_to_array comprobaremos si el param2_to_array está vacío. En caso afirmativo (hemos ido quitando todas las letras del param2_to_array) son la misma palabra desordenada y devolveremos true.
En caso negativo no serán la misma palabra y devolvemos false.

En pseudocódigo:

param1_to_array = param1.to_array
param2_to_array = param2.to_array

param1_to_array.each do |letter|
    if !param2_to_array.includes?(letter)
        return false
    else
       param2_to_array.remove('letter')
    end
end

if param2_to_array.empty?
   return true
else
   return false
end */