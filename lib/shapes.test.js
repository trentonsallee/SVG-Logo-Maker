const { describe } = require('yargs');
const { Circle, Triangle, Square } = require('./shapes');

describe ('Circle', () => {
    test('If this renders a white circle, you are good. If its green, you are not good. If there is no circle, you are very not good', () => {
        const circle = new Circle();
        circle.setColor('white');
        const expectedSVG = "<circle cx= '150' cy='100' r='80' fill='white'/>"
        const createdSvg = circle.render();
        expect(expectedSVG).toEqual(createdSvg);
    });
});

describe ('Triangle', () => {
    test('If this renders a white triangel, you are good. If its green, you are not good. If there is no triangle, you are very not good', () => {
        const triangle = new Triangle();
        triangle.setColor('white');
        const expectedSVG = "<circle cx= '150' cy='100' r='80' fill='green'/>"
        const createdSvg = triangle.render();
        expect(expectedSVG).toEqual(createdSvg);
    });
});

describe ('Square', () => {
    test('If this renders a white square, you are good. If its green, you are not good. If there is no square, you are very not good', () => {
        const square = new Square();
        square.setColor('white');
        const expectedSVG = "<circle cx= '150' cy='100' r='80' fill='green'/>"
        const createdSvg = square.render();
        expect(expectedSVG).toEqual(createdSvg);
    });
});