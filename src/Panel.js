export class Panel {
	constructor(anchor) {
		this.anchor = anchor;
		this.dom = document.createElement('pre');
		this.dom.classList.add('devui-panel');
		this.positionate();
		this.elements = {};
		document.body.appendChild(this.dom);
	}

	addElement(element) {
		this.elements[element.name] = element;
		this.dom.appendChild(element.container);
		this.updateDisplay();
		return element;
	}

	updateDisplay() {
		//if (this.elements > 0) {
			this.dom.classList.add('devui-panel--show');
		//} else {
		//	this.dom.style.display = 'none';
		//}
	}

	positionate() {
		switch (this.anchor.v) {
			case 'top':
				this.dom.style.top = '0';
				break;
			case 'bottom':
				this.dom.style.bottom = '0';
		}

		switch (this.anchor.h) {
			case 'left':
				this.dom.style.left = '0';
				break;
			case 'right':
				this.dom.style.right = '0';
		}
	}

	get(name) {
		return this.elements[name];
	}
}