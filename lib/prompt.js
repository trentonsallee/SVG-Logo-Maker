


class Preguntas {
    run() {
        return inquire
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
            choises: ['Circle', 'Square', 'Triangle'],
            },
            {
            name: 'shapeColor',
            type: 'input',
            message: 'Enter a color for the shape',
            },
        ])
        .then(({ text, logoColorm, shapeClass, shapeColor}) => {
            TODO:
        })
        .then(() => {
            console.log("Generated logo.svg");
          })
          .catch((error) => {
            console.error(error);
            console.log('Error. Please try again');
          });
    }
}