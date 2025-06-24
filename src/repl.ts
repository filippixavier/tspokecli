import { createInterface } from "node:readline";
import { stdin, stdout} from "node:process";
import { getCommands } from "./commands/CLICommands.js";

const commands = getCommands()

export function cleanInput(input: string):string[] {
    return input
        .toLowerCase()
        .trim()
        .split(/\s+/)
        .filter(elem => elem);
}

export function startREPL() {
    const rl = createInterface({
        input: stdin,
        output: stdout,
        prompt: "Pokedex > "
    });

    rl.prompt();

    rl.on("line", (input) => {
        const cmd = input.split(' ')[0]
        if (commands[cmd]) {
            commands[cmd].callback();
        } else {
            console.log("Command not found, use help to list command.")
        }
        rl.prompt();
    })
}