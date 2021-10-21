var vetor = [
    ["Lenon", "Grasi", "Thais"],
    ["Luiz", "Noeli", "Leo"],
    ["Didi", "Noá", "Teste"]
]

function findName(name, vetor){

    for(let i = 0; i < vetor.length; i++){

        var innerArrayLength = vetor[i].length ;

        for(let j = 0; j < innerArrayLength; j++){
      
            if(name === vetor[i][j]){
                return name;
            }
        }
    }
}
var nameT = 'Lenon';
console.log(findName(nameT,vetor));
