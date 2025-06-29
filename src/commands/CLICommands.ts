import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap } from "./command_map.ts.js";
import { commandMapBack } from "./command_mapb.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";
import { commandInspect } from "./command_inspect.js";

import { State } from "./state.js";

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State, ...args: any[]) => Promise<void>;
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
        },
        map: {
            name: 'map',
            description: 'Display the next 20 locations',
            callback: commandMap
        },
        mapb: {
            name: 'mapb',
            description: 'Display the previous 20 locations',
            callback: commandMapBack
        },
        explore: {
            name: 'explore <location name>',
            description: 'Explore the given location and return all pokémons',
            callback: commandExplore
        },
        catch: {
            name: 'catch <pokemon name>',
            description: 'Attempt to catch a pokemon',
            callback: commandCatch
        },
        inspect: {
            name: 'inspect <pokemon name>',
            description: 'Display pokemon data if caught',
            callback: commandInspect
        }
    }
}