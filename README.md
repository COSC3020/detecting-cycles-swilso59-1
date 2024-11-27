# Detecting Cycles in Graphs

Kruskal's Algorithm adds edges to the minimum spanning tree, unless they would
add a cycle. In the lectures, we did not talk about how to do this -- you're
going to implement a function to detect cycles in a graph. Start with the
template I provided in `code.js`. You can use any data structures (i.e. any
graph representation) you like. The function should return `true` or `false`,
depending on whether the given graph contains a cycle or not.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

## Answer 

The dominant operations of this algorithm are the outer loop and the DFS traversal. The outer loop iterates over each node and initiates a DFS for any unvisited node. This ensures that DFS is only started for nodes that have not been visited. DFS explores all the nodes connected to the `startNode` and marks them as `visited`. Since each node is visited only once, and each edge is processed only once during the DFS. The worst-case time complexity is $\Theta(V + E)$.  

## Plagiarism Acknowledgement

This assignment seemed pretty straight forward. The parts I had the most trouble with was implementing the algorithm using DFS and the time analysis. When implementing the algorithm I looked at two repositories to guide me through my implementation. https://github.com/COSC3020/detecting-cycles-KobeLimon21, and https://github.com/COSC3020/detecting-cycles-IshitaPatel18. These were very helpful with the analysis as well. 

“I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.”
