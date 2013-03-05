function drawGrid(c,background) {
	if ( (typeof background === 'undefined') || (background === 'background') ) {
		c.fillStyle = '#56a5c3';
		c.fillRect(0,0,g.w.total,g.h.total);
		c.beginPath();
	}

	var i;
	
	for(i=1;i<h.count;i++) {
		c.moveTo(0,g.h.single*i);
		c.lineTo(g.w.total,g.h.single*i);
	}
	for(i=1;i<g.w.count;i++) {
		c.moveTo(g.w.single*i,0);
		c.lineTo(g.w.single*i,h.total);
	}
	c.stroke();
}
	
function getMousePos(canvas, event) {//get the mouse's position within the canvas
	var boundBox = canvas.getBoundingClientRect();
	return {
		x: event.clientX - boundBox.left,
		y: event.clientY - boundBox.top,
	};
}

function getMouseSquare(canvas,event) {//get the square that was clicked in
	var boundBox = canvas.getBoundingClientRect();
	return {
		x: Math.floor((event.clientX - boundBox.left)/(w.single))*w.single,
		y: Math.floor((event.clientY - boundBox.top)/(h.single))*h.single
	};
}

function setListener(gameStatus,extraVal) {
	$(ocean).off('click');
	switch(gameStatus) {
		case "fire":
			$(ocean).on('click',fire);
			console.log('firing...');
			break;
		case "placeShipStart":
			$(ocean).on('click',{size:extraVal},placeShipStart);
			console.log('placing ship size:' + extraVal);		
			break;
		case "placeShipEnd":
			console.log('end mouse move');
			$(ocean).off('mousemove');
			break;	
	}
}

function checkDirection(x1,y1,x2,y2) {
	var dx = x2-x1;
	var dy = y2-y1;
	
	if ( Math.abs(dx) > Math.abs(dy) ) {
		if (dx > 0)
			return 'right';
		else
			return 'left'; 
	} else {
		if (dy > 0)
			return 'down';
		else
			return 'up';
	}
}