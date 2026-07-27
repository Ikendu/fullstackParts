// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.
//  You are given an array prerequisites where prerequisites[i] = [ai, bi]
//  indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

// Example 1:
// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0. So it is possible.

// Example 2:
// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false

function canFinishCourse(numCourses, prerequisites) {
  // Build Graph
  const graph = {};
  for (let i = 0; i < numCourses; i++) graph[i] = [];

  for (let [a, b] of prerequisites) graph[b].push(a);

  const visiting = new Set();
  const visited = new Set();

  for (let cos = 0; cos < numCourses; cos++) {
    if (!dfs(cos)) return false;
  }

  function dfs(course) {
    if (visiting.has(course)) return false;
    if (visited.has(course)) return true;

    visiting.add(course);

    for (let next of graph[course]) {
      if (!dfs(next)) return false;
    }
    visiting.delete(course);
    visited.add(course);
    return true;
  }
  return true;
}

// Testing
console.log(canFinishCourse(2, [[1, 0]]));
console.log(
  canFinishCourse(2, [
    [1, 0],
    [0, 1],
  ]),
);
