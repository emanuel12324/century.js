function century(parent, element) {
	centuryCSS(element, "position", "absolute");
	centuryCSS(element, "left", "50%");
    centuryCSS(element, "top", "50%");
    centuryCSS(element, "margin-left", centuryCSS(element, "width")/2);
    centuryCSS(element, "margin-top", centuryCSS(element, "height")/2);
}

function centuryCSS(elem, property, value) { 
	var el = document.querySelectorAll(elem); 
	for(var i=0;i<el.length;i++) { 
		if(value == "" || value === null || !value) { 
			return document.defaultView.getComputedStyle(el[i], null)[property]; 
		} else { 
			el[i].style[property] = value; 
		} 
	} 
}
