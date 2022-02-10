export enum StatementId {

    // Literals
    BooleanLiteral = 'boolean-literal',
    NumberLiteral = 'number-literal',
    NoneLiteral = 'none-literal',
    StringLiteral = 'string-literal',

    // Memory
    VariableExpression = 'variable-expression',
    AssignVariable = 'assign-variable',

    // Logic
    Eq = 'eq',
    Gt = 'gt',

    // Statements
    IfStatement = "if-statement",
    BlockStatement = "block-statement",

    // Arithmetic
    Add = 'add',

    // Functions
    EdgeCountFunction = 'edge-count',
    EdgeGroupCountFunction = 'edge-group-count',

}
