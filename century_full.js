//OLD CODE

function century(parent, element) {
	var elHeight = centuryCSS(element, “height”);
	var elWidth = centuryCSS(element, “width”);
	
	var parHeight = centuryCSS(parent, “height”);
	var parWidth = centuryCSS(parent, “width”);

	// detect border
	if(centuryCSS(element, “borderTop”) === null || centuryCSS(element, “borderTop”).indexOf(“0px none”) !== -1) {
		// if there is no border
	} else {
		// if there is a border
		elHeight += centuryCSS(element, “borderTopWidth”);
		centuryCSS(element, “marginTop”, (parHeight/2 - elHeight));
	}
}

// extremely amazing function that saves time & lives
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

//NEW CODE

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

//MINIFIED CODE

function century(t,e){centuryCSS(e,"position","absolute"),centuryCSS(e,"left","50%"),centuryCSS(e,"top","50%"),centuryCSS(e,"margin-left",centuryCSS(e,"width")/2),centuryCSS(e,"margin-top",centuryCSS(e,"height")/2)}function centuryCSS(t,e,n){for(var u=document.querySelectorAll(t),S=0;S<u.length;S++){if(""==n||null===n||!n)return document.defaultView.getComputedStyle(u[S],null)[e];u[S].style[e]=n}}
