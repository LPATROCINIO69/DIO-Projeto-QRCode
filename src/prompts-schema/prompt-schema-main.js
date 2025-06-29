import chalk from "chalk";

const promptSchemaMain = [
    {
        name:"select",
        description: chalk.bgYellow.blue.bold("Escolha a ferramenta (1 - QRCODE ou (2 - PASSWORD"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha apenas entre 1 ou 2"),
        required: true
    }
];

export default promptSchemaMain;