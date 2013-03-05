	function Tile(x,y) {
		this.x = x;
		this.y = y;
		
		this.ships = {player1:false,player2:false};
		this.shots = {player1:false,player2:false};
		
		//console.log("tile x"+x+"y"+y);
	}