console.log("Ce fichier JS fonctionne parfaitement avec ThreeJS !");
console.log("Et pour le prouver je vais faire apparaitre un cube violet en 3D !");
console.log("TADAM !");

// Le code qui suit sert à afficher le cube en 3D, vous pouvez partir de cette base mais attention à bien tout comprendre avant de se lancer !

// ------------------------------------------------
// BASIC SETUP
// ------------------------------------------------

// Create an empty scene
var scene = new THREE.Scene();
let div = document.querySelector("div");

// Create a basic perspective camera
var camera = new THREE.PerspectiveCamera( 75, div.clientWidth/div.clientHeight, 0.1, 1000 );
camera.position.z = 4;

// Create a renderer with Antialiasing
var renderer = new THREE.WebGLRenderer({antialias:true});

// Configure renderer clear color
renderer.setClearColor("#fff");

// Configure renderer size
renderer.setSize( div.clientWidth, div.clientHeight );

// Append Renderer to DOM
div.appendChild( renderer.domElement );

// ------------------------------------------------
// FUN STARTS HERE
// ------------------------------------------------

// Create a Cube Mesh with basic material
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: "#433F81" } );
var cube = new THREE.Mesh( geometry, material );

// Add cube to Scene
scene.add( cube );

// Render Loop
var render = function () {
  requestAnimationFrame( render );

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Render the scene
  renderer.render(scene, camera);
};

render();
