import { stdin, stdout} from "node:process";
import { createInterface, Interface } from "readline";
import { CLICommand, getCommands } from "./CLICommands.js";

export type State = {
    rl: Interface;
    commands: Record<string, CLICommand>
}

export function initState() {
    const rl = createInterface({
        input: stdin,
        output: stdout,
        prompt: "Pokedex > "
    });
    
    const state = {
        rl,
        commands: getCommands()
    }

    return state;
}