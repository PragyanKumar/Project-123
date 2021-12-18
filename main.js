noseX=0
noseY=0
difference=0
leftWristX=0
rightWristX=0

function setup(){
    video=createCapture(VIDEO)
    video.size(650,600)
    video.position(30,150)
    canvas=createCanvas(650,600)
    canvas.position(900,150)
    posenet=ml5.poseNet(video,modelLoaded)
    posenet.on('pose',gotPoses)
}

function draw(){
    background("#A9A9A9")
    document.getElementById("square_sides").innerHTML = "width and height of a square will be= " + difference + " px"
    fill("blue")
    stroke("yellow")
    text("pragyan" , noseX , noseY)
    textSize(difference)
}

function modelLoaded(){
    console.log("posenet is initialized ")
}

function gotPoses(results){
if (results.length>0){
    console.log(results)
    noseX=results[0].pose.nose.x
    noseY=results[0].pose.nose.y
    console.log("noseX = " + noseX + " noseY = " + noseY)
    leftWristX=results[0].pose.leftWrist.x
    rightWristX=results[0].pose.rightWrist.x
    difference=floor(leftWristX-rightWristX)
    console.log("leftWristX= " + leftWristX + " rightWristX= " + rightWristX + " difference= " + difference)
}
}