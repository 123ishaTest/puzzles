module.exports = {
    transform: {
        "^.+\\.(t|j)sx?$": "ts-jest"
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    testMatch: ["<rootDir>/tests/**/*.{ts, js}"],
    moduleNameMapper: {
        "@/(.*)": "<rootDir>/src/$1",
    },
};
