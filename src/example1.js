import * as THREE from 'three';

let mesh, camera, scene, renderer;

const init = () => {
  renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setClearColor(0x00ff00);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 3000);

  scene = new THREE.Scene();

  const light = new THREE.AmbientLight(0xFFFFFF, 0.5)
  scene.add(light)

  const light1 = new THREE.PointLight(0xFFFFFF, 0.5)
  scene.add(light1)

  const geometry = new THREE.CubeGeometry(100, 100, 100);
  const material = new THREE.MeshLambertMaterial({color:  0xf3f2f7});
  mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(0, 0, -1000);

  scene.add(mesh);
 
  document.body.appendChild( renderer.domElement );
}

const render = () => {
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

export default {
  init,
  render,
}
