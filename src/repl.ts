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

    state.rl.on("line", async (input: string) => {
        const cmd = input.split(' ')[0]
        if (state.commands[cmd]) {
            try {
                await state.commands[cmd].callback(state);
            } catch(e) {
                console.error(e)
            }
        } else {
            console.log("Command not found, use help to list command.")
        }
        state.rl.prompt();
    })
}