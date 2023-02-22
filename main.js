noseX=0;
noseY=0;
function preload() {
  audifonos = loadImage('https://i.postimg.cc/pTB12wyG/audifonos.png');
}

function setup() {
  canvas = createCanvas(500,350 );
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  video.size(500,350);
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose',gotPoses);
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    console.log("nose_x ="  + results [0].pose.nose.x);
    console.log("nose_y ="  + results [0].pose.nose.y);
    noseX = results [0].pose.nose.x -150 ;
    noseY = results [0].pose.nose.y -170 ;
  }
}

function modelLoaded(){
  console.log('Modelo inicializado');

}

function draw() {
  image(video, 0, 0, 500, 350);
  fill(255,0,0);
  stroke(255,0,0);
  image(audifonos, noseX, noseY, 300, 250);
}

function take_snapshot(){    
  save('myFilterImage.png');
}

