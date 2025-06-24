import { getCommands } from "./commands/CLICommands.js";
import { initState } from "./commands/state.js";
const commands = getCommands()

export function cleanInput(input: string):string[] {
    return input
        .toLowerCase()
        .trim()
        .split(/\s+/)
        .filter(elem => elem);
}

export function startREPL() {
    const state = initState();

    state.rl.prompt();

    state.rl.on("line", (input: string) => {
        const cmd = input.split(' ')[0]
        if (state.commands[cmd]) {
            state.commands[cmd].callback(state);
        } else {
            console.log("Command not found, use help to list command.")
        }
        state.rl.prompt();
    })
}