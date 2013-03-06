function Game(countOfX,countOfY,ships,rules) {
	var board = document.getElementById('ocean');
	var context = board.getContext('2d'); //should tie to view
	
	var w = {
		'total' : board.width,			//total width (in px)
		'count' : countOfX,				//number of square wide
		'single' : board.width/countOfX	//width of 1 square
	};

	var h = {
		'total' : board.height,			//total height (in px)
		'count' : countOfY,					//number of squares high
		'single' : board.height/countOfY	//height of 1 square
	};
	
	this.ships = ships;
	this.rules = rules;
	
	var clickListener;
	var moveListener;
	
	var iOfX,iOfY; //temporary iterators
	var tiles = new Array();
	for(iOfX=0;iOfX<w.count;iOfX++) {
		for(iOfY=0;iOfY<h.count;iOfY++) {
			tiles["x" + iOfX + "y" + iOfY] = new Tile(iOfX,iOfY);
			console.log("x" + iOfX + "y" + iOfY);
		}
	}
}