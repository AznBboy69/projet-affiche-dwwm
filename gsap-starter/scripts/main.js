console.log("Ce fichier JS fonctionne parfaitement avec GSAP !");
console.log("Et pour le prouver je vais faire bouger le titre de la page !");
console.log("TADAM !");

gsap.to("h1", { 
    x: 0,
    duration: 1 
});
