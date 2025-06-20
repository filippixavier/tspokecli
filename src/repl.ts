import { createInterface } from "node:readline";
import { stdin, stdout} from "node:process";

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
        const clean = cleanInput(input);
        if (clean.length) {
            console.log(`Your command was: ${clean[0]}`)
        }
        rl.prompt();
    })
}