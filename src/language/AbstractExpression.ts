import {AbstractStatement} from "@/language/AbstractStatement";
import {AbstractType} from "@/language/types/AbstractType";
import {Memory} from "@/language/memory/Memory";

export abstract class AbstractExpression extends AbstractStatement {
    abstract evaluate(memory: Memory): AbstractType
}
