import {Component} from '../Component';

export class Space extends Component{
	constructor(name, size = 1) {
		super(name);
		this.dom = document.createElement('div');
		this.dom.innerHTML = '&nbsp;';
		this.dom.style.height = size + 'em';
		this.container.appendChild(this.dom);
	}
}