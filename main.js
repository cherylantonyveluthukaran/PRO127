music="";
music_1="";

function preload(){
    music=loadSound("music.mp3");
    music_1=loadSound("music2.mp3");
}

function setup(){
    canvas=createCanvas(600,600);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,600,600);
}

    