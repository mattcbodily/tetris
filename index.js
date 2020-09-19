const canvas = document.getElementById('game-board'),
      ctx = canvas.getContext('2d'),
      scale = 10;
      
class Tetrimino {
    constructor(){
        this.height = scale,
        this.width = scale,
        this.x = canvas.width / 2,
        this.y = 0
    }

    draw(){
        ctx.fillStyle = '#FFF';
        ctx.fillRect(this.x, this.y, scale, scale);
    }

    fall(){
        this.y += scale;
    }
}

let testBlock;

function setup(){
    testBlock = new Tetrimino();
    
    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        testBlock.draw();
        testBlock.fall();
      }, 1000 / 10);
}

setup()