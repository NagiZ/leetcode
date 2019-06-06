/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
//用矩阵的首行和首列作为标记，标记该行是否需要置零
var setZeroes = function(matrix) {
	var row = false,
		col = false;
	for(var i = 0; i < matrix[0].length; i++){
		if(matrix[0][i] === 0){
			row = true
			break
		}
	}
	for(var i = 0; i < matrix.length; i++){
		if(matrix[i][0] === 0){
			col = true
			break
		}
	}
	for(var i = 1; i < matrix.length; i++){
		for(var j = 1; j < matrix[i].length; j++){
			if(matrix[i][j] === 0){
				matrix[i][0] = 0
				matrix[0][j] = 0
			}
		}
	}
	for(var i = 1; i < matrix.length; i++){
		for(var j = 1; j < matrix[i].length; j++){
			if(matrix[i][0] === 0 || matrix[0][j] === 0){
				matrix[i][j] = 0
			}
		}
	}
	if(row){
		for(var i = 0; i < matrix[0].length; i++){
			matrix[0][i] = 0
		}
	}
	if(col){
		for(var i = 0; i < matrix.length; i++){
			matrix[i][0] = 0
		}
	}
	return matrix
};