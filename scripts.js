
let bodyMax = 8;
let eyesMax = 13;
let hairMax = 10;
let headMax = 8;
let mouthMax = 15;
let noseMax = 5;
let bodyNumber = getNumber(1, bodyMax);
let eyesNumber = getNumber(1, eyesMax);
let hairNumber = getNumber(1, hairMax);
let headNumber = getNumber(1, headMax);
let mouthNumber = getNumber(1, mouthMax);
let noseNumber = getNumber(1, noseMax);

function getNumber(min, max){
    return Math.floor( Math.random() * (max - min + 1)) + min;
}

function bodyRandomize(){
    var bodyNumber = getNumber(1, bodyMax);
    document.getElementById("sketchBody").src="https://raw.githubusercontent.com/jsaldrich1/sketchy-characters/main/sketches/Body/" + bodyNumber + ".PNG";
}

function eyesRandomize(){
    var eyesNumber = getNumber(1, eyesMax);
    document.getElementById("sketchEyes").src="/sketches/Eyes/eyes" + eyesNumber + ".png";
}

function hairRandomize(){
    var hairNumber = getNumber(1, hairMax);
    document.getElementById("sketchHair").src="/sketches/Hair/hair" + hairNumber + ".png";
}

function headRandomize(){
    var headNumber = getNumber(1, headMax);
    document.getElementById("sketchHead").src="/sketches/Head/head" + headNumber + ".png";
}

function mouthRandomize(){
    var mouthNumber = getNumber(1, mouthMax);
    document.getElementById("sketchMouth").src="/sketches/Mouth/mouth" + mouthNumber + ".png";
}

function noseRandomize(){
    var noseNumber = getNumber(1, noseMax);
    document.getElementById("sketchNose").src="/sketches/Nose/nose" + noseNumber + ".png";
}

function bodyDown(num){
    if (num === 1) {
        num = bodyMax;
        bodyNumber = num;
    } else {
        num--;
        bodyNumber = num;
    }
    document.getElementById("sketchBody").src="https://raw.githubusercontent.com/jsaldrich1/sketchy-characters/main/sketches/Body/" + num + ".PNG";
}

function bodyUp(num){
    if (num === bodyMax) {
        num = 1;
        bodyNumber = num;
    } else {
        num++;
        bodyNumber = num;
    }
    document.getElementById("sketchBody").src="https://raw.githubusercontent.com/jsaldrich1/sketchy-characters/main/sketches/Body/" + num + ".PNG";
}

function eyesDown(num){
    if (num === 1) {
        num = eyesMax;
        eyesNumber = num;
    } else {
        num--;
        eyesNumber = num;
    }
    document.getElementById("sketchEyes").src="/sketches/Eyes/eyes" + num + ".png";
}

function eyesUp(num){
    if (num === eyesMax) {
        num = 1;
        eyesNumber = num;
    } else {
        num++;
        eyesNumber = num;
    }
    document.getElementById("sketchEyes").src="/sketches/Eyes/eyes" + num + ".png";
}

function hairDown(num){
    if (num === 1) {
        num = hairMax;
        hairNumber = num;
    } else {
        num--;
        hairNumber = num;
    }
    document.getElementById("sketchHair").src="/sketches/Hair/hair" + num + ".png";
}

function hairUp(num){
    if (num === hairMax) {
        num = 1;
        hairNumber = num;
    } else {
        num++;
        hairNumber = num;
    }
    document.getElementById("sketchHair").src="/sketches/Hair/hair" + num + ".png";
}

function headDown(num){
    if (num === 1) {
        num = headMax;
        headNumber = num;
    } else {
        num--;
        headNumber = num;
    }
    document.getElementById("sketchHead").src="/sketches/Head/head" + num + ".png";
}

function headUp(num){
    if (num === headMax) {
        num = 1;
        headNumber = num;
    } else {
        num++;
        headNumber = num;
    }
    document.getElementById("sketchHead").src="/sketches/Head/head" + num + ".png";
}

function mouthDown(num){
    if (num === 1) {
        num = mouthMax;
        mouthNumber = num;
    } else {
        num--;
        mouthNumber = num;
    }
    document.getElementById("sketchMouth").src="/sketches/Mouth/mouth" + num + ".png";
}

function mouthUp(num){
    if (num === mouthMax) {
        num = 1;
        mouthNumber = num;
    } else {
        num++;
        mouthNumber = num;
    }
    document.getElementById("sketchMouth").src="/sketches/Mouth/mouth" + num + ".png";
}

function noseDown(num){
    if (num === 1) {
        num = noseMax;
        noseNumber = num;
    } else {
        num--;
        noseNumber = num;
    }
    document.getElementById("sketchNose").src="/sketches/Nose/nose" + num + ".png";
}

function noseUp(num){
    if (num === noseMax) {
        num = 1;
        noseNumber = num;
    } else {
        num++;
        noseNumber = num;
    }
    document.getElementById("sketchNose").src="/sketches/Nose/nose" + num + ".png";
}

function randomRandomize(){
    bodyRandomize();
    eyesRandomize();
    hairRandomize();
    headRandomize();
    mouthRandomize();
    NoseRandomize();
}
