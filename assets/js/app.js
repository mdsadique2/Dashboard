(function () {
	// reference of initial containers where list is rendered
	var mainContainer = document.getElementsByClassName('mainContainer')[0];
	var cardContainer = mainContainer.getElementsByClassName('body')[0]



	var configs = getConfigs();
	console.log(configs);


	(function init () {
		var app = new CardContainer(configs, cardContainer);
		app.init();
	})();

})()

