Bandana_posX = 0;
Bandana_posY = 0;
eyepatchX = 0;
eyepatchY = 0;
mX = 0;
mY = 0;
bX = 0;
bY = 0;
function preload() {
    bandana = loadImage("https://i.postimg.cc/hG5nmPds/bandana.png");
    eyepatch = loadImage("https://i.postimg.cc/rwGz5WVJ/Eyepatch.png");
    mustache = loadImage("https://i.postimg.cc/8CKyP76p/mustache.png");
    beard = loadImage("https://i.postimg.cc/0jqXhLSD/beard.png");
}
function setup() {
    canvas = createCanvas(450, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(450, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotResults);
}
function draw() {
    image(video, 0, 0, 450, 300);
    image(bandana, Bandana_posX, Bandana_posY, 310, 230);
    image(eyepatch, eyepatchX, eyepatchY, 155, 70);
    image(mustache, mX, mY, 60, 50);
    image(beard, bX, bY, 100, 90);
}
function modelLoaded() {
    console.log("PoseNet is initialized!");
}
function gotResults(results) {
    if(results.length > 0) {
        console.log(results);
        Bandana_posX = results[0].pose.rightEye.x - 85;
        Bandana_posY = results[0].pose.rightEye.y - 150;
        eyepatchX = results[0].pose.rightEye.x - 50;
        eyepatchY = results[0].pose.rightEye.y - 50;
        mX = results[0].pose.nose.x - 30;
        mY = results[0].pose.nose.y - 8;
        bX = results[0].pose.nose.x - 50;
        bY = results[0].pose.nose.y + 15;
        console.log("Right eye X = " + results[0].pose.rightEye.x);
        console.log("Right eye Y = " + results[0].pose.rightEye.y);
        console.log("Nose X = " + results[0].pose.nose.x);
        console.log("Nose Y = " + results[0].pose.nose.y);
    }
}
function take_snapshot() {
    save("Pirate filter image.png");
}