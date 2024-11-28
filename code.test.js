const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js') + '');

const graphWithCycle = {
    0: [1],
    1: [2],
    2: [0], 
    3: [4],
    4: []
};
assert(hasCycle(graphWithCycle) === true, 'Test failed: graphWithCycle should return true');

const graphWithoutCycle = {
    0: [1],
    1: [2],
    2: [], 
    3: [4],
    4: []
};
assert(hasCycle(graphWithoutCycle) === false, 'Test failed: graphWithoutCycle should return false');

const graphWithCycle2 = {
    "A": ["B"],
    "B": ["C"],
    "C": ["A"],
    "D": ["E"],
    "E": []
};
assert(hasCycle(graphWithCycle2) === true, 'Test failed: graphWithCycle2 should return true');

const emptyGraph = {};
assert(hasCycle(emptyGraph) === false, 'Test failed: emptyGraph should return false');

const disconnectedGraph = {
    0: [],
    1: [],
    2: []
};
assert(hasCycle(disconnectedGraph) === false, 'Test failed: disconnectedGraph should return false');

const graphWithSelfLoop = {
    A: ["A"], 
    B: ["C"],
    C: []
};
assert(hasCycle(graphWithSelfLoop) === true, 'Test failed: graphWithSelfLoop should return true');

const singleNodeGraph = {
    A: []
};
assert(hasCycle(singleNodeGraph) === false, 'Test failed: singleNodeGraph should return false');

const singleNodeSelfLoop = {
    A: ["A"]
};
assert(hasCycle(singleNodeSelfLoop) === true, 'Test failed: singleNodeSelfLoop should return true');

console.log('All tests passed successfully.');
