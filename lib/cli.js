const inquirer = require('inquirer');
const SVG = require('./svg');
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");


class cli {
    run() {
        return inquirer
        .prompt([
            {
            name: 'text',
            type: 'input',
            message: 'Please enter your Logo Name (3 letters max)',
            validate: (text) => text.length <=3 || 'Please enter no more than 3 letters',
            },
            {
            name: 'logoColor',
            type: 'input',
            message: 'Enter a color for the Logo',
            },
            {
            name: 'shapeClass',
            type: 'list',
            choices: ['Circle', 'Square', 'Triangle'],
            },
            {
            name: 'shapeColor',
            type: 'input',
            message: 'Enter a color for the background',
            },
                 ])
        .then(({ text, logoColor, shapeClass, shapeColor }) => {
         let shape;
              switch (shapeClass) {
                  case 'circle':
                 shape = new Circle();
                 break;
            
                 case 'square':
                 shape = new Square();
                 break;
           
                 default:
                 shape = new Triangle();
                 break;
                  }

            shape.setColor(shapeColor);
            const svg = new SVG();
            svg.setText(text, logoColor);
            svg.setShape(shape);
            return writeFile('logo.svg', svg.render());
          })

        .then(() => {

            console.log('logo.svg has been generaged');
            
          })
          .catch((error) => {
            console.error(error);
            console.log('Error. Please try again');
          });
    }
}

module.exports = cli;