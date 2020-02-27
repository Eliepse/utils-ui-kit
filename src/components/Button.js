import {Component} from '../Component';

export class Button extends Component {
	constructor(name, label) {
		super(name);
		this.listener = () => {};
		this.dom = document.createElement('button');
		this.dom.innerText = label || this.name;
		this.dom.addEventListener('click', () => {this.listener();});
		this.container.appendChild(this.dom);
	}

	listen(callback) {
		this.listener = callback;
	}
}