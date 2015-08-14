var cmykToRGB = function (c, m, y, k) {

    function padZero(str) {
        return "000000".substr(str.length) + str
    }

    var cyan = (c * 255 * (1 - k)) << 16;
    var magenta = (m * 255 * (1 - k)) << 8;
    var yellow = (y * 255 * (1 - k)) >> 0;

    var black = 255 * (1 - k);
    var white = black | black << 8 | black << 16;

    var color = white - (cyan | magenta | yellow);

    return ("#" + padZero(color.toString(16)));


};



var draw = function (canvas) {
    var ctx;
    if (canvas.getContext) {
        ctx = canvas.getContext('2d');

        ctx.fillStyle = "rgb(200,0,0)";
        ctx.fillRect(10, 10, 55, 50); //rectangular area
        
        ctx.strokeRect(8, 8, 59, 54); //rectangular outline
        
        ctx.clearRect(15, 15, 45, 40); //rectangulat clear area is transparent
		
		
		
		
		

        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect(30, 30, 55, 50);

    } else {

    }
} (document.getElementById('canvas'));


//draw();
