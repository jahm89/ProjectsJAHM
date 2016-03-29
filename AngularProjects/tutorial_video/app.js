(function () {
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	app.controller('PanelController', function () {
		this.tab = 1;

		this.selectTab = function (setTab) {
			this.tab = setTab;
		};

		this.isSelected = function (checkTab) {
			 return this.tab === checkTab; 
		}; 
	});

	app.controller('ReviewController', function () {
		 this.review = {};
		 this.addReview = function (product) {
		 	this.review.createdOn = Date.now();
		 	product.reviews.push(this.review);
		 	this.review = {};
		 };
	});

	var gems = [
	{
		name: 'Dodecahedron',
		price: 4.34,
		description: '...',
		canPurchase: true,
		soldOut: false,
		images: [
			{
				full: '1.jpg'
			}
		],
		reviews:[
			{
				stars: 5,
				body: "I love this product",
				author: "joe@gmail.com"
			},
			{
				stars: 4,
				body: "I middle love this product",
				author: "joe@gmail.com"
			},
			{
				stars: 2,
				body: "I ate this product",
				author: "joe@gmail.com"
			}
		]
	},
	{
		name: 'Pentagonal Gem',
		price: 24.34,
		description: '...',
		canPurchase: true,
		soldOut: false,
		images: [
			{
				full: '2.jpg'
			}
		],
		reviews:[
			{
				stars: 5,
				body: "I love this product",
				author: "joe@gmail.com"
			},
			{
				stars: 4,
				body: "I middle love this product",
				author: "joe@gmail.com"
			},
			{
				stars: 2,
				body: "I ate this product",
				author: "joe@gmail.com"
			}
		]
	}
	];
})();
