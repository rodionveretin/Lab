class Graph {
  constructor() {
    this.vertices = {}; // список смежности графа
  }

  addVertex(value) {
    if (!this.vertices[value]) {
      this.vertices[value] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    if (!(vertex1 in this.vertices) || !(vertex2 in this.vertices)) {
      throw new Error('В графе нет таких вершин');
    }

    if (!this.vertices[vertex1].includes(vertex2)) {
      this.vertices[vertex1].push(vertex2);
    }
    if (!this.vertices[vertex2].includes(vertex1)) {
      this.vertices[vertex2].push(vertex1);
    }
  }
  bfs2(startVertex) {
    let list = this.vertices;
    let queue = [startVertex];
    let visited = { [startVertex]: 1 };

    // кратчайшее расстояние от стартовой вершины
    let distance = { [startVertex]: 0 };
    // предыдущая вершина в цепочке
    let previous = { [startVertex]: null };

    function handleVertex(vertex) {
      let neighboursList = list[vertex];

      neighboursList.forEach(neighbour => {
        if (!visited[neighbour]) {
          visited[neighbour] = 1;
          queue.push(neighbour);
          // сохраняем предыдущую вершину
          previous[neighbour] = vertex;
          // сохраняем расстояние 
          distance[neighbour] = distance[vertex] + 1;
        }
      });
    }

    // перебираем вершины из очереди, пока она не опустеет
    while (queue.length) {
      let activeVertex = queue.shift();
      handleVertex(activeVertex);
    }

    return { distance, previous }
  }
}

let graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
graph.addVertex('G');
graph.addVertex('H');

graph.addEdge('A', 'B');
graph.addEdge('B', 'F');
graph.addEdge('F', 'G');
graph.addEdge('A', 'C');
graph.addEdge('C', 'D');
graph.addEdge('D', 'F');
graph.addEdge('C', 'E');
graph.addEdge('E', 'F');

let data = graph.bfs2('A');

console.log(graph);

console.log(data);