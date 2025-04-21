const player = document.getElementById("player")
let isjumping= false;
let jumpheight = 150;
let jumpspeed = 10;
let gravity =10;
let position = 0;
let gameOver = false;
function jump(){
    if(isjumping) return
    isjumping = true
    let upinterval = setInterval(() =>{
        if(position >= jumpheight){
            clearInterval(upinterval);

    let downinterval = setInterval(() => {
        if(position <=0){
            clearInterval(downinterval);
        isjumping = false;
        position = 0
        player.style.bottom = position + "px";
    } else {
        position -= gravity
        player.style.bottom = position +"px";
    }
    },20);
    } else {
        position += jumpspeed
        player.style.bottom= position + "px"
    }
},20);
}

document.addEventListener("click",jump)   
document.addEventListener("keydown", (e) => {
    if(e.code=== "Space") {
        jump();
    }
});
function createObstacle(){
    const obstacle =document.createElement("div")
    obstacle.classList.add("obstacle")
    document.getElementById("game").appendChild(obstacle);

let obstaclePosition = window.innerWidth;
obstacle.style.left = obstaclePosition + "px";
let obstacleInterval = setInterval(() => {
    if (obstaclePosition < -50){
        clearInterval(obstacleInterval);
        obstacle.remove();
    } else {
        obstaclePosition -= currentSpeed;
        obstacle.style.left = obstaclePosition + "px";
        let playerRect= player.getBoundingClientRect();
        let obstacleRect = obstacle.getBoundingClientRect();
        if (
            !gameOver &&
            playerRect.left < obstacleRect.right &&
            playerRect.right > obstacleRect.left &&
            playerRect.bottom > obstacleRect.top
        ) {
            gameOver = true;
            console.log("collision detected");
            alert("💥You snooze,you lose");
            setTimeout(() => {
            location.reload();
            } ,100)
        }
      }
    },20);
}
let currentSpeed= 5;
setInterval(() => {
    currentSpeed += 1;
}, 500);
setInterval(createObstacle,1200){
    if(currentSpeed > 10){
        setInterval(createObstacle,800)
    } else if( currentSpeed > 20 ){
        setInterval(createObstacle,600)
    }
}
const scoredisplay=document.getElementById("score")
let score = 0;
let scoreInterval = setInterval(() => {
    if(!gameOver){
        score++;
        scoredisplay.textContent="Capability :" +score;
    }
}
)