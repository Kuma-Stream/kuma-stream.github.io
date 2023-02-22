

function devtoolIsOpening() {
    console.clear();
    let before = new Date().getTime();
    debugger;
    let after = new Date().getTime();
    if (after - before > 200) {
        document.write(" Dont open Developer Tools. ");
        window.location.replace("https://www.akuma.my.id");
    }
    setTimeout(devtoolIsOpening, 100);
}
devtoolIsOpening();
document.oncontextmenu = function (e) {
    e.preventDefault()
    return false;
}
// disable somme additional key
document.onkeydown = function (e) {
    // disable f12
    if (event.keyCode == 123) {
        return false;
    }
    // disable ctrl+shift+I
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    // disable ctrl+shift+C
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    // disable ctrl+shift+j
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    // disable ctrl+shift+U
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}
