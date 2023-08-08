class SVG {
    constructor() {
        this.shapeElement = '';
        this.textElement = '';
    }
//rendering based on the recomended logo size and URL. The Shape is based on selected svg. The text is entered by user prompt.
render () {
    return `<svg version = '2.0' width = '300' height = '200' xmlns = 'http://www.w3.org/2000/svg'> ${this.shapeElement}${this.textElement} </svg>`;
};

setShape(shape) {
    this.shapeElement = shape.render();
};
setText(message)
    const messageLimit = message.length >= 3 throw new Error 'Your Logo must be limited to 3 letters.' ?: this.textElement = 'text x = '
};

module.exports = SVG;