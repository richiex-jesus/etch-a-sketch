let gridContainer = document.getElementById('grid-container');

for (i = 0; i < 256; i++) {
    let individualGrid = document.createElement('div');
    individualGrid.classList.add('gridDivs');
    individualGrid.setAttribute('style', 'display: flex; border: 1px solid black; height: 60px; width: 60px; box-sizing: border-box');
    gridContainer.appendChild(individualGrid);
}

let gridDivs = document.querySelectorAll(".gridDivs");

gridDivs.forEach(div => {
    div.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'green';
    })
})

let chooseButton = document.getElementById('new-grid');
chooseButton.addEventListener('click', (e) => {
    let input = prompt("Please put a number between 1 and 100.");
    if (input > 100) {
        alert("ERROR!");
    } else {
    gridContainer.replaceChildren();
    createGrid(input);
    newGridInteraction(chooseButton);
    }
})

function resetGrid() {
    let resetButton = document.getElementById('reset-grid');
    resetButton.addEventListener('click', () => {
        let gridDivs = document.querySelectorAll('.gridDivs');
        gridDivs.forEach(div => {
            div.style.backgroundColor = 'transparent';
        });
    })
}

resetGrid();

function createGrid(input) {
    for (i = 0; i < input ** 2; i++) {
        let individualGrid = document.createElement('div');
        individualGrid.classList.add('gridDivs');
        individualGrid.setAttribute('style', 'display: flex; border: 1px solid black; box-sizing: border-box');
        let length = 960 / input;
        individualGrid.style.height = `${length}px`;
        individualGrid.style.width = `${length}px`;
        gridContainer.appendChild(individualGrid)
    }
}

function newGridInteraction() {
    gridDivs.forEach(div => {
    div.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'green';
    })
    });
}
