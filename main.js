function preload() {
	world_start = loadSound("world_start.wav");
  jumping_sound=loadSound("jump.wav");
  kicking_sound=loadSound("kick.wav");
	mariodie_sound=loadSound("mariodie.wav");
  coin_sound=loadSound("coin.wav");
  gameover_sound=loadSound("gameover.wav");
  setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent("canvas1");
  video=createCapture(VIDEO);
  video.size(800, 375);
  video.parent("webcam");
  object=ml5.poseNet(video,model_loaded);
  object.on("pose",gotPoses);
}



function draw() {
	game()
   

}


function model_loaded() {
  console.log('Model Loaded!');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX +", noseY = " + noseY);
  }
}


/*
img = "";
noseX = 0;
noseY = 0;
marioX = 325;
marioY = 325;

function preload()
{
  img = loadImage("mario05.png");
}
function setup() {
  createCanvas(650, 400);
  video = createCapture(VIDEO);
  video.size(600,300);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('Model Loaded!');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX +", noseY = " + noseY);
  }
}

function draw() {
background("#D3D3D3");
  if(noseX < 300)
  {
    marioX = marioX - 1;
  }
  if(noseX > 300)
  {
    marioX = marioX + 1;
  }
  if(noseY < 150)
  {
    marioY = marioY - 1;
  }
  image(img,marioX, marioY, 40,70);
}
*/







