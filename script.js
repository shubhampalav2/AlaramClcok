let curr_time = document.getElementById('current-time');
setInterval(() => {
    let date = new Date();
    curr_time.innerHTML = date.toLocaleTimeString();
}, 1000)
let i = 0;
let set_alaram = document.getElementById('set-alaram');
set_alaram.addEventListener('click', () => {
    console.log("Alaram is set");
    let hr = document.getElementById('hr');
    let min = document.getElementById('min');
    let sec = document.getElementById('sec');
    let time = document.getElementById('time');
    console.log(hr.value);
    if (hr.value == 0 || min.value == 0 || sec.value == 0)
        return;
    //create a div element for displaying a alaram
    const node = document.createElement('div');
    if (hr.value < 10) {
        hr.value = "0" + hr.value;
    }
    node.classList.add('alaram');
    node.innerHTML = `<span>${hr.value}:${min.value}:${sec.value} ${time.value}</span> 
    <button class="btn btn-light" id="delete-btn-${i}">Delete</button>  `
    const list = document.getElementById('alaram-list');
    window.alert('Alaram is set');
    document.querySelector('.desc').style.display = "block";
    list.appendChild(node);
    //Seleting the delete button for deleting the alaram
    const delBtn = document.querySelector('#delete-btn-' + i);
    delBtn.addEventListener('click', () => {
        const val = document.getElementsByClassName('alaram');
        list.removeChild(node);
        if (val.length == 0) {
            document.querySelector('.desc').style.display = "none";
        }
    })
    i++;
}); 