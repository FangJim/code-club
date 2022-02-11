/**
 * @param {number} n
 * @return {number[][]}
 */

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function buildDirectionLoop() {
    let right = new Node([0, 1]);
    let down = new Node([1, 0]);
    let left = new Node([0, -1]);
    let top = new Node([-1, 0]);

    right.next = down;
    down.next = left;
    left.next = top;
    top.next = right;

    return right;
}

const generateMatrix = function (n) {
    let currentDirection = buildDirectionLoop();
    let matrix = Array(n).fill().map(() => Array(n).fill(0));
    let row = 0, column = 0;
    for (let i = 1; i <= n * n; i++) {
        matrix[row][column] = i
        if (row + (currentDirection.data)[0] == (n || -1) || column + (currentDirection.data)[1] == (n || -1)) {//邊界
            currentDirection = currentDirection.next;
        }
        else if (matrix[row + (currentDirection.data)[0]][column + (currentDirection.data)[1]] != 0) {//有值
            currentDirection = currentDirection.next;
        }
        row += (currentDirection.data)[0];
        column += (currentDirection.data)[1];
    }
    return matrix
}
generateMatrix(3)