class MarsRover {
  constructor() {
    this.xCoordinate = this.xCoordinate === undefined ? 0 : $("#x-axis").val();
    this.yCoordinate = this.yCoordinate === undefined ? 0 : $("#y-axis").val();
    this.direction =this.direction === undefined ? "East": $("#directions option:selected").text();
    this.width = Math.floor(document.getElementById("marsRover").getBoundingClientRect().x) ;
    this.height = Math.floor(document.getElementById("marsRover").getBoundingClientRect().y) ;
    this.currentPosition = [this.width, this.height];
    this.gridSize = 14;
  }
  moveForward() {
    let [x, y] = this.currentPosition;
    if (this.direction === "North") {
      x = this.xCoordinate;
      y = this.yCoordinate++;
    } else if (this.direction === "South") {
      x = this.xCoordinate;
      y = this.yCoordinate--;
 
    } else if (this.direction === "West") {
      x = this.xCoordinate--;
      y = this.yCoordinate;
   
    } else if (this.direction === "East") {
      x = this.xCoordinate++;
      y = this.yCoordinate;
     
    }
    this.currentPosition = [x, y];
    console.log("current2", this.currentPosition);
    Swal.fire({
      title: `Rover is now at ( ${this.currentPosition[0]}, ${this.currentPosition[1]}) Facing ${this.direction}`,
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
   
  }
  moveBackward() {
    let [x, y] = this.currentPosition;
    if (this.direction === "North") {
      x = this.xCoordinate;
      y = this.yCoordinate--;
    } else if (this.direction === "South") {
      x = this.xCoordinate;
      y = this.yCoordinate++;
    } else if (this.direction === "West") {
      x = this.xCoordinate++;
      y = this.yCoordinate;
    } else if (this.direction === "East") {
      x = this.xCoordinate--;
      y = this.yCoordinate;
    }
    this.currentPosition = [x, y];
    Swal.fire({
      title: `Rover is now at (${this.currentPosition[0]}, ${this.currentPosition[1]}) Facing ${this.direction}`,
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  
  }
  moveRight() {
    let [x, y] = this.currentPosition;
    if (this.direction === "North") {
      x = this.xCoordinate++;
      y = this.yCoordinate;
    } else if (this.direction === "South") {
      x = this.xCoordinate--;
      y = this.yCoordinate;
    } else if (this.direction === "West") {
      x = this.xCoordinate;
      y = this.yCoordinate--;
    } else if (this.direction === "East") {
      x = this.xCoordinate;
      y = this.yCoordinate++;
    }
    $("#marsRover").css("transform", "rotateX(90deg)");
    this.currentPosition = [x, y];
    Swal.fire({
      title: `Rover is now at (${this.currentPosition[0]}, ${this.currentPosition[1]}) Facing ${this.direction}`,
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  }
  moveLeft() {
    let [x, y] = this.currentPosition;
    if (this.direction === "North") {
      x = this.xCoordinate++;
      y = this.yCoordinate;
      
    } else if (this.direction === "South") {
      x = this.xCoordinate--;
      y = this.yCoordinate;
    
    } else if (this.direction === "West") {
        x = this.xCoordinate;
      y = this.yCoordinate--;
    
    } else if (this.direction === "East") {
      y = this.yCoordinate++;
      x = this.xCoordinate;
    }

    this.currentPosition = [x, y];
    $("#marsRover").css("transform", "rotateX(-90deg)");
    Swal.fire({
      title: `Rover is now at (${this.currentPosition[0]}, ${this.currentPosition[1]}) Facing ${this.direction}`,
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  }
  shiftRover() {
    $("#command").blur((e) => {
      let command = e.target.value;
     
      command.split("").forEach((el) => {
        if(el===undefined)
        {
          return el
        }
        else if (el.toUpperCase() === "F") {
          this.moveForward();
        } else if (el.toUpperCase() === "B") {
          this.moveDownward();
          
        } else if (el.toUpperCase() === "L") {
          this.moveLeft();
    
        } else if (el.toUpperCase() === "R") {
          this.moveRight();
       
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "invalid Direction!",
          });
        }
      });
    });
  }
}

let rover = new MarsRover();
console.log(rover.currentPosition);



////move
let finalX = Math.floor($(".moveCar #marsRover").width());

let finalY = Math.floor(
  $(".moveCar #marsRover").height()
);
console.log("y", finalY);



// $("#marsRover").animate(
//   { left: (rover.xCoordinate * finalX )+ 294, bottom: (rover.yCoordinate * finalY) +400 },
//   1000
// );
window.onload=function()
{
  let  Rover=document.getElementById("marsRover")
  setInterval(() => {
    Rover.style.left=(rover.xCoordinate *finalX +'px')+294
    Rover.style.bottom=(rover.yCoordinate* finalY +'px')+400
  }, 10);
  rover.shiftRover()
}



