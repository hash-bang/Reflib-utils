var doiRegex = require('doi-regex');

var utils = {};
module.exports = utils;


/**
* Cached return value of the NPM doiRegex
* @var {RegEx}
*/
utils.doiRegexCached = doiRegex();


/**
* Attempt to locate a reference DOI from its DOI + URL fields
* @param {Object} ref A valid reflib reference
* @return {string|boolean} Either the extracted DOI or boolean false
*/
utils.getDOI = function(ref) {
	if (ref.doi && utils.doiRegexCached.test(ref.doi)) return ref.doi.match(utils.doiRegexCached)[0];

	if (ref.urls) {
		var matching = ref.urls.filter(url => utils.doiRegexCached.test(url));
		if (matching.length == 1) return matching[0].match(utils.doiRegexCached)[0];
	}

	return false;
};
