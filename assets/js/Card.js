class Card  {
	constructor (data) {
		this.data = data;
		this.markup = null;
	}

	createCard () {
		this.markup = this.lib.createElement('div', 'card');
		var a = this.lib.createElement('a', '', this.data.linkText);
		a.setAttribute('href', this.data.link);
		a.setAttribute('target', '_blank');

		var icon = this.lib.createElement('i', 'icon '+this.data.icon);
		this.markup.appendChild(icon);
		this.markup.appendChild(a);
	}

	appendCardToParent(parentContainer) {
		parentContainer.appendChild(this.markup);
	}

	getCardMarkup(){
		return this.markup;
	}
}


Card.prototype.lib = new Common();