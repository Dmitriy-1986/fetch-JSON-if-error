'use strict';

const container = document.querySelector('.container');

fetch('https://dmitriy-1986.github.io/working-with-JSON/api.json')
    .then(responseText => responseText.json())
    .then(data => {
        const donotProperty = '<i style="color: red;">Вызываемое свойство отсутствует!</i>';

        if (!data.webApp["title"]) {
            container.innerHTML += donotProperty;
        } else {
            container.innerHTML += `<h1>${data.webApp["title"]}</h1>`;
        }  
        if (!data.webApp["img"]) {
            container.innerHTML += donotProperty;
        } else {
            container.innerHTML +=  `<img src="${data.webApp["img"]}"><br>`;
        } 
        if (!data.webApp["uri"]) {
            container.innerHTML += donotProperty;
        } else {
            container.innerHTML +=  `<a href="${data.webApp["uri"]}">${data.webApp["uri"]}</a><br>`;
        }     
        if (!data.webApp["description"]) {
            container.innerHTML += donotProperty;
        } else {
            container.innerHTML += `<p>${data.webApp["description"]}</p>`;
        } 
        if (!data.webApp["forms"]) {
            container.innerHTML += donotProperty;
        } else {
            container.innerHTML += `<p>${data.webApp["forms"]}</p>`; 
        }          
        
        container.innerHTML += `<p>Standards:</p>`;   
        const ul = document.createElement('ul');
        container.append(ul);
        const standard = data.webApp["standards"];
        standard.forEach(e => {
            let li = document.createElement('li');
            li.innerHTML += `${e.name} - ${e.year}`;
            ul.append(li);
        });
    })
    .catch(e => container.innerHTML += `<p style="color: red;">${e}</p>`)
    .finally(() => {
        console.log('finally');
    })

