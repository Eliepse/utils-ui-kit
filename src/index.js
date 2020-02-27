import {Panel} from './Panel';
import {Button} from './components/Button';
import {Text} from './components/Text';
import {LabelText} from './components/LabelText';
import {Switch} from './components/Switch';
import {Space} from './components/Space';

const app = {
	panels: {
		'TL': new Panel({v: 'top', h: 'left'}),
		'TR': new Panel({v: 'top', h: 'right'}),
		'BL': new Panel({v: 'bottom', h: 'left'}),
		'BR': new Panel({v: 'bottom', h: 'right'}),
	},
};

app.Text = function (name, defaultValue = '') {return new Text(name, defaultValue)};
app.Button = function (name, label = null) {return new Button(name, label)};
app.Switch = function (name, label, defaulValue = false) {return new Switch(name, label, defaulValue)};
app.LabelText = function (name, label, defaultValue = '') {return new LabelText(name, label, defaultValue)};
app.Space = function (name, size = 1) {return new Space(name, size)};

app.getPanel = function (id) {
	return this.panels[id];
};


app.addOn = function (panelID, element) {
	this.panels[panelID].addElement(element);
	return element;
};

app.add = function (element) {
	return this.addOn('TL', element);
};

app.getOn = function (panelID, name) {
	return this.getPanel(panelID).get(name);
};

app.get = function (name) {
	return this.getOn('TL', name);
};

export const DevUI = app;