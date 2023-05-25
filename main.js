nosex=0;
nosey=0;
leftwristx=0;
rightwristx=0;
difference=0;

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
    document.getElementById("square_size").innerHTML="Width and Height of the Square will be = "+difference+"px";
    fill('#1703fc');
    stroke('#03fcad');
    square(nosex,nosey,difference);
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("Nose x = "+nosex+"nosey = "+nosey);
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        difference=floor(leftwristx-rightwristx);
        console.log("left wrist x = "+leftwristx+"right wrist x = "+rightwristx+"difference is "+difference);
    }
}
