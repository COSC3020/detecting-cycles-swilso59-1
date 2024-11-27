function hasCycle(graph) {
    // Set to keep track of nodes that have been fully processed
    const visited = new Set();
    
    // Set to keep track of nodes currently in the DFS path
    const currentPath = new Set();

    // Loop through each node in the graph
    for (const startNode in graph) {
        // If the node hasn't been fully visited yet, start a DFS
        if (!visited.has(startNode)) {
            // Use a stack to simulate the recursive DFS [current node, parent node].
            const stack = [[startNode, null]];

            // Perform DFS until the stack is empty
            while (stack.length > 0) {
                // Pop the top node from the stack for processing
                const [currentNode, parent] = stack.pop();

                // Check if the current node is already in the current path
                if (currentPath.has(currentNode)) {
                    // If it is, we have found a cycle
                    return true;
                }

                // If the node hasn't been visited yet
                if (!visited.has(currentNode)) {
                    // Mark the node as visited
                    visited.add(currentNode);
                    
                    // Add the node to the current DFS path
                    currentPath.add(currentNode);

                    // Add all neighbors of the current node to the stack
                    for (const neighbor of graph[currentNode] || []) {
                        // Avoid revisiting the parent node
                        if (neighbor !== parent) {
                            // Push neighbor with the current node as its parent
                            stack.push([neighbor, currentNode]); 
                        }
                    }
                }
            }

            // Clear the current path once the DFS for this starting node is complete
            currentPath.clear();
        }
    }

    // If no cycles were found, return false
    return false;
}
