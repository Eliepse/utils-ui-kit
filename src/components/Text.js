import {Component} from '../Component';

export class Text extends Component {
	constructor(name, defaultValue) {
		super(name);
		this.dom = document.createElement('span');
		this.dom.innerText = defaultValue || '';
		this.container.appendChild(this.dom);
	}

	text(text) {
		this.dom.innerText = text;
	}

	html(html) {
		this.dom.innerHTML = html;
	}
}