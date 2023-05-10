import * as Three from "https://unpkg.com/three@0.152.1/build/three.module.js";
const scene = new Three.Scene();
console.log(scene);
const camera = new Three.PerspectiveCamera(75,innerWidth / innerHeight, 0.1, 1000);