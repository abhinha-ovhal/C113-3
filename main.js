function preLoad(){
}
function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(310, 270);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}
function draw(){
    image(video, 0, 0, 640, 480);
    tint(tint_color);
    stroke("blue");
    fill("blue");
    for(i=11;i<700;i=i+20){
        circle(11, i, 20);
    }
    for(i=11;i<700;i=i+20){
        circle(i, 11, 20);
    }
    
    for(i=11;i<700;i=i+20){
        circle(629, i, 20);
    }
    for(i=11;i<700;i=i+20){
        circle(i, 469, 20);
    }
    
}
function filtour(){
    tint_color = document.getElementById("colour").value;
}
function take_snapshot(){
    save("image_filter.png");
}