var nota = [5, 7, 10, 3] ;

var teste = [5, 7, 10, 3, 10, 10, 9.9] ;

function getMedia(notas){
    let media = 0 ;
    for(let i = 0; i < notas.length; i++ ){
        media += notas[i];
        console.log(`Nota ${i +1} =`, notas[i]) ;
        console.log('Totalizador de notas ->',media) ;
    }
    media = media / notas.length ;
    return media ;
}

console.log('Media Final :',getMedia(teste));