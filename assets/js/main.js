//new Date("September 2, 2019 09:00:00")
let arrFn1 = () => {
    let d1 = new Date("September 2, 2019 09:00:00");
    document.getElementById('pOutput1').innerHTML = d1;
}

let hideFn1 = () => {
    document.getElementById('pOutput1').innerHTML = '';
}

//new Date(0)
let arrFn2 = () => {
    let d2 = new Date(0);
    document.getElementById('pOutput2').innerHTML = d2;
}

let hideFn2 = () => {
    document.getElementById('pOutput2').innerHTML = '';
}

//new Date(31556908800)
let arrFn3 = () => {
    let d3 = new Date(31556908800);
    document.getElementById('pOutput3').innerHTML = d3;
}

let hideFn3 = () => {
    document.getElementById('pOutput3').innerHTML = '';
}

//new Date(86400000)
let arrFn4 = () => {
    let d4 = new Date(86400000);
    document.getElementById('pOutput4').innerHTML = d4;
}

let hideFn4 = () => {
    document.getElementById('pOutput4').innerHTML = '';
}