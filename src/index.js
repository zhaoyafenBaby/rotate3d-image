var liList = document.getElementsByTagName('li');
var oLi = Array.prototype.slice.call(liList);

oLi.forEach(function(ele,index){
	ele.spec = getSpec(ele);
	ele.addEventListener('mouseenter',function(e){
		addClass(e,ele,'in');
	})
	ele.addEventListener('mouseleave', function(e){
		addClass(e,ele,'out');
	})
})

function getSpec(ele){
	return {
		w : ele.offsetWidth,
		h : ele.offsetHeight
	}
}

function getDirection(e,ele){
	var x = e.offsetX - ele.spec.w/2;
	var y = e.offsetY - ele.spec.h/2;

	var d = (Math.round((Math.atan2(y,x) * (180/Math.PI) + 180)/90) + 3) % 4;
	return d;
}	


function addClass(e,ele,dir){
	var d = getDirection(e,ele);
	var name = "";
	switch(d){
		case 0:
			name = "-top";
			break;
		case 1:
			name = "-right";
			break;
		case 2:
			name = "-bottom";
			break;
		case 3:
			name = "-left";
			break;
	}
	ele.className = dir + name;

}