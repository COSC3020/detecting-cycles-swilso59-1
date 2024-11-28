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

This assignment seemed pretty straight forward. The parts I had the most trouble with were implementing the algorithm using DFS and the time analysis. When implementing the algorithm I looked at two repositories to guide me through my implementation. These helped me understand some of the core concepts like DFS, cycle detection, tracking visited nodes, and parent node handling node handling. From these repositories, I tried to create my own implementation for these concepts.
For DFS I used an iterative approach instead of a recursive method like in the veiwed repositories. Cycle detection, tracking visited nodes and current path, I knew I would need to do, I used sets for these as I have done before in previous assignments. Parent node handling was a part I had difficulty with as well. I stored it with the current node in the stack instead of passing it as a parameter like in the viewed repositories. These are the main sections I got the most help from using the repositories listed below.
- https://github.com/COSC3020/detecting-cycles-KobeLimon21
- https://github.com/COSC3020/detecting-cycles-IshitaPatel18. 

“I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.”
