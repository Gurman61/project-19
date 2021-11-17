function preload()
{
    classifier=ml5.imageClassifier("DoodleNet");
}
function setup()
{
    canvas=createCanvas(280,280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth=window.speechSynthesis;
}

function classifyCanvas()
{
    classifier.classify(canvas,gotResult);
}

function gotResult()
{
    if(error)
    {
        console.error(error);
    }
    console.log(result);
    document.getElementById("label").innerHTML="label :"+result[0].label;
    document.getElementById("confidence").innerHTML="confidence :"+Math.round(result[0].confidence*100)+"%";
    utterThis=new SpeechSynthesisUtterance(result[0].label);
    synth=speak(utterThis);
}


function draw()
{
    image(canvas,280,280,200,100);
    strokeWeight(13);
    stroke(0);
    if(mouseIsPressed)
    {
        line(pmouseX,pmouseY,mouseX,mouseY);
    }
}


function clear_canvas()
{
    background("white");
}