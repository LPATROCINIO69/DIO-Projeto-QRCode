import prompt from 'prompt';
import mainPrompt from './prompts/prompt-main.js';
import chalk from 'chalk';
import createQRCode from './services/qr-code/create.js';
import createPassword from './services/password/create.js';

async function main(){
    prompt.get(mainPrompt, async (err,choose)=>{
        if (choose.select == 1) {
            console.log(chalk.blue("Escolheu o QRCode"));
            await createQRCode();
        }
        if (choose.select == 2) {
            console.log(chalk.blue("Escolheu o PASSWORD"));
            await createPassword();
        }
    })
}

main();
