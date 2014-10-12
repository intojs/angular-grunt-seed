describe('Home section -', function() {
  
  	beforeEach(module('app.home'));

	it('"reverse" filter should reverse a string', inject(function(reverseFilter) {
		expect(reverseFilter('123')).toEqual('321');
		expect(reverseFilter('ABCD')).toEqual('DCBA');
	}));
});