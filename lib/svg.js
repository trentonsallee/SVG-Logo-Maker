class SVG {
    constructor() {
        this.shapeElement = '';
        this.textElement = '';
    }
//rendering based on the recomended logo size and URL. The Shape is based on selected svg. The text is entered by user prompt.
render () {
    return `<svg version = '2.0' width = '300' height = '200' xmlns = 'http://www.w3.org/2000/svg'> ${this.shapeElement} ${this.textElement} </svg>`;
};

setShape(shape) {
    this.shapeElement = shape.render();
}
setText(message, color) {
if (message.length >= 4) {  
    throw new Error ('Your Logo must be limited to 3 letters.');

    this.textElement = `<text x = '150' y = '125' font-size = '60' text-anchor = 'middle' fill = '${color}'> ${message} </text>`;
}
}
}

module.exports = SVG;