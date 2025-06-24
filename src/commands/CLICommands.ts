import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";

export type CLICommand = {
    name: string;
    description: string;
    callback: () => void;
}

export function getCommands(): Record<string, CLICommand> {
    return {
        exit: {
            name: 'exit',
            description: 'Exits the pokédex',
            callback: commandExit
        },
        help: {
            name: 'help',
            description: 'Display help',
            callback: commandHelp
        }
    }
}