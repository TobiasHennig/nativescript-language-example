var Language = require("nativescript-language");

describe("Language", function() {
	it("getstring", function() {
		expect(Language.getString("hello")).toBe("Hello!");
	});
	it("getStringArray", function() {
		var array = Language.getStringArray("planets_array");
		expect(array.length).toBe(4);
		expect(array[0]).toBe("Mercury");
		expect(array.join()).toBe("Mercury,Venus,Earth,Mars");
	});
	it("getQuantityString(one)", function() {
		expect(Language.getQuantityString("numberOfSongsAvailable", 1)).toBe("Song");
	});
	it("getQuantityString(other)", function() {
		expect(Language.getQuantityString("numberOfSongsAvailable", 10)).toBe("Songs");
	});
});
