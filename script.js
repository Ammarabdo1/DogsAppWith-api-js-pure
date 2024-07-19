// https://dog.ceo/api/breeds/image/random

//* staff you don't have to wait for
// console.log('First')

const dogImageDiv = document.getElementById('dogImg')
const getNewDog = document.getElementById('GetNewDog')

//* staff you have to wait for
getNewDog.onclick = () => {

        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(json => {
            dogImageDiv.innerHTML = `<img src='${json.message}' height=300 width=300> `
        })    

}


console.log("Third")