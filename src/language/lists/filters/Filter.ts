import {NullaryFunction} from "@/language/functions/NullaryFunction";
import {Memory} from "@/language/memory/Memory";
import {BooleanType} from "@/language/types/BooleanType";

export abstract class Filter extends NullaryFunction {
    abstract evaluate(memory: Memory): BooleanType;
}
