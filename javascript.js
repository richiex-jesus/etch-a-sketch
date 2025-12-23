let gridContainer = document.getElementById('grid-container');

for (i = 0; i < 256; i++) {
    console.log(i);
    let individualGrid = document.createElement('div');
    individualGrid.classList.add('gridDivs');
    individualGrid.setAttribute('style', 'display: flex; border: 1px solid black; height: 60px; width: 60px; box-sizing: border-box');
    gridContainer.appendChild(individualGrid);
}

let gridDiv = document.querySelector('.gridDivs')



