// length controlling 
function getPin() {
    const pin= gen();
    const stringPin=pin+"";
    if (stringPin.length===8) {
        return pin;
    } else {
        return getPin();
    }

}


// for creating random number 
function gen() {
    const genpin =Math.round(Math.random()*100000000)
    return genpin;
}

document.getElementById("getpin-btn").addEventListener("click",function () {
    const pin = getPin();
    document.getElementById("showpin").value=pin;
})
