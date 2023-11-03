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
 *   Fri 03 November 2023, 09:14:21 PM [GMT]
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

const { EmbedBuilder } = require("discord.js");

class AboutMeEmbedBuilder extends EmbedBuilder {
	constructor() {
		super();
		this.aboutMeData = {
			name: "",
			age: null,
			gender: "",
			hobbies: "",
			languages: "",
		};
	}

	setName(name) {
		this.aboutMeData.name = name;
		return this;
	}

	setAge(age) {
		this.aboutMeData.age = age;
		return this;
	}

	setGender(gender) {
		this.aboutMeData.gender = gender;
		return this;
	}

	setHobbies(hobbies) {
		this.aboutMeData.hobbies = hobbies;
		return this;
	}

	setLanguages(languages) {
		this.aboutMeData.languages = languages;
		return this;
	}

	build() {
		this.setTitle(this.aboutMeData.name)
			.addFields({ name: "Age", value: this.aboutMeData.age || "Not specified", inline: false })
			.addFields({ name: "Gender", value: this.aboutMeData.gender || "Not specified", inline: false })
			.addFields({ name: "Hobbies", value: this.aboutMeData.hobbies || "Not specified", inline: false })
			.addFields({ name: "Languages", value: this.aboutMeData.languages || "Not specified", inline: false });

		return this;
	}
}

module.exports = {
	AboutMeBuilder,
	AboutMeEmbedBuilder,
};
