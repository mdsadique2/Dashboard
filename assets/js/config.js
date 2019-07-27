function getConfigs () {
	var configs = [
		{
			displayName: 'Mail App',
			urlAppender: 'MailAppStatic',
			icon: 'fa fa-envelope-o'
		},
		{
			displayName: 'Calendar',
			urlAppender: 'Calendar',
			icon: 'fa fa-calendar-o'

		},
		{
			displayName: 'Bounce',
			urlAppender: 'Bounce',
			icon: 'fa fa-futbol-o'
		},
		{
			displayName: 'JS Console',
			urlAppender: 'Console2',
			icon: 'fa fa-terminal'
		},
		{
			displayName: 'Compare Products',
			urlAppender: 'CompareProducts',
			icon: 'fa fa-columns'
		},
		{
			displayName: 'Book Management',
			urlAppender: 'BookManagement',
			icon: 'fa fa-book'
		}

	]
	var baseUrl = 'https://mdsadique2.github.io/';
	var configsToReturn = [];
	configs.forEach((elm,index) => {
		var obj = {
			linkText: elm.displayName,
			link: baseUrl + elm.urlAppender,
			icon: elm.icon
		}
		configsToReturn.push(obj);
	});

	return configsToReturn;

}
