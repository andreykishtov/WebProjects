window.onload = function(params) {
    var canvas = new Draw();
    //canvas.roundedRect(50, 50, 100, 100, 15);
    canvas.getMousePos(canvas)
    var mypossition
    canvas.makesquare(100, 100, 100, 100);
}

class Draw {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width = this.canvas.clientWidth;
        this.height = this.canvas.height = this.canvas.clientHeight;
        this.canvas.addEventListener('mousemove', function(evt) {
            var mousePos = function() {
                return {
                    x: evt.clientX - rect.left,
                    y: evt.clientY - rect.top
                };
            }
            var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
            this.canvas.fillText(message, 10, 25);
        }, false);



    }
    draw() {
        this.clearCanvas();
        // this.ctx.fillStyle = `rgb(200,0 ,0)`;
        // this.ctx.fillRect(100, 100, 200, 200);
        // this.ctx.fillStyle = `rgba(0,0 ,20,0.6)`;
        // this.ctx.fillRect(10, 10, 150, 150);
        // this.ctx.strokeStyle = '#000';
        // this.ctx.strokeRect(40, 20, 150, 50);
        this.ctx.lineWidth = 10;
        //////////////////////////////////////
        this.ctx.beginPath();
        this.ctx.moveTo(100, 100);
        this.ctx.lineTo(130, 170);
        this.ctx.moveTo(100, 100);
        this.ctx.lineTo(70, 170);
        this.ctx.moveTo(140, 135);
        this.ctx.lineTo(60, 135);
        // this.ctx.beginPath();
        // this.ctx.moveTo(30, 50);
        // this.ctx.lineTo(130, 170);
        // this.ctx.lineTo(50, 170);
        // this.ctx.closePath();
        // this.ctx.fill();
        // this.ctx.stroke();
        // this.ctx.beginPath();
        // //this.ctx.moveTo(130, 150);
        // this.ctx.arc(375, 375, 50, 0, Math.PI * 1 / 3, false);
        this.ctx.stroke();
    }

    getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }

    makesquare(x, y, width, height) {
        this.clearCanvas();
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(x + width, y);
        this.ctx.lineTo(x + width, y + height);
        this.ctx.lineTo(x, y + height);
        this.ctx.closePath();
        this.ctx.stroke();
        console.log(e.clientX);
    }




    roundedRect(x, y, width, height, radius) {
        this.clearCanvas();
        this.ctx.beginPath();

        //this.ctx.lineTo(x + width, y)
        this.ctx.arc(x + radius, y + radius, radius, 0, (Math.PI) * 1.5, false);
        this.ctx.arc(x + width - radius, y, radius, 0, (Math.PI) * 0.5, false);
        //this.ctx.arc(x + width, y, radius, 0, (Math.PI) * 2, false);
        //this.ctx.arc(x + width, y + height, radius, 0, (Math.PI) * 2, false);
        //this.ctx.lineTo(x + width, y - radius)
        //this.ctx.moveTo(x + width, y);
        //this.ctx.lineTo(x + width, y + height);
        //this.ctx.arc(x, y + height, radius, 0, (Math.PI) * 2, false);
        //this.ctx.closePath();
        //this.ctx.arc(x + width, y, radius, 0, (Math.PI) * 2, false);
        //this.ctx.lineTo(x, y + height);
        //this.ctx.closePath();
        //this.ctx.stroke();
        //this.ctx.beginPath();
        //	context.arc(x,y,r,sAngle,eAngle,counterclockwise);
        this.ctx.stroke();
        this.ctx.shadowOffsetX = 2;
        this.ctx.shadowOffsetY = 2;
        this.ctx.shadowBlur = 2;
        this.ctx.shadowColor = 'rgba(0,0,0,0,0.5)';
        this.ctx.fillText('Andrey Is Tired', 50, 100, 220);

        var img = new Image();
        img.src = 'http://cdn.sailingscuttlebutt.com/wp-content/uploads/2014/09/have-fun.jpg';
        //img.onload = () => this.ctx.drawImage(img, 20, 20);
        //this.ctx.arc(x + width / 2, y + height / 2, radius, 0, Math.PI, false);
        var sourceX = width,
            sourceY = height,
            sourceWidth = width / 4,
            sourceHeight = height / 4,
            destX = x,
            destY = y,
            destWidth = width,
            destHeight = height;
        img.onload = () => this.ctx.drawImage(img, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
    }

    clearCanvas() {
        //this.ctx.fillStyle = `rgb(255,255,255)`;
        //this.ctx.fillRect(10, 10, this.width, this.height);
        this.ctx.clearRect(10, 10, this.width, this.height);
    }

}


// var canvas = document.getElementById('myCanvas');
// var context = canvas.getContext('2d');