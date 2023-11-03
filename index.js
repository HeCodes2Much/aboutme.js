/*-*-coding:utf-8 -*-
 *Auto updated?
 *   Yes
 *File:
 *   index.js
 *Author:
 *   HeCodes2Much [wayne6324@gmail.com]
 *Github:
 *   https://github.com/HeCodes2Much/
 *
 *Created:
 *   Fri 03 November 2023, 08:30:00 PM [GMT]
 *Modified:
 *   Fri 03 November 2023, 08:30:24 PM [GMT]
 *
 *Description:
 *   aboutme.js NPM Package
 *
 *Dependencies:
 *   nodejs
 **/

class AboutMeBuilder {
	constructor() {
		this.name = "";
	}

	setName(name) {
		this.name = name;
		return this;
	}
}

class AboutMeEmbedBuilder {
	constructor() {
		this.name = "";
		this.age = null;
		this.gender = "";
		this.hobbies = "";
		this.languages = "";
		this.footer = { text: "" };
	}

	setName(name) {
		this.name = name;
		return this;
	}

	setAge(age) {
		this.age = age;
		return this;
	}

	setGender(gender) {
		this.gender = gender;
		return this;
	}

	setHobbies(hobbies) {
		this.hobbies = hobbies;
		return this;
	}

	setLanguages(languages) {
		this.languages = languages;
		return this;
	}

	setFooter(footer) {
		this.footer = footer;
		return this;
	}
}

module.exports = {
	AboutMeBuilder,
	AboutMeEmbedBuilder,
};
