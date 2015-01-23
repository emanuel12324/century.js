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

function century(par, el) {
	var parW = parseInt(centuryCSS(par, "width"));
	var parH = parseInt(centuryCSS(par, "height"));
	var elOW = document.querySelector(el).offsetWidth;
	var elOH = document.querySelector(el).offsetHeight;
	centuryCSS(el, "position", "absolute");
	centuryCSS(el, "left", (parW - elOW)/2+3);
	centuryCSS(el, "top", (parH - elOH)/2+3);
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

function century(e,t){var n=parseInt(centuryCSS(e,"width"));var r=parseInt(centuryCSS(e,"height"));var i=document.querySelector(t).offsetWidth;var s=document.querySelector(t).offsetHeight;centuryCSS(t,"position","absolute");centuryCSS(t,"left",(n-i)/2+3);centuryCSS(t,"top",(r-s)/2+3)}function centuryCSS(e,t,n){var r=document.querySelectorAll(e);for(var i=0;i<r.length;i++){if(n==""||n===null||!n){return document.defaultView.getComputedStyle(r[i],null)[t]}else{r[i].style[t]=n}}}