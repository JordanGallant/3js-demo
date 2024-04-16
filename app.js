import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 1;
camera.position.x = 1;
camera.position.y = 1;
camera.lookAt(0, 0, 0);

const size = 3;
const divisions = 40;

const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);
let mesh = new THREE.Mesh(
  new THREE.SphereGeometry(0.1, 32, 32),
  new THREE.MeshNormalMaterial()
);

function addPoint(x, y, z) {
  let point = mesh.clone();
  point.position.set(x, y, z);
  scene.add(point);
  return point;
}

addPoint(0, 0, 0);

function animate() {

  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}

animate();
