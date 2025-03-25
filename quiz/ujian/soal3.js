/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
    // you can only write your code here!
    let hewanA = [];
    let hewanC = [];
    let hewanK = [];
    let hewanU = [];

    for (let i = 0; i < animals.length; i++){
        let hewan = animals[i];

        if (hewan[0] === 'a'){
            hewanA.push(hewan);
        } if (hewan[0] === 'c'){
            hewanC.push(hewan);
        } if (hewan[0] === 'k'){
            hewanK.push(hewan);
        } if (hewan[0] === 'u') {
            hewanU.push(hewan);
        }
    }   
    return [hewanA, hewanC, hewanK, hewanU]
}
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]