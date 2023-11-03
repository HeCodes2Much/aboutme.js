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
 *   Fri 03 November 2023, 11:22:32 PM [GMT]
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
	}

	// Setter methods for all properties
	setName({ emoji, value }) {
		this.aboutMeData.name.emoji = emoji;
		this.aboutMeData.name.value = value;
		return this;
	}

	setAge({ emoji, value }) {
		this.aboutMeData.age.emoji = emoji;
		this.aboutMeData.age.value = value;
		return this;
	}

	setGender({ emoji, value }) {
		this.aboutMeData.gender.emoji = emoji;
		this.aboutMeData.gender.value = value;
		return this;
	}

	setHobbies({ emoji, value }) {
		this.aboutMeData.hobbies.emoji = emoji;
		this.aboutMeData.hobbies.value = value;
		return this;
	}

	setLanguages({ emoji, value }) {
		this.aboutMeData.languages.emoji = emoji;
		this.aboutMeData.languages.value = value;
		return this;
	}

	setFlags({ emoji, value }) {
		this.aboutMeData.flags.emoji = emoji;
		this.aboutMeData.flags.value = value;
		return this;
	}

	setBadges({ emoji, value }) {
		this.aboutMeData.badges.emoji = emoji;
		this.aboutMeData.badges.value = value;
		return this;
	}

	setID({ emoji, value }) {
		this.aboutMeData.id.emoji = emoji;
		this.aboutMeData.id.value = value;
		return this;
	}

	setBirthday({ emoji, value }) {
		this.aboutMeData.birthday.emoji = emoji;
		this.aboutMeData.birthday.value = value;
		return this;
	}

	setFavoriteColor({ emoji, value }) {
		this.aboutMeData.favoriteColor.emoji = emoji;
		this.aboutMeData.favoriteColor.value = value;
		return this;
	}

	setFavoriteAnimals({ emoji, value }) {
		this.aboutMeData.favoriteAnimals.emoji = emoji;
		this.aboutMeData.favoriteAnimals.value = value;
		return this;
	}

	setFavoriteFoods({ emoji, value }) {
		this.aboutMeData.favoriteFoods.emoji = emoji;
		this.aboutMeData.favoriteFoods.value = value;
		return this;
	}

	setFavoriteSongs({ emoji, value }) {
		this.aboutMeData.favoriteSongs.emoji = emoji;
		this.aboutMeData.favoriteSongs.value = value;
		return this;
	}

	setFavoriteArtists({ emoji, value }) {
		this.aboutMeData.favoriteArtists.emoji = emoji;
		this.aboutMeData.favoriteArtists.value = value;
		return this;
	}

	setFavoriteMovies({ emoji, value }) {
		this.aboutMeData.favoriteMovies.emoji = emoji;
		this.aboutMeData.favoriteMovies.value = value;
		return this;
	}

	setFavoriteActors({ emoji, value }) {
		this.aboutMeData.favoriteActors.emoji = emoji;
		this.aboutMeData.favoriteActors.value = value;
		return this;
	}

	setOrigin({ emoji, value }) {
		this.aboutMeData.origin.emoji = emoji;
		this.aboutMeData.origin.value = value;
		return this;
	}

	setStatus({ emoji, value }) {
		this.aboutMeData.status.emoji = emoji;
		this.aboutMeData.status.value = value;
		return this;
	}

	build() {
		this.setTitle(this.aboutMeData.name.value);
		const fields = [];

		if (this.aboutMeData.age && this.aboutMeData.age.emoji && this.aboutMeData.age.value) {
			fields.push({ name: `${this.aboutMeData.age.emoji} Age`, value: `${this.aboutMeData.age.value}`, inline: true });
		}
		if (this.aboutMeData.gender && this.aboutMeData.gender.emoji && this.aboutMeData.gender.value) {
			fields.push({ name: `${this.aboutMeData.gender.emoji} Gender`, value: `${this.aboutMeData.gender.value}`, inline: true });
		}
		if (this.aboutMeData.hobbies && this.aboutMeData.hobbies.emoji && this.aboutMeData.hobbies.value) {
			fields.push({ name: `${this.aboutMeData.hobbies.emoji} Hobbies`, value: `${this.aboutMeData.hobbies.value}`, inline: true });
		}
		if (this.aboutMeData.languages && this.aboutMeData.languages.emoji && this.aboutMeData.languages.value) {
			fields.push({ name: `${this.aboutMeData.languages.emoji} Languages`, value: `${this.aboutMeData.languages.value}`, inline: true });
		}
		if (this.aboutMeData.flags && this.aboutMeData.flags.emoji && this.aboutMeData.flags.value) {
			fields.push({ name: `${this.aboutMeData.flags.emoji} Flags`, value: `${this.aboutMeData.flags.value}`, inline: true });
		}
		if (this.aboutMeData.badges && this.aboutMeData.badges.emoji && this.aboutMeData.badges.value) {
			fields.push({ name: `${this.aboutMeData.badges.emoji} Badges`, value: `${this.aboutMeData.badges.value}`, inline: true });
		}
		if (this.aboutMeData.id && this.aboutMeData.id.emoji && this.aboutMeData.id.value) {
			fields.push({ name: `${this.aboutMeData.id.emoji} ID`, value: `${this.aboutMeData.id.value}`, inline: true });
		}
		if (this.aboutMeData.birthday && this.aboutMeData.birthday.emoji && this.aboutMeData.birthday.value) {
			fields.push({ name: `${this.aboutMeData.birthday.emoji} Birthday`, value: `${this.aboutMeData.birthday.value}`, inline: true });
		}
		if (this.aboutMeData.favoriteColor && this.aboutMeData.favoriteColor.emoji && this.aboutMeData.favoriteColor.value) {
			fields.push({ name: `${this.aboutMeData.favoriteColor.emoji} Favorite Color`, value: `${this.aboutMeData.favoriteColor.value}`, inline: true });
		}
		if (this.aboutMeData.favoriteAnimals && this.aboutMeData.favoriteAnimals.emoji && this.aboutMeData.favoriteAnimals.value) {
			fields.push({ name: `${this.aboutMeData.favoriteAnimals.emoji} Favorite Animals`, value: `${this.aboutMeData.favoriteAnimals.value}`, inline: true });
		}
		if (this.aboutMeData.favoriteFoods && this.aboutMeData.favoriteFoods.emoji && this.aboutMeData.favoriteFoods.value) {
			fields.push({ name: `${this.aboutMeData.favoriteFoods.emoji} Favorite Foods`, value: `${this.aboutMeData.favoriteFoods.value}`, inline: true });
		}
		if (this.aboutMeData.favoriteSongs && this.aboutMeData.favoriteSongs.emoji && this.aboutMeData.favoriteSongs.value) {
			fields.push({ name: `${this.aboutMeData.favoriteSongs.emoji} Favorite Songs`, value: `${this.aboutMeData.favoriteSongs.value}`, inline: true });
		}
		if (this.aboutMeData.favoriteArtists && this.aboutMeData.favoriteArtists.emoji && this.aboutMeData.favoriteArtists.value) {
			fields.push({ name: `${this.aboutMeData.favoriteArtists.emoji} Favorite Artists`, value: `${this.aboutMeData.favoriteArtists.value}`, inline: true });
		}
		if (this.aboutMeData.favoriteMovies && this.aboutMeData.favoriteMovies.emoji && this.aboutMeData.favoriteMovies.value) {
			fields.push({ name: `${this.aboutMeData.favoriteMovies.emoji} Favorite Movies`, value: `${this.aboutMeData.favoriteMovies.value}`, inline: true });
		}
		if (this.aboutMeData.favoriteActors && this.aboutMeData.favoriteActors.emoji && this.aboutMeData.favoriteActors.value) {
			fields.push({ name: `${this.aboutMeData.favoriteActors.emoji} Favorite Actors`, value: `${this.aboutMeData.favoriteActors.value}`, inline: true });
		}
		if (this.aboutMeData.origin && this.aboutMeData.origin.emoji && this.aboutMeData.origin.value) {
			fields.push({ name: `${this.aboutMeData.origin.emoji} Origin`, value: `${this.aboutMeData.origin.value}`, inline: true });
		}
		if (this.aboutMeData.status && this.aboutMeData.status.emoji && this.aboutMeData.status.value) {
			fields.push({ name: `${this.aboutMeData.status.emoji} Status`, value: `${this.aboutMeData.status.value}`, inline: true });
		}

		this.addFields(fields);
		return this;
	}
}

module.exports = {
	AboutMeBuilder,
	AboutMeEmbedBuilder,
};
