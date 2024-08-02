const apiUrl = './travel_recommendations_api.json';
const searchBtn = document.getElementById('searchBtn');
const clearBtn = document.getElementById('clearBtn');
const outputParentContainer = document.querySelector('.right-container');

function createOtherOutput(data, parentElement){
    //Create numbers of elements based on provided data's length and insert them back to parentElement.
    //Only valid for values except countries.
    const length = data.length;
    for(let i = 0; i < length; i++){
        let newElement = document.createElement('div');
        newElement.classList.add('result');
        newElement.innerHTML = `
        <img src=${data[i]['imageUrl']}>
        <h1>${data[i]['name']}</h1>
        <p>${data[i]['description']}</p>
        <button>Book Now</button>
        `
        parentElement.appendChild(newElement);
    }
}

function createOutput(data, parentElement){
    //Create numbers of elements based on provided data's length and insert them back to parentElement.
    //Only valid for countries.
    const numCountries = data.length;
    for(let i = 0; i < numCountries; i++){
        const cities = data[i]['cities'];
        for(let j = 0; j < cities.length; j++){
            console.log(cities[j]['name']);
            let newElement = document.createElement('div');
            newElement.classList.add('result');
            newElement.innerHTML = `
            <img src=${cities[j]['imageUrl']}>
            <h1>${cities[j]['name']}</h1>
            <p>${cities[j]['description']}</p>
            <button>Book Now</button>
            `
            parentElement.appendChild(newElement);
        }
    }
}

searchBtn.addEventListener('click', function(){
    outputParentContainer.innerHTML = ``;
    const keyword = document.getElementById('inputKeyword').value.toLowerCase();
    fetch(apiUrl)
    .then((response) => {
        const data = response.json();
        return data;
    })
    .then((data) => {
        if(keyword === 'beaches'){
            const result = data[keyword];
            createOtherOutput(result, outputParentContainer);
        }
        else if(keyword === 'countries'){
            createOutput(data['countries'], outputParentContainer);
        }
        else if(keyword === 'temples'){
            const result = data[keyword];
            createOtherOutput(result, outputParentContainer);
        }
    })
    .catch(error => console.error(error));
});

clearBtn.addEventListener('click', function(){
    outputParentContainer.innerHTML = ``;
});