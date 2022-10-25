noseX =0
noseY=0
function preload()
{
 lip_stick = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
     video = createCapture(VIDEO);
     video.size(300,300);
     video.hide();
     poseNet = ml5.poseNet( video,modalLoaded);
     poseNet.on('pose',gotPoses)
}

function modalLoaded(){
    console.log('PoseNet Is Initialized');

}

function draw() {
image(video,0,0,300,300);

image(lip_stick,noseX-15,noseY+15,30,30);
}
function take_snapshot(){
    save('myFilterImage.png');
}
function gotPoses(results)
{
    if(results.length > 0 )
    {
        console.log("nose x=" + results[0].pose.nose.x);
        console.log("nose y=" + results[0].pose.nose.y);
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}