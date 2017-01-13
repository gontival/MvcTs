///// <reference path="../Scripts/typings/jquery/jquery.d.ts"/>

function sayHello() {
    //$(document).ready(function () {
        const compiler = (document.getElementById("compiler") as HTMLInputElement).value;
        const framework = (document.getElementById("framework") as HTMLInputElement).value;
        return `Hello from ${compiler} and ${framework}!`;
    //});
}