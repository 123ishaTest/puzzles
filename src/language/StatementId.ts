export enum StatementId {

    // Literals,
    BooleanLiteral = 'boolean-literal',
    NumberLiteral = 'number-literal',
    NoneLiteral = 'none-literal',
    StringLiteral = 'string-literal',

    // Memory
    VariableExpression = 'variable-expression',
    AssignVariable = 'assign-variable',

    // Logic
    Eq = 'eq',
    Or = 'or',
    Gt = 'gt',

    // Lists
    ForEachTile = 'for-each-tile',
    ForEachCorner = 'for-each-corner',

    // Filters
    AllFilter = 'all',
    NoneFilter = 'none',
    TileHasNumericValueFilter = 'tile-has-numeric-value',

    // Statements
    IfStatement = "if-statement",
    BlockStatement = "block-statement",

    // Arithmetic
    Add = 'add',

    // Functions
    TileValueFunction = 'tile-value',
    TileEdgeCountFunction = 'tile-edge-count',
    CornerEdgeCountFunction = 'corner-edge-count',
    EdgeGroupCountFunction = 'edge-group-count',

}
