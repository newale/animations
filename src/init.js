import * as THREE from 'three';

let camera, scene, renderer;
let geometry, material, mesh;

init();
animate();

function init() {
	camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10 );
	camera.position.z = 1;

  scene = new THREE.Scene();
  
  const light = new THREE.AmbientLight(0xFFFFFFFF, 0.5);
  scene.add(light);

  const light2 = new THREE.PointLight(0xFFFFFFFF, 0.5);
  scene.add(light2)

  // Cube
	geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
	material = new THREE.MeshNormalMaterial();

	mesh = new THREE.Mesh(geometry, material);
	scene.add(mesh);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setClearColor(0x00FF00);
  
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);
}

function animate() {
	requestAnimationFrame(animate);
	mesh.rotation.x += 0.01;
	renderer.render(scene, camera);
}