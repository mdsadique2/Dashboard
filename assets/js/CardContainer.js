class CardContainer {
	constructor (data, parentContainer) {
		this.parentContainer = parentContainer;
		this.cardData = data;
		this.colorGenerated = [];
	}

	randomNumber (max) {
		var n = Math.floor(Math.random() * Math.floor(max));
		var length = this.colorGenerated.length;
		if (this.colorGenerated.indexOf(n) > -1) {
			n = this.randomNumber(max);
		}
		return n;
	}

	updateLastColorCode () {
		if (this.colorGenerated.length <= 9) {
			return;
		}
		var lastCode = this.colorGenerated[this.colorGenerated.length - 1];
		this.colorGenerated = [lastCode];
	}

	init() {
		var docFragment = document.createDocumentFragment();
		this.cardData.forEach((elm,index) => {
			var card = new Card(elm);
			card.createCard();
			var markup = card.getCardMarkup();
			var colorCode = this.randomNumber(8);
			this.colorGenerated.push(colorCode);
			this.updateLastColorCode();
			markup.classList.add('bg-'+colorCode);
			docFragment.appendChild(markup);
		});
		var markup = docFragment.children;
		this.parentContainer.appendChild(docFragment);
	}
}


CardContainer.prototype.lib = new Common();
