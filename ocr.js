var ocrDemo = {
    CANVAS_WIDTH: 200,
    TRANSLATED_WIDTH: 20,
    PIXEL_WIDTH: 10,
    BATCH_SIZE: 1,

    PORT: "9000",
    HOST: "http://localhost",

    BLACK: "#000000"
    BLUE: "#0000ff",

    trainArray: [],
    trainingRequestCount: 0,
    
    onLoadFunction: function(){
        this.resetCanvas();
    },
    
    resetCanvas: function() {
        var canvas = document.
