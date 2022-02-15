import {AbstractCommand} from "@/puzzles/commands/AbstractCommand";

export class CommandHistory {
    private _index = 0;
    private _commands: AbstractCommand[] = [];

    get index(): number {
        return this._index;
    }

    get commands(): AbstractCommand[] {
        return this._commands;
    }

    public do(command: AbstractCommand): boolean {
        if (command.do()) {
            this.truncateFutureCommands();
            this._commands.push(command)
            this._index++;
            return true;
        }
        return false;
    }


    public undo(): boolean {
        if (this._index === 0) {
            console.warn('Cannot undo if at start');
            return false;
        }
        const command = this._commands[this._index - 1];
        if (!command.undo()) {
            console.warn(`Could not undo command ${command.toString()}`);
            return false;
        }
        this._index--;
        return true;
    }

    public redo(): boolean {
        if (this._index === this._commands.length) {
            console.warn("Cannot redo at the end of list");
            return false;
        }
        const command = this._commands[this._index];
        if (!command.do()) {
            console.warn(`Could not redo command ${command.toString()}`);
            return false;
        }
        this._index++;
        return true;
    }


    private truncateFutureCommands(): void {
        if (this._index < this._commands.length) {
            this._commands.length = this._index
        }
    }
}
