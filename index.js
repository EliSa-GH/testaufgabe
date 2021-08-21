"use strict"

document.addEventListener('DOMContentLoaded', function(){

    //Farbe ändern
    var color = Math.round(Math.random() * (4 - 0));

    switch(color){
        case 0:
            document.getElementById('body').style.background="linear-gradient(rgba(255, 0, 0, 0.5), rgba(255, 0, 0, 0.5)), url(holz.jpg)";
            break;
        case 1:
            document.getElementById('body').style.background="linear-gradient(rgba(0, 100, 0, 0.5), rgba(0, 100, 0, 0.5)), url(holz.jpg)";
            break;
        case 2:
            document.getElementById('body').style.background="linear-gradient(rgba(75, 0, 130, 0.5), rgba(75, 0, 130, 0.5)), url(holz.jpg)";
            break;
        case 3:
            document.getElementById('body').style.background="linear-gradient(rgba(0, 128, 128, 0.5), rgba(0, 128, 128, 0.5)), url(holz.jpg)";
            break;
        case 4:
            document.getElementById('body').style.background="linear-gradient(rgba(255, 69, 0, 0.5), rgba(255, 69, 0, 0.5)), url(holz.jpg)";
            break;
        default:
            document.getElementById('body').style.background="linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(holz.jpg)";
    }

    //Copyright aktualisieren
	var datum = new Date();
    document.getElementById('year').innerHTML = '©'+datum.getFullYear();

});