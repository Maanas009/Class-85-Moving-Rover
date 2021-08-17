canvas = document.getElementById("myCanvas");
asd = canvas.getContext("2d");

imgmarsarray = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];

randomNumber = Math.floor(Math.random()*5);

rover_width = 100;
rover_height = 90;

rover_x = 10;
rover_y = 10;

background_image = imgmarsarray[randomNumber];
console.log("backgroundimg = " + background_image);
rover_image = "rover.png";

function add(){
    background_image_tag = new Image();
    background_image_tag.onload = uploadBackground;
    background_image_tag.src = background_image;

    rover_image_tag = new Image();
    rover_image_tag.onload = uploadRover;
    rover_image_tag.src = rover_image;
}

function uploadBackground(){
    asd.drawImage(background_image_tag, 0, 0, canvas.width, canvas.height);
}

function uploadRover(){
    asd.drawImage(rover_image_tag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    key_pressed = e.keyCode;
    console.log(key_pressed);

    if (key_pressed == "37"){
        left();
        console.log("left");
    }
    if (key_pressed == "38"){
        up();
        console.log("up");
    }
    if (key_pressed == "39"){
        right(); 
        console.log("right");
    }
    if (key_pressed == "40"){
        down(); 
        console.log("down");
    }

}

function left()
{
    if (rover_x >= 10)
    {
        rover_x = rover_x - 10;
    console.log("When the left arrow is clicked, x = " + rover_x + "y = " + rover_y);

    uploadBackground();
    uploadRover();
    }
    
}

function up()
{
    if (rover_y >= 10)
    {
        rover_y = rover_y - 10;
    console.log("When the up arrow is clicked, x = " + rover_x + "y = " + rover_y);

    uploadBackground();
    uploadRover();
    }
    
}

function right()
{
    if (rover_x <= 690)
    {
        rover_x = rover_x + 10;
    console.log("When the right arrow is clicked, x = " + rover_x + "y = " + rover_y);

    uploadBackground();
    uploadRover();
    }
    
}

function down()
{
    if (rover_y <= 500)
    {
        rover_y = rover_y + 10;
        console.log("When the down arrow is clicked, x = " + rover_x + "y = " + rover_y);
    
        uploadBackground();
        uploadRover();
    }
}

