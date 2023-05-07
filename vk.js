let form = document.querySelector('.form')

let floorSelect = document.createElement('SELECT');
let floors = document.querySelector('.floor')
let rooms = document.querySelector('.rooms')


floorSelect.setAttribute("name", "floors")
floorSelect.setAttribute("id", "floors")
floorSelect.setAttribute("required", "required")
 for (let i = 3; i < 28; i++) {
    let tempOption = document.createElement('OPTION');
    tempOption.setAttribute("value", i);
    tempOption.appendChild(document.createTextNode(i));
    floorSelect.appendChild(tempOption);
}
floors.appendChild(floorSelect);


let roomSelect = document.createElement('SELECT');
roomSelect.setAttribute("name", "rooms")
roomSelect.setAttribute("id", "rooms")
roomSelect.setAttribute("required", "required")
 for (let i = 1; i < 11; i++) {
    let tempOption = document.createElement('OPTION');
    tempOption.setAttribute("value", i);
    tempOption.appendChild(document.createTextNode(i));
    roomSelect.appendChild(tempOption);
}

rooms.appendChild(roomSelect);

function handleSubmit(event) {
    event.preventDefault();
    let data = new FormData(event.target);
    let value = Object.fromEntries(data.entries());
    console.log({ value });
  }

form.addEventListener('submit', handleSubmit);