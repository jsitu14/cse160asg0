function main() { 

  var canvas = document.getElementById("example");
  if (!canvas) {
    console.log("Failed to retrieve the <canvas> element ");
    return false;
  }
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 400, 400);

  var v1 = new Vector3([2.25, 2.25, 0]);
  drawVector(v1, "red");
  document.getElementById("draw").addEventListener("click", function() {
   handleDrawEvent();
  });
  document.getElementById("drawpick").addEventListener("click", function() {
   handleDrawOperationEvent();
  });
 }

 function handleDrawOperationEvent() {
     var canvas = document.getElementById("example");
     var ctx = canvas.getContext("2d");

     ctx.clearRect(0, 0, 400, 400);
     ctx.fillStyle = "black";
     ctx.fillRect(0, 0, 400, 400);
 
     var xc = 0;
     var yc = 0;
     var xc2 = 0;
     var yc2 = 0;
     var pick = 0;
     var scalar = 0;
 
     xc = document.getElementById("x").value;
     yc = document.getElementById("y").value;
     xc2 = document.getElementById("x2").value;
     yc2 = document.getElementById("y2").value;
     xc = parseInt(xc);
     yc = parseInt(yc);
     xc2 = parseInt(xc2);
     yc2 = parseInt(yc2);
     var v1 = new Vector3([xc, yc, 0]);
     var v2 = new Vector3([xc2, yc2, 0]);
     drawVector(v1, "red");
     drawVector(v2, "blue");
     pick = document.getElementById("pick").value;
     scalar = document.getElementById("scalar").value;
     scalar = parseInt(scalar);
     if (pick === "add") {
         var v3 = v1.add(v2);
         drawVector(v3, "green");
 
     } else if (pick === "subtract") {
         var v3 = v1.sub(v2);
         drawVector(v3, "green");
 
     } else if (pick === "multiply") {
         var v3 = v1.mul(scalar);
         var v4 = v2.mul(scalar);
         drawVector(v3, "green");
         drawVector(v4, "yellow");
 
     } else if (pick === "divide") {
       if (scalar != 0) {
         var v3 = v1.div(scalar);
         var v4 = v2.div(scalar);
         drawVector(v3, "green");
         drawVector(v4, "yellow");
       } else {
         console.log("Cannot divide by zero.");
       }
     } else if (pick == "magnitude") {
       console.log("Magnitude v1:", v1.magnitude());
       console.log("Magnitude v2:", v2.magnitude());
     } else if (pick == "normalize") {
       v1.normalize();
       v2.normalize();
       drawVector(v1, "green");
       drawVector(v2, "green");
 
     } else if (pick === "angle") {
       let angbet = angleBetween(v1, v2);
       console.log("Angle:", angbet);
 
     } else if (pick === "area") {
       let area = areaTriangle(v1, v2);
       console.log("Area of triangle:", area);
     }
 }
 
 function angleBetween(v1, v2) {
   var dotprod = Vector3.dot(v1, v2);
   var v1mag = v1.magnitude();
   var v2mag = v2.magnitude();
   let temp = v1mag * v2mag;
   if (temp === 0) {
     return 0;
   }
   var cos = dotprod / temp;

   var angleval = Math.acos(cos);

   var trans = angleval * (180 / Math.PI);
 
   return trans;
 }

 function areaTriangle(v1, v2) {
   var crossprod = Vector3.cross(v1, v2);
   var absarea = crossprod.magnitude();
   var half = 1 / 2
   var area = half * absarea;
   return area;
 }
 
 function handleDrawEvent() {

  var canvas = document.getElementById("example");
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, 400, 400);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 400, 400);
 

  var xc = 0;
  var yc = 0;
  var xc2 = 0;
  var yc2 = 0;
  xc = document.getElementById("x").value;
  yc = document.getElementById("y").value;
  xc2 = document.getElementById("x2").value;
  yc2 = document.getElementById("y2").value;
  xc = parseInt(xc);
  yc = parseInt(yc);
  xc2 = parseInt(xc2);
  yc2 = parseInt(yc2);
 
  var v1 = new Vector3([xc, yc, 0]);
  var v2 = new Vector3([xc2, yc2, 0]);

  drawVector(v1, "red");
  drawVector(v2, "blue");
 }
 
 function drawVector(v, color) {
   var canvas = document.getElementById("example");
   var ctx = canvas.getContext("2d");

   var xmid = 200;
   var ymid = 200;

   ctx.strokeStyle = color;
   ctx.beginPath();
   ctx.moveTo(xmid, ymid);

   xmid = xmid + v.elements[0] * 20;
   ymid = ymid - v.elements[1] * 20;
   ctx.lineTo(xmid, ymid);
   ctx.stroke();
 }