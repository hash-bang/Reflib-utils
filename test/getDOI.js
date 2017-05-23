var util = require('..');
var expect = require('chai').expect;

describe('util.getDOI()', function() {

	it('should find a DOI in the DOI field', function() {
		expect(util.getDOI({doi: '10.1109/5.771073'})).to.equal('10.1109/5.771073');
		expect(util.getDOI({doi: 'http://doi.org/10.1109/5.771073'})).to.equal('10.1109/5.771073');
		expect(util.getDOI({doi: 'https://doi.org/10.1109/5.771073'})).to.equal('10.1109/5.771073');
		expect(util.getDOI({doi: 'nope'})).to.be.false;
	});

	it('should find a DOI in the URL array', function() {
		expect(util.getDOI({urls: ['foo', 'bar', '10.1109/5.771073', 'baz']})).to.equal('10.1109/5.771073');
		expect(util.getDOI({urls: ['http://google.com', 'http://doi.org/10.1109/5.771073']})).to.equal('10.1109/5.771073');
		expect(util.getDOI({urls: ['https://doi.org/10.1109/5.771073', 'https://bbc.co.uk']})).to.equal('10.1109/5.771073');
		expect(util.getDOI({urls: ['http://google.com', 'https://bbc.co.uk']})).to.be.false;
		expect(util.getDOI({urls: []})).to.be.false;
	});

});
