function preload()
{

}



function setup()
{
   canvas = createCanvas(640, 480);
   canvas.position(300, 350);
   video = createCapture(VIDEO);
   //video.hide();
   video.position(400,300);
   tint_color = "";
}


/*function setup()
{
 canvas = createCanvas(640,480);
 canvas.position(400, 250);
 video = createCapture(VIDEO);
 video.hide();
 tint_color = "";
}*/

function draw()
{

}


function TakePhoto()
{
  save('Image.png');
}















