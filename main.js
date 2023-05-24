function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,110);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log('posenet model is loaded');
}

function draw()
{
    background('#0cf7ec');
}

function gotPoses(results)
{
    if(results.lenghth>0)
    {
        console.log(results);
    }
}
