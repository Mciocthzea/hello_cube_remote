import * as THREE from ".//three/three.module.js";

const my_canvas=document.getElementById("canvas01");
const canvas_aspect_ratio = my_canvas.clientWidth/my_canvas.clientHeight;

const renderer=new THREE.WebGLRenderer({canvas:my_canvas});

const scene = new THREE.Scene();
console.log(scene);

const camera01={
    fov:75,
    asp:canvas_aspect_ratio,
    near:0.1,
    far:1000,
    camera:undefined
}
camera01.camera = new THREE.PerspectiveCamera(camera01.fov,camera01.asp,camera01.near,camera01.far);

renderer.render(scene,camera01.camera);