HL - Matrix transpose
const transpose = function (matrix) {
	let newMatrix = [];
	//need this loop to set proper size of new array
	for (let x = 0; x < matrix[0].length; x++) {
		newMatrix[x] = Array(matrix.length);
	}
	//loop to swap values in arrays
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			newMatrix[j][i] = matrix[i][j];
		}
	}

	return newMatrix;
};
//Do not edit this function.
const printMatrix = (matrix) => {
	for (const row of matrix) {
		for (const el of row) {
			process.stdout.write(el + " ");
		}
		process.stdout.write("\n");
	}
};

module.exports = transpose;