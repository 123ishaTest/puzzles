import {LanguageType} from "@/language/types/LanguageType";

export abstract class AbstractType {
    abstract type: LanguageType;
    abstract value: any;

    abstract toString(): string;
}
