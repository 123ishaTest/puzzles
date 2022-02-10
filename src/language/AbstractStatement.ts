import {StatementId} from "@/language/StatementId";
import {NoneType} from "@/language/types/NoneType";
import {Memory} from "@/language/memory/Memory";

export abstract class AbstractStatement {
    abstract id: StatementId;

    abstract evaluate(memory: Memory): NoneType;
}
