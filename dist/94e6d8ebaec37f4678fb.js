import"./style.css";import*as THREE from"three";import{OrbitControls}from"three/examples/jsm/controls/OrbitControls.js";const image=new Image;image.src="/texture/BaiYuekui.png";const texture=new THREE.Texture(image);image.onload=()=>{texture.needsUpdate=!0};const canvas=document.querySelector("canvas.webgl"),scene=new THREE.Scene,geometry=new THREE.PlaneGeometry(1.5,1),material=new THREE.MeshBasicMaterial({map:texture}),mesh=new THREE.Mesh(geometry,material);scene.add(mesh);const sizes={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",(()=>{sizes.width=window.innerWidth,sizes.height=window.innerHeight,camera.aspect=sizes.width/sizes.height,camera.updateProjectionMatrix(),renderer.setSize(sizes.width,sizes.height),renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}));const camera=new THREE.PerspectiveCamera(75,sizes.width/sizes.height,.1,100);camera.position.x=1,camera.position.y=1,camera.position.z=1,scene.add(camera);const controls=new OrbitControls(camera,canvas);controls.enableDamping=!0;const renderer=new THREE.WebGLRenderer({canvas});renderer.setSize(sizes.width,sizes.height),renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const clock=new THREE.Clock,tick=()=>{clock.getElapsedTime(),controls.update(),renderer.render(scene,camera),window.requestAnimationFrame(tick)};tick();