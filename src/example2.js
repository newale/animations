import * as THREE from 'three';

let camera, scene, renderer;
let mesh, mesh2, mesh3;
const canvas = document.querySelector('#canvas');

const init = () => {
  renderer = new THREE.WebGLRenderer({canvas, antialias: true});
  renderer.setClearColor(0x000000);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, innerHeight);

  camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 300, 10000);

  scene =  new THREE.Scene();

  const light = new THREE.AmbientLight(0xFFFFFF, 0.5);
  scene.add(light);

  const light2 = new THREE.AmbientLight(0xFFFFFF, 0.5);
  scene.add(light2);

  const material = new THREE.MeshNormalMaterial({
    color: 0xff0000,
    transparent: true,
    opacity: 1,
    wireframe: true,
  })

  // geometry
  const geometry = new THREE.BoxGeometry(100, 100, 100);
  mesh = new THREE.Mesh(geometry, material)
  mesh.position.z = -1000;
  mesh.position.x = -100;
  scene.add(mesh);

  const geometry2 = new THREE.SphereGeometry(50, 20, 20);
  mesh2 = new THREE.Mesh(geometry2, material)
  mesh2.position.z = -1000;
  mesh2.position.x = 100;
  scene.add(mesh2);

  const geometry3 = new THREE.PlaneGeometry(10000, 10000, 100, 100);
  mesh3 = new THREE.Mesh(geometry3, material)
  mesh3.position.z = -90 * Math.PI / 100;
  mesh3.position.x = -100;
  scene.add(mesh3);
}

const render = () => {
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

export default {
  init,
  render,
}
