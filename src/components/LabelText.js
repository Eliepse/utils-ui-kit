import {Component} from '../Component';

export class LabelText extends Component {
	constructor(name, label, defaultValue) {
		super(name);
		this.dom = document.createElement('span');
		this.label = document.createElement('span');
		this.label.innerHTML = label + ':&nbsp;';
		this.dom.innerText = defaultValue || '';
		this.container.appendChild(this.label);
		this.container.appendChild(this.dom);
	}

	text(text) {
		this.dom.innerText = text;
	}

	html(html) {
		this.dom.innerHTML = html;
	}
}