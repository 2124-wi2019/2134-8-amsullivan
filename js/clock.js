/*  Anna Sullivan
    script.js
    INFO2134WW
    Thoendel
    5/2/2020
*/
    //YOUR CODE SHOULD START BELOW THIS LINE
    function startClock () {//function closure named startClock

        const clock = document.getElementById('clock'); //const clock from clock id
        const ctx = clock.getContext('2d'); //const ctx 2d drawing object
        let radius = clock.height / 2; //let radius of the clock height
        ctx.translate(radius, radius); //remap the position of drawing object to center of canvas
        radius = radius * 0.90; //reduce the radius to 90% to draw clock
        //drawClock();
        
            function drawClock(){//function drawClock to draw the face numbers and time
                drawFace(ctx, radius);
                drawNumbers(ctx, radius);
                drawTime(ctx, radius);
            }
            function drawFace(ctx, radius) {//function drawFace to create face of clock
                let grad;
                ctx.beginPath();
                ctx.arc(0, 0, radius, 0, 2 * Math.PI);
                ctx.fillStyle = '#333';
                ctx.fill();
        
                grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
                grad.addColorStop(0, 'white');
                grad.addColorStop(0.5, '#333');
                grad.addColorStop(1, '#333');
                ctx.strokeStyle = grad;
                ctx.lineWidth = radius * 0.1;
                ctx.stroke();
        
                ctx.beginPath();
                ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
                ctx.fillStyle = 'white';
                ctx.fill();
            }
        
            function drawNumbers(ctx, radius) {//function draw numbers to create numbers on clock
                let ang;
                let num;
                ctx.font = radius * 0.15 + "px arial";
                ctx.textBaseline = "middle";
                ctx.textAlign = "center";
        
                for(num = 1; num < 13; num ++){
                    ang = num * Math.PI / 6;
                    ctx.rotate(ang);
                    ctx.translate(0, -radius * 0.85);
                    ctx.rotate(-ang);
                    ctx.fillText(num.toString(), 0, 0);
                    ctx.rotate(ang);
                    ctx.translate(0, radius * 0.85);
                    ctx.rotate(-ang);
                }
            }
        
            function drawTime(ctx, radius) {//function drawTime
                let now = new Date();
                let hour = now.getHours();
                let minute = now.getMinutes();
                let second = now.getSeconds();
        
                hour = hour %12;
                hour = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60)) + (second * Math.PI / (360 * 60));
                drawHand(ctx, hour, radius * 0.5, radius * 0.07);
        
                minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
                drawHand(ctx, minute, radius * 0.8, radius * 0.07);
        
                second = (second * Math.PI / 30);
                drawHand(ctx, second, radius * 0.9, radius * 0.02);
            }
        
            function drawHand(ctx, position, length, width) {//function drawHand to create hand on clock
                ctx.beginPath();
                ctx.lineWidth = width;
                ctx.lineCap = "round";
                ctx.moveTo(0, 0);
                ctx.rotate(position);
                ctx.lineTo(0, -length);
                ctx.stroke();
                ctx.rotate(-position);
            }
        
            drawClock();//call drawClock function
            setInterval(drawClock, 1000);//set an interval on the drawClock
        }
         