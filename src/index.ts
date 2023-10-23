import inquirer from 'inquirer';

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Как вас зовут?',
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'Какие языки программирования вы знаете?',
            choices: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++'],
        },
        {
            type: 'list',
            name: 'frontendFramework',
            message: 'Какой ваш любимый фреймворк для фронтенда?',
            choices: ['React', 'Vue.js', 'Angular', 'Svelte'],
            when: (answers) => answers.languages.includes('JavaScript') || answers.languages.includes('TypeScript'),
        }
    ])
    .then((answers) => {
        console.log(answers);
    })
    .catch((error) => {
        console.log(error);
        if (error.isTtyError) {
            console.log('da')
            // Prompt couldn't be rendered in the current environment
        } else {
            console.log('net')
            // Something else went wrong
        }
    });