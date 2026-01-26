import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.150.1/build/three.module.js';

var renderer, scene, camera, composer, circle, skelet, particle;

window.onload = function() {
  init();
  createOverlay();
  animate();
}

var overlayCanvas, overlayCtx;
var overlayActive = false;
var overlayColor = { r: 0, g: 0, b: 0 };
var overlayTarget = { r: 0, g: 0, b: 0 };

function createOverlay() {
  overlayCanvas = document.createElement('canvas');
  overlayCanvas.style.position = 'absolute';
  overlayCanvas.style.top = '0';
  overlayCanvas.style.left = '0';
  overlayCanvas.style.pointerEvents = 'none';
  overlayCanvas.width = window.innerWidth;
  overlayCanvas.height = window.innerHeight;
  overlayCanvas.id = 'colorOverlay';
  document.body.appendChild(overlayCanvas);
  overlayCtx = overlayCanvas.getContext('2d');
}

function triggerOverlay() {
  overlayActive = true;
  // Scegli un colore casuale come target
  overlayTarget = {
    r: Math.floor(Math.random() * 256),
    g: Math.floor(Math.random() * 256),
    b: Math.floor(Math.random() * 256)
  };
}

document.addEventListener('pointerdown', triggerOverlay);

function updateOverlay() {
  if (!overlayActive) return;
  // Interpolazione graduale verso il colore target
  overlayColor.r += (overlayTarget.r - overlayColor.r) * 0.02;
  overlayColor.g += (overlayTarget.g - overlayColor.g) * 0.02;
  overlayColor.b += (overlayTarget.b - overlayColor.b) * 0.02;
  // Disegna overlay
  overlayCtx.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height);
  overlayCtx.fillStyle = `rgba(${Math.round(overlayColor.r)},${Math.round(overlayColor.g)},${Math.round(overlayColor.b)},0.25)`;
  overlayCtx.fillRect(0, 0, overlayCanvas.width, overlayCanvas.height);
}

var meshList = [];

function init() {
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio((window.devicePixelRatio) ? window.devicePixelRatio : 1);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.autoClear = false;
  renderer.setClearColor(0x000000, 0.0);
  document.getElementById('canvas').appendChild(renderer.domElement);

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 400;
  scene.add(camera);

  circle = new THREE.Object3D();
  skelet = new THREE.Object3D();
  particle = new THREE.Object3D();

  scene.add(circle);
  scene.add(skelet);
  scene.add(particle);

  var geometry = new THREE.TetrahedronGeometry(2, 0);
  var geom = new THREE.IcosahedronGeometry(7, 1);
  var geom2 = new THREE.IcosahedronGeometry(15, 1);

  var material = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    flatShading: true
  });

  for (var i = 0; i < 1000; i++) {
    var mesh = new THREE.Mesh(geometry, material.clone());
    mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
    mesh.position.multiplyScalar(90 + (Math.random() * 700));
    mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);
    particle.add(mesh);
    meshList.push(mesh);
  }

  var mat = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    flatShading: true
  });

  var mat2 = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    wireframe: true,
    side: THREE.DoubleSide

  });

  var planet = new THREE.Mesh(geom, mat.clone());
  planet.scale.x = planet.scale.y = planet.scale.z = 16;
  circle.add(planet);
  meshList.push(planet);

  var planet2 = new THREE.Mesh(geom2, mat2.clone());
  planet2.scale.x = planet2.scale.y = planet2.scale.z = 10;
  skelet.add(planet2);
  meshList.push(planet2);

  var ambientLight = new THREE.AmbientLight(0x999999 );
  scene.add(ambientLight);
  
  var lights = [];
lights[0] = new THREE.DirectionalLight( 0xffffff, 1 );
lights[0].position.set( 1, 0, 0 );
lights[1] = new THREE.DirectionalLight( 0x11E8BB, 1 );
lights[1].position.set( 0.75, 1, 0.5 );
lights[2] = new THREE.DirectionalLight( 0x8200C9, 1 );
lights[2].position.set( -0.75, -1, 0.5 );
scene.add( lights[0] );
scene.add( lights[1] );
scene.add( lights[2] );
  

  window.addEventListener('resize', onWindowResize, false);

};

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  if (overlayCanvas) {
    overlayCanvas.width = window.innerWidth;
    overlayCanvas.height = window.innerHeight;
  }
}

var filterActive = false;
var filterColor = { r: 255, g: 255, b: 255 };
var filterTarget = { r: 255, g: 255, b: 255 };

document.removeEventListener('pointerdown', triggerOverlay);
document.addEventListener('pointerdown', function() {
  filterActive = true;
  filterTarget = {
    r: Math.floor(Math.random() * 256),
    g: Math.floor(Math.random() * 256),
    b: Math.floor(Math.random() * 256)
  };
});

function updateFilter() {
  if (!filterActive) return;
  filterColor.r += (filterTarget.r - filterColor.r) * 0.02;
  filterColor.g += (filterTarget.g - filterColor.g) * 0.02;
  filterColor.b += (filterTarget.b - filterColor.b) * 0.02;
  var colorHex = (filterColor.r << 16) | (filterColor.g << 8) | (filterColor.b);
  meshList.forEach(function(mesh) {
    if (mesh.material && mesh.material.color) {
      mesh.material.color.setRGB(filterColor.r/255, filterColor.g/255, filterColor.b/255);
    }
  });
}

function animate() {
  requestAnimationFrame(animate);

  particle.rotation.x += 0.0000;
  particle.rotation.y -= 0.0040;
  circle.rotation.x -= 0.0020;
  circle.rotation.y -= 0.0030;
  skelet.rotation.x -= 0.0010;
  skelet.rotation.y += 0.0020;
  renderer.clear();

  renderer.render( scene, camera );
  updateFilter();
};
