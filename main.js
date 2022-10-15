status = "";
objects = [];
function setup(){
    canvas = createCanvas(500,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function preload(){
    alarm = loadSound("army_trumpet_loud.mp3");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        objects = results;
    }
}

function modelLoaded(){
    console.log("Model is loaded");
}

function draw(){
   img = image(video, 0, 0, 500, 600);
   for(i = 0; i < objects.length; i++){
    if(objects.length > 0){
        document.getElementById("btn_status").innerHTML = "Status : Baby Detected";
        alarm.stop();
    }else{
        document.getElementById("btn_status").innerHTML = "Status : Baby not detected";
        alarm.play("army_trumpet_loud.mp3");
    }
    if(objects.length < 0){
        document.getElementById("btn_status").innerHTML = "Status : Baby not detected";
        alarm.play("army_trumpet_loud.mp3");
       }
   }
}