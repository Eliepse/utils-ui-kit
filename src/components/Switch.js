import {Component} from '../Component';

export class Switch extends Component {
	constructor(name, label, defaultValue) {
		super(name);
		this.state = defaultValue || false;
		this.label = label;
		this.dom = document.createElement('button');
		this.listenClick = () => {};
		this.listenerOn = () => {};
		this.listenerOff = () => {};

		this.dom.addEventListener('click', () => {
			this.listenClick();
			if (this.state) {
				this.state = false;
				this.listenerOff();
			} else {
				this.state = true;
				this.listenerOn();
			}
			this.updateButtonText();
		});
		this.container.appendChild(this.dom);
		this.updateButtonText();
	}

	listenClick(callback) {
		this.listenerClick = callback;
		return this;
	}

	listenOn(callback) {
		this.listenerOn = callback;
		return this;
	}

	listenOff(callback) {
		this.listenerOff = callback;
		return this;
	}

	updateButtonText() {
		this.dom.innerText = this.label + ': ' + (this.state ? 'on' : 'off');
	}
}