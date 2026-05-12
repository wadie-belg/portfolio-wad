/**
 * WADIE BELGACEM - TACTICAL GRID + SPORT PARTICLES BACKGROUND
 * 
 * Inspired by Audi F1 Gridded Tactical Background & Double Play 3D Elements
 * 
 * Features:
 * - Animated tactical grid lines (like a coach's tactics board)
 * - Floating sport particles: footballs (icosahedrons), tactical arrows (tubes), rings
 * - Connection lines between nearby elements
 * - Volumetric fog for depth
 * - Smooth mouse + scroll parallax
 * - Subtle bloom post-processing
 * - Optimized: 30 particles + grid
 */

import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

// ========================= GLOBAL STATE =========================
let threeScene, threeCamera, threeRenderer, composer;
let floatingObjects = [];
let connectionLines = [];
let gridLines = [];
let mouseX = 0, mouseY = 0;
let targetMouseX = 0, targetMouseY = 0;
let scrollProgress = 0;
let clock;

// Theme colors — matching the portfolio cyan/purple/green/amber
const THEME = {
    cyan:    new THREE.Color(0x06b6d4),
    cyanDim: new THREE.Color(0x0891b2),
    purple:  new THREE.Color(0xa78bfa),
    green:   new THREE.Color(0x34d399),
    amber:   new THREE.Color(0xfbbf24),
    white:   new THREE.Color(0xf1f5f9),
};

const COLOR_ARRAY = [THEME.cyan, THEME.purple, THEME.green, THEME.amber, THEME.cyanDim];

// Particle type weights
const PARTICLE_TYPES = [
    { name: 'football', weight: 5 },
    { name: 'arrow',    weight: 4 },
    { name: 'ring',     weight: 4 },
    { name: 'diamond',  weight: 3 },
    { name: 'sphere',   weight: 3 },
    { name: 'cone',     weight: 2 },
];

// ========================= INIT =========================
export function initThreeJS() {
    const container = document.getElementById('canvas-container');
    if (!container) return;

    clock = new THREE.Clock();

    // 1. Scene with subtle fog
    threeScene = new THREE.Scene();
    threeScene.fog = new THREE.FogExp2(0x06080f, 0.025);

    // 2. Camera — slightly wider angle for grid feel
    threeCamera = new THREE.PerspectiveCamera(
        60, window.innerWidth / window.innerHeight, 0.1, 200
    );
    threeCamera.position.z = 30;

    // 3. Renderer
    threeRenderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
        stencil: false,
        depth: true,
    });
    threeRenderer.setSize(window.innerWidth, window.innerHeight);
    threeRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    threeRenderer.setClearColor(0x000000, 0);
    threeRenderer.toneMapping = THREE.ACESFilmicToneMapping;
    threeRenderer.toneMappingExposure = 1.0;
    container.appendChild(threeRenderer.domElement);

    // 4. Lighting — minimal, subtle
    const ambientLight = new THREE.AmbientLight(0x303050, 0.4);
    threeScene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0x06b6d4, 0.6);
    directionalLight.position.set(10, 15, 10);
    threeScene.add(directionalLight);

    const pointLight1 = new THREE.PointLight(0x06b6d4, 1.5, 50);
    pointLight1.position.set(-15, 10, 10);
    threeScene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xa78bfa, 1.0, 50);
    pointLight2.position.set(15, -10, 8);
    threeScene.add(pointLight2);

    // 5. Create tactical grid
    createTacticalGrid();

    // 6. Create floating particles
    createParticles();

    // 7. Create connections
    createConnections();

    // 8. Post-processing (subtle bloom)
    setupPostProcessing();

    // 9. Events
    document.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onScroll);

    // 10. Animation loop
    animate();

    console.log('✅ Tactical Grid + Sport Particles initialized');
}

// ========================= TACTICAL GRID =========================
function createTacticalGrid() {
    // Create canvas texture for grid pattern
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Clear
    ctx.clearRect(0, 0, 512, 512);

    // Grid lines — thin, subtle
    ctx.strokeStyle = 'rgba(6, 182, 212, 0.04)';
    ctx.lineWidth = 1;
    const gridSize = 32;

    for (let i = 0; i <= 512; i += gridSize) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, 512);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(512, i);
        ctx.stroke();
    }

    // Accent lines at major intervals
    ctx.strokeStyle = 'rgba(6, 182, 212, 0.08)';
    ctx.lineWidth = 1.5;
    const majorGrid = gridSize * 2;

    for (let i = 0; i <= 512; i += majorGrid) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, 512);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(512, i);
        ctx.stroke();
    }

    // Create texture
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(6, 4);

    // Grid plane — behind everything
    const gridGeo = new THREE.PlaneGeometry(80, 50);
    const gridMat = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: 0.7,
        depthWrite: false,
    });
    const gridPlane = new THREE.Mesh(gridGeo, gridMat);
    gridPlane.position.z = -5;
    gridPlane.userData = { type: 'grid' };
    threeScene.add(gridPlane);

    // Add individual line objects for animation
    const lineCount = 12;
    for (let i = 0; i < lineCount; i++) {
        const isHorizontal = Math.random() > 0.5;
        const points = [];
        const startPos = (Math.random() - 0.5) * 60;
        const yPos = (Math.random() - 0.5) * 40;
        const xRange = 10 + Math.random() * 20;

        if (isHorizontal) {
            points.push(new THREE.Vector3(startPos - xRange, yPos, -3));
            points.push(new THREE.Vector3(startPos + xRange, yPos, -3));
        } else {
            points.push(new THREE.Vector3(startPos, yPos - xRange, -3));
            points.push(new THREE.Vector3(startPos, yPos + xRange, -3));
        }

        const geo = new THREE.BufferGeometry().setFromPoints(points);
        const mat = new THREE.LineBasicMaterial({
            color: COLOR_ARRAY[Math.floor(Math.random() * COLOR_ARRAY.length)],
            transparent: true,
            opacity: 0.06 + Math.random() * 0.06,
        });
        const line = new THREE.Line(geo, mat);
        line.userData = {
            isHorizontal,
            baseY: yPos,
            phase: Math.random() * Math.PI * 2,
            speed: 0.15 + Math.random() * 0.25,
            amplitude: 0.3 + Math.random() * 0.5,
        };
        gridLines.push(line);
        threeScene.add(line);
    }
}

// ========================= PARTICLE GEOMETRIES =========================
function weightedRandomType() {
    const flat = PARTICLE_TYPES.flatMap(t =>
        Array.from({ length: t.weight }, () => t.name)
    );
    return flat[Math.floor(Math.random() * flat.length)];
}

function createParticleGeometry(type, color) {
    const group = new THREE.Group();

    const mat = new THREE.MeshPhysicalMaterial({
        color: color,
        transparent: true,
        opacity: 0.35,
        metalness: 0.2,
        roughness: 0.3,
        clearcoat: 0.4,
        clearcoatRoughness: 0.3,
        emissive: color,
        emissiveIntensity: 0.06,
        side: THREE.DoubleSide,
    });

    const wireMat = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.08,
        wireframe: true,
    });

    switch (type) {
        case 'football': {
            // Icosahedron — soccer ball abstraction
            const geo = new THREE.IcosahedronGeometry(0.6, 1);
            const mesh = new THREE.Mesh(geo, mat);
            group.add(mesh);
            const wGeo = new THREE.IcosahedronGeometry(0.63, 0);
            const wire = new THREE.Mesh(wGeo, wireMat);
            group.add(wire);
            // Small vertex dots
            for (let v = 0; v < 4; v++) {
                const dotGeo = new THREE.SphereGeometry(0.04, 5, 5);
                const dotMat = new THREE.MeshBasicMaterial({
                    color: color, transparent: true, opacity: 0.5
                });
                const dot = new THREE.Mesh(dotGeo, dotMat);
                const angle = (v / 4) * Math.PI * 2;
                dot.position.set(Math.cos(angle) * 0.55, Math.sin(angle) * 0.55, 0);
                group.add(dot);
            }
            break;
        }

        case 'arrow': {
            // Tactical arrow — curved tube
            const curve = new THREE.CatmullRomCurve3([
                new THREE.Vector3(0, -0.5, 0),
                new THREE.Vector3(0.08, -0.2, 0),
                new THREE.Vector3(0.12, 0, 0),
                new THREE.Vector3(0.08, 0.2, 0),
                new THREE.Vector3(0, 0.5, 0),
            ]);
            const tubeGeo = new THREE.TubeGeometry(curve, 16, 0.05, 6, false);
            const tube = new THREE.Mesh(tubeGeo, mat);
            group.add(tube);
            // Arrowhead
            const headGeo = new THREE.ConeGeometry(0.18, 0.25, 5);
            const head = new THREE.Mesh(headGeo, mat);
            head.position.y = 0.6;
            group.add(head);
            break;
        }

        case 'ring': {
            // Torus — tactical ring marker
            const ringGeo = new THREE.TorusGeometry(0.5, 0.06, 6, 24);
            const ring = new THREE.Mesh(ringGeo, mat);
            group.add(ring);
            const wGeo = new THREE.TorusGeometry(0.53, 0.04, 4, 20);
            const wire = new THREE.Mesh(wGeo, wireMat);
            group.add(wire);
            break;
        }

        case 'diamond': {
            // Gem/diamond — LatheGeometry
            const diamondPoints = [
                new THREE.Vector2(0, 0.4),
                new THREE.Vector2(0.25, 0.2),
                new THREE.Vector2(0.3, 0),
                new THREE.Vector2(0.25, -0.2),
                new THREE.Vector2(0, -0.4),
            ];
            const diamondGeo = new THREE.LatheGeometry(diamondPoints, 8);
            const diamond = new THREE.Mesh(diamondGeo, new THREE.MeshPhysicalMaterial({
                color: color, transparent: true, opacity: 0.3,
                metalness: 0.5, roughness: 0.1,
                clearcoat: 0.8, clearcoatRoughness: 0.0,
                emissive: color, emissiveIntensity: 0.12,
            }));
            group.add(diamond);
            break;
        }

        case 'sphere': {
            // Simple sphere — ball abstraction
            const sphereGeo = new THREE.SphereGeometry(0.4, 8, 8);
            const sphere = new THREE.Mesh(sphereGeo, mat);
            group.add(sphere);
            const wGeo = new THREE.SphereGeometry(0.43, 5, 5);
            const wire = new THREE.Mesh(wGeo, wireMat);
            group.add(wire);
            break;
        }

        case 'cone': {
            // Tactical cone (training marker)
            const coneGeo = new THREE.ConeGeometry(0.2, 0.5, 6);
            const cone = new THREE.Mesh(coneGeo, mat);
            group.add(cone);
            break;
        }
    }

    return group;
}

// ========================= CREATE PARTICLES =========================
function createParticles() {
    const COUNT = 30;

    for (let i = 0; i < COUNT; i++) {
        const typeName = weightedRandomType();
        const color = COLOR_ARRAY[Math.floor(Math.random() * COLOR_ARRAY.length)];

        const object = createParticleGeometry(typeName, color);

        // Distribute in 3D space — focused on center area
        object.position.set(
            (Math.random() - 0.5) * 40,
            (Math.random() - 0.5) * 28,
            (Math.random() - 0.5) * 14 - 2
        );

        object.rotation.set(
            Math.random() * Math.PI * 2,
            Math.random() * Math.PI * 2,
            Math.random() * Math.PI * 2
        );

        const depth = (object.position.z + 9) / 18; // 0 = far, 1 = near

        object.userData = {
            type: typeName,
            floatSpeed: 0.15 + Math.random() * 0.4,
            floatAmplitude: 0.4 + Math.random() * 1.0,
            rotSpeedX: (Math.random() - 0.5) * 0.004,
            rotSpeedY: (Math.random() - 0.5) * 0.008,
            rotSpeedZ: (Math.random() - 0.5) * 0.003,
            phase: Math.random() * Math.PI * 2,
            baseY: object.position.y,
            depth: depth,
        };

        const scale = 0.6 + Math.random() * 0.8;
        object.scale.setScalar(scale);

        threeScene.add(object);
        floatingObjects.push(object);
    }
}

// ========================= CONNECTIONS =========================
function createConnections() {
    // Remove existing connections
    connectionLines.forEach(line => threeScene.remove(line));
    connectionLines = [];

    const MAX_DIST = 14;

    for (let i = 0; i < floatingObjects.length; i++) {
        for (let j = i + 1; j < floatingObjects.length; j++) {
            const dist = floatingObjects[i].position.distanceTo(floatingObjects[j].position);
            if (dist < MAX_DIST) {
                const opacity = (1 - dist / MAX_DIST) * 0.1;
                const points = [
                    floatingObjects[i].position.clone(),
                    floatingObjects[j].position.clone()
                ];
                const geo = new THREE.BufferGeometry().setFromPoints(points);
                const mat = new THREE.LineBasicMaterial({
                    color: 0x06b6d4,
                    transparent: true,
                    opacity: opacity,
                });
                const line = new THREE.Line(geo, mat);
                line.userData = { from: i, to: j };
                connectionLines.push(line);
                threeScene.add(line);
            }
        }
    }
}

function updateConnections() {
    connectionLines.forEach(line => {
        const fromIdx = line.userData.from;
        const toIdx = line.userData.to;
        const fromPos = floatingObjects[fromIdx].position;
        const toPos = floatingObjects[toIdx].position;
        const positions = line.geometry.attributes.position;
        positions.setXYZ(0, fromPos.x, fromPos.y, fromPos.z);
        positions.setXYZ(1, toPos.x, toPos.y, toPos.z);
        positions.needsUpdate = true;
    });
}

// ========================= POST-PROCESSING =========================
function setupPostProcessing() {
    const renderPass = new RenderPass(threeScene, threeCamera);

    // Subtle bloom — less aggressive than before
    const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        0.35,   // strength (reduced for subtlety)
        0.5,    // radius
        0.88    // threshold
    );

    composer = new EffectComposer(threeRenderer);
    composer.addPass(renderPass);
    composer.addPass(bloomPass);
}

// ========================= EVENTS =========================
function onMouseMove(event) {
    targetMouseX = (event.clientX / window.innerWidth) * 2 - 1;
    targetMouseY = -(event.clientY / window.innerHeight) * 2 + 1;
}

function onScroll() {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    scrollProgress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
}

function onResize() {
    threeCamera.aspect = window.innerWidth / window.innerHeight;
    threeCamera.updateProjectionMatrix();
    threeRenderer.setSize(window.innerWidth, window.innerHeight);
    composer.setSize(window.innerWidth, window.innerHeight);
}

// ========================= ANIMATION LOOP =========================
function animate() {
    requestAnimationFrame(animate);

    const elapsed = clock.getElapsedTime();

    // Smooth mouse interpolation
    mouseX += (targetMouseX - mouseX) * 0.04;
    mouseY += (targetMouseY - mouseY) * 0.04;

    // Update grid lines — subtle wave animation
    gridLines.forEach(line => {
        const d = line.userData;
        const waveY = Math.sin(elapsed * d.speed + d.phase) * d.amplitude;
        line.position.y = d.baseY + waveY;
        // Subtle opacity pulse
        if (line.material) {
            line.material.opacity = 0.06 + Math.sin(elapsed * 0.3 + d.phase) * 0.02;
        }
    });

    // Update floating particles
    floatingObjects.forEach((obj) => {
        const d = obj.userData;

        // Floating motion
        obj.position.y = d.baseY + Math.sin(elapsed * d.floatSpeed + d.phase) * d.floatAmplitude;

        // Rotation
        obj.rotation.x += d.rotSpeedX;
        obj.rotation.y += d.rotSpeedY;
        obj.rotation.z += d.rotSpeedZ;

        // Mouse parallax — depth-based
        const parallaxStr = 0.3 + d.depth * 1.5;
        obj.position.x += (mouseX * parallaxStr) * 0.006;
        obj.position.y += (mouseY * parallaxStr * 0.3) * 0.005;

        // Scroll parallax
        obj.position.y -= scrollProgress * 25 * d.depth * 0.01;

        // Depth-based opacity pulse
        const pulse = 0.3 + d.depth * 0.35;
        const breathe = Math.sin(elapsed * 0.35 + d.phase) * 0.06;
        obj.traverse(child => {
            if (child.material && child.material.transparent) {
                if (child.material.wireframe) {
                    child.material.opacity = 0.06 + breathe * 0.3;
                } else {
                    child.material.opacity = pulse + breathe;
                    if (child.material.emissiveIntensity !== undefined) {
                        child.material.emissiveIntensity = 0.05 + breathe * 0.4;
                    }
                }
            }
        });
    });

    // Update connections
    updateConnections();

    // Camera subtle movement
    threeCamera.position.x += (mouseX * 1.5 - threeCamera.position.x) * 0.025;
    threeCamera.position.y += (mouseY * 0.8 - threeCamera.position.y) * 0.025;
    threeCamera.lookAt(0, 0, 0);

    // Render with post-processing
    composer.render();
}

// ========================= LANGUAGE SWITCH HANDLER =========================
export function updateThreeColors(lang) {
    // No color changes needed — particles keep cyan/purple/green/amber theme
}

// ========================= INIT TRIGGER =========================
// Module scripts are deferred by default — they execute after DOM is ready
// So we can safely call initThreeJS() directly
initThreeJS();
