const url = 'https://dog.ceo/api/breeds'

fetch (url + '/image/random/4') 
.then((response) => response.json())
.then((data) => renderDogs(data.message))

function renderDogs(dogs) {
    dogs.forEach(dog => {
        const dogImage = document.createElement('img');
        dogImage.src = dog;
        const dogImageContainer = document.querySelector('#dog-image-container');
        dogImageContainer.append(dogImage);
    })
}

fetch (url + '/list/all')
.then((response) => response.json())
.then((data) => renderBreeds(data.message))

function renderBreeds (breeds) {
    for (const key in breeds) {
        const breed = document.createElement('li');
        breed.textContent = (`${key}: ${breeds[key]}`);
        const breedContainer = document.querySelector('#dog-breeds');
        breedContainer.append(breed);

        breed.addEventListener('click' ,function(event){
            event.target.style.color = 'red';
        })
    }
}