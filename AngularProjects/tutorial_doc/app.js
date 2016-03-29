(function(){
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.products = gem;
	});

	app.controller('PanelController', function(){
		this.tab = 1;

		this.selectTab = function(setTab) {
			 this.tab = setTab;
		}
		
	})

	var gem = [
	{
		name: 'Dodecahedron',
		price: 2.95,
		description: 'blablabla',
		canPurchase: true
	},
	{
		name: 'Pentagonal Gem',
		price: 5.95,
		description: 'blablabla',
		canPurchase: false
	}

	];
})();