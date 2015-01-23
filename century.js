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