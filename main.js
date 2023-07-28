import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const canvasContainer = document.querySelector('#canvas');
const renderer = new THREE.WebGLRenderer();
renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
canvasContainer.appendChild(renderer.domElement);

    const pendulumLength = 15; // Length of the pendulum arm
    const pendulumGeometry = new THREE.CylinderGeometry(0.08, 0.08, pendulumLength, 32);
    const pendulumMaterial = new THREE.MeshBasicMaterial({ color: 0x43aed9 });
    const pendulum = new THREE.Mesh(pendulumGeometry, pendulumMaterial);

    const bobRadius = 0.8; // Radius of the spherical bob
    const bobGeometry = new THREE.SphereGeometry(bobRadius, 32, 32);
    const bobMaterial = new THREE.MeshBasicMaterial({ color: 0x2a5c70 });
    const bob = new THREE.Mesh(bobGeometry, bobMaterial);
    pendulum.add(bob); // Attach the bob to the pendulum

    scene.add(pendulum);

    const pivot = new THREE.Vector3(0, 10, 0); // Pivot point of the pendulum
    pendulum.position.copy(pivot).add(new THREE.Vector3(0, -pendulumLength / 2, 0)); // Position the pendulum initially
    // Position the bob at the bottom end of the pendulum
    bob.position.set(0, -pendulumLength / 2 - bobRadius, 0);
   
    var PreviousTime = Date.now();

    const animate = () => {
      requestAnimationFrame(animate);
    
      // Calculate the time delta (elapsed time) between frames in seconds
      var currentTime = Date.now();

      var deltaTime = currentTime - PreviousTime ;

     /*  console.log(PreviousTime,currentTime,deltaTime) */
    
      // Calculate the pendulum angle (oscillation) based on time delta
      const amplitudeInput = document.getElementById('amplitude');
      const frequencyInput = document.getElementById('frequency');
      const amplitude = THREE.MathUtils.degToRad(parseFloat(amplitudeInput.value));
      const frequency = parseFloat(frequencyInput.value);
      const oscillationAngle = amplitude * Math.sin(2*Math.PI*frequency * deltaTime);

      console.log(amplitude,oscillationAngle);
    
      // Update pendulum position and rotation
      pendulum.rotation.z = oscillationAngle;
      pendulum.position.copy(pivot).add(new THREE.Vector3(0, -pendulumLength / 2, 0).applyAxisAngle(new THREE.Vector3(0, 0, 1), oscillationAngle));
    
      // Update the previousTime variable for the next frame
      
    
      // Read camera distances from the range inputs
      const cameraDistanceXInput = document.getElementById('cameraDistanceX');
      const cameraDistanceYInput = document.getElementById('cameraDistanceY');
      const cameraDistanceZInput = document.getElementById('cameraDistanceZ');
    
      const cameraDistanceX = parseFloat(cameraDistanceXInput.value);
      const cameraDistanceY = parseFloat(cameraDistanceYInput.value);
      const cameraDistanceZ = parseFloat(cameraDistanceZInput.value);
    
      // Update camera position
      camera.position.set(cameraDistanceX, cameraDistanceY, cameraDistanceZ);
      camera.lookAt(scene.position);
    
      renderer.render(scene, camera);

      window.addEventListener('resize', () => {
        const newAspectRatio = window.innerWidth / window.innerHeight;
        camera.aspect = newAspectRatio;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      });

      
    };

    
    
    animate(); // Start the animation loop
    