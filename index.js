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
 *   Fri 03 November 2023, 11:55:40 PM [GMT]
 *
 *Description:
 *   aboutme.js NPM Package
 *
 *Dependencies:
 *   nodejs
 **/

class AboutMeBuilder {
	constructor() {
		this.name = null;
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
			name: {
				emoji: null,
				value: null,
			},
			age: {
				emoji: null,
				value: null,
			},
			gender: {
				emoji: null,
				value: null,
			},
			hobbies: {
				emoji: null,
				value: null,
			},
			languages: {
				emoji: null,
				value: null,
			},
			flags: {
				emoji: null,
				value: null,
			},
			badges: {
				emoji: null,
				value: null,
			},
			id: {
				emoji: null,
				value: null,
			},
			birthday: {
				emoji: null,
				value: null,
			},
			favoriteColor: {
				emoji: null,
				value: null,
			},
			favoriteAnimals: {
				emoji: null,
				value: null,
			},
			favoriteFoods: {
				emoji: null,
				value: null,
			},
			favoriteSongs: {
				emoji: null,
				value: null,
			},
			favoriteArtists: {
				emoji: null,
				value: null,
			},
			favoriteMovies: {
				emoji: null,
				value: null,
			},
			favoriteActors: {
				emoji: null,
				value: null,
			},
			origin: {
				emoji: null,
				value: null,
			},
			status: {
				emoji: null,
				value: null,
			},
		};

		this.setOrder = []; // Maintain the order in which properties were set
	}

	setName({ emoji, value }) {
		this.aboutMeData.name.emoji = emoji;
		this.aboutMeData.name.value = value;
		this.setOrder.push("name");
		return this;
	}

	setAge({ emoji, value }) {
		this.aboutMeData.age.emoji = emoji;
		this.aboutMeData.age.value = value;
		this.setOrder.push("age");
		return this;
	}

	setGender({ emoji, value }) {
		this.aboutMeData.gender.emoji = emoji;
		this.aboutMeData.gender.value = value;
		this.setOrder.push("gender");
		return this;
	}

	setHobbies({ emoji, value }) {
		this.aboutMeData.hobbies.emoji = emoji;
		this.aboutMeData.hobbies.value = value;
		this.setOrder.push("hobbies");
		return this;
	}

	setLanguages({ emoji, value }) {
		this.aboutMeData.languages.emoji = emoji;
		this.aboutMeData.languages.value = value;
		this.setOrder.push("languages");
		return this;
	}

	setFlags({ emoji, value }) {
		this.aboutMeData.flags.emoji = emoji;
		this.aboutMeData.flags.value = value;
		this.setOrder.push("flags");
		return this;
	}

	setBadges({ emoji, value }) {
		this.aboutMeData.badges.emoji = emoji;
		this.aboutMeData.badges.value = value;
		this.setOrder.push("badges");
		return this;
	}

	setID({ emoji, value }) {
		this.aboutMeData.id.emoji = emoji;
		this.aboutMeData.id.value = value;
		this.setOrder.push("id");
		return this;
	}

	setBirthday({ emoji, value }) {
		this.aboutMeData.birthday.emoji = emoji;
		this.aboutMeData.birthday.value = value;
		this.setOrder.push("birthday");
		return this;
	}

	setFavoriteColor({ emoji, value }) {
		this.aboutMeData.favoriteColor.emoji = emoji;
		this.aboutMeData.favoriteColor.value = value;
		this.setOrder.push("favoriteColor");
		return this;
	}

	setFavoriteAnimals({ emoji, value }) {
		this.aboutMeData.favoriteAnimals.emoji = emoji;
		this.aboutMeData.favoriteAnimals.value = value;
		this.setOrder.push("favoriteAnimals");
		return this;
	}

	setFavoriteFoods({ emoji, value }) {
		this.aboutMeData.favoriteFoods.emoji = emoji;
		this.aboutMeData.favoriteFoods.value = value;
		this.setOrder.push("favoriteFoods");
		return this;
	}

	setFavoriteSongs({ emoji, value }) {
		this.aboutMeData.favoriteSongs.emoji = emoji;
		this.aboutMeData.favoriteSongs.value = value;
		this.setOrder.push("favoriteSongs");
		return this;
	}

	setFavoriteArtists({ emoji, value }) {
		this.aboutMeData.favoriteArtists.emoji = emoji;
		this.aboutMeData.favoriteArtists.value = value;
		this.setOrder.push("favoriteArtists");
		return this;
	}

	setFavoriteMovies({ emoji, value }) {
		this.aboutMeData.favoriteMovies.emoji = emoji;
		this.aboutMeData.favoriteMovies.value = value;
		this.setOrder.push("favoriteMovies");
		return this;
	}

	setFavoriteActors({ emoji, value }) {
		this.aboutMeData.favoriteActors.emoji = emoji;
		this.aboutMeData.favoriteActors.value = value;
		this.setOrder.push("favoriteActors");
		return this;
	}

	setOrigin({ emoji, value }) {
		this.aboutMeData.origin.emoji = emoji;
		this.aboutMeData.origin.value = value;
		this.setOrder.push("origin");
		return this;
	}

	setStatus({ emoji, value }) {
		this.aboutMeData.status.emoji = emoji;
		this.aboutMeData.status.value = value;
		this.setOrder.push("status");
		return this;
	}

	build() {
		this.setTitle(this.aboutMeData.name.value);
		const fields = [];

		for (const property of this.setOrder) {
			if (this.aboutMeData[property].emoji && this.aboutMeData[property].value) {
				const fieldName = property.charAt(0).toUpperCase() + property.slice(1); // Capitalize the first letter of the property name
				fields.push({
					name: `${this.aboutMeData[property].emoji} ${fieldName}`,
					value: `${this.aboutMeData[property].value}`,
					inline: this.aboutMeData[property]?.inline || false,
				});
			}
		}

		this.addFields(fields);
		return this;
	}
}

module.exports = {
	AboutMeBuilder,
	AboutMeEmbedBuilder,
};
