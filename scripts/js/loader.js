import * as THREE from "./three/build/three.module.js";
import {GLTFLoader} from "./three/examples/jsm/loaders/GLTFLoader.js";

var scene = document.querySelector('a-scene').object3D;
let loader = new GLTFLoader()
loader.load(
    "/smritisoudho-vr/model/model.glb",
    (gltf)=>{
        var model = gltf.scene;
        model.position.set(0, 0, -80);
        model.rotation.set(0,-2.35619,0);
        scene.add( gltf.scene );
    },
    (model)=>{
        let fraction = model.loaded/model.total*100;
        let percentage = Math.trunc(fraction);
        document.getElementById("status").innerHTML = "Assets are loading!<br>"+percentage+"% loaded &#128571;";
        document.getElementById("progress").style.width = percentage+"%";
        if(percentage===100||percentage>100){
            document.getElementById("status").innerHTML = "Assets are loaded!&#129409; Your browser is rendering<br>Please wait a FEW SECONDS!";
            setTimeout(()=>{
                document.getElementById("preloader").style.display="none";
            },5000)
        }
    }
)
let treeLoader = new GLTFLoader()
var tree_array = []
treeLoader.load(
    "/smritisoudho-vr/model/tree2.glb",
    (gltf)=>{
        var model = gltf.scene;
        // model.rotation.set(0,-2.35619,0);
        for(var i = 0;i<=10;i++){
            tree_array.push(model.clone())
        }
        // tree_array[1].rotation.set(0,-2.35619,0);
        // tree_array[1].position.set(0,0,-88)
        // scene.add(tree_array[1]);
        // tree_array[2].rotation.set(0,5.5,0);
        // tree_array[2].position.set(0,0,-88);
        // scene.add(tree_array[2])
        tree_array[3].rotation.set(0,-2.35619-(Math.PI/2),0);
        tree_array[3].position.set(0,0,93)
        scene.add(tree_array[3])
        tree_array[4].rotation.set(0,-2.35619+(Math.PI),0);
        tree_array[4].position.set(0,0,93)
        scene.add(tree_array[4])
        // tree_array[5].rotation.set(0,-2.35619,0);
        // tree_array[5].position.set(10,0,-99)
        // scene.add(tree_array[5]);
        // tree_array[6].rotation.set(0,5.5,0);
        // tree_array[6].position.set(-10,0,-99);
        // scene.add(tree_array[6])
        var rotate_a = -2.35619
        var position_a = [0,0,-88]
        var a=1
        while(a<=5){
            tree_array[a].rotation.set(0,rotate_a,0);
            tree_array[a].position.set(position_a[0],position_a[1],position_a[2])
            scene.add(tree_array[a]);
            position_a[0] = position_a[0] + 10
            position_a[2] = position_a[2] - 11
            a= a+4
        }
        var rotate_b = 5.5
        var position_b = [0,0,-88]
        var b=2
        while(b<=6){
            tree_array[b].rotation.set(0,rotate_b,0);
            tree_array[b].position.set(position_b[0],position_b[1],position_b[2])
            scene.add(tree_array[b]);
            position_b[0] = position_b[0] - 10
            position_b[2] = position_b[2] - 11
            b= b+4
        }
    })
