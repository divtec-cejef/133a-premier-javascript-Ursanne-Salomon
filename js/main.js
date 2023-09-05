/**
 * Mon premier fichier js
 * @author Ursanne Salomon
 * @version 0.0.1
 * @since 2023-08-29
 */
"use strict";
// Récupèrer les paragraphes du document
let tableau = document.querySelectorAll("p");
let btAjouter = document.querySelector("button.Ajouter");
let txtArticle = document.querySelector("#article");
let ulArticle = document.querySelector("ul.article");
// Affiche les contenu de la variable dans la console
console.log(tableau,btAjouter);

// Ecoute le clique sur le bouton
btAjouter.addEventListener("click", () =>
    ulArticle.innerHTML += "<li>" + txtArticle.value + "</li>");

let age = prompt("Quel est ton age ?");
age = parseInt(age);
if(isNaN(age)) {
    alert("Entrer un nombre");
} else {
    alert(`tu a ${age} ans !`);
}
