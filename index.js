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
 *   Fri 03 November 2023, 10:06:42 PM [GMT]
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
			name: null,
			age: null,
			gender: null,
			hobbies: null,
			languages: null,
			flags: null,
			badges: null,
			id: null,
			birthday: null,
			favoriteColor: null,
			favoriteAnimals: null,
			favoriteFoods: null,
			favoriteSongs: null,
			favoriteArtists: null,
			favoriteMovies: null,
			favoriteActors: null,
			origin: null,
			status: null,
		};
		this.build();
	}

	setName(name) {
		this.aboutMeData.name = name;
		this.build();
		return this;
	}

	setAge(age) {
		this.aboutMeData.age = age;
		this.build();
		return this;
	}

	setGender(gender) {
		this.aboutMeData.gender = gender;
		this.build();
		return this;
	}

	setHobbies(hobbies) {
		this.aboutMeData.hobbies = hobbies;
		this.build();
		return this;
	}

	setLanguages(languages) {
		this.aboutMeData.languages = languages;
		this.build();
		return this;
	}

	setFlags(flags) {
		this.aboutMeData.flags = flags;
		this.build();
		return this;
	}

	setBadges(badges) {
		this.aboutMeData.badges = badges;
		this.build();
		return this;
	}

	setID(id) {
		this.aboutMeData.id = id;
		this.build();
		return this;
	}

	setBirthday(birthday) {
		this.aboutMeData.birthday = birthday;
		this.build();
		return this;
	}

	setFavoriteColor(color) {
		this.aboutMeData.favoriteColor = color;
		this.build();
		return this;
	}

	setFavoriteAnimals(animals) {
		this.aboutMeData.favoriteAnimals = animals;
		this.build();
		return this;
	}

	setFavoriteFoods(foods) {
		this.aboutMeData.favoriteFoods = foods;
		this.build();
		return this;
	}

	setFavoriteSongs(songs) {
		this.aboutMeData.favoriteSongs = songs;
		this.build();
		return this;
	}

	setFavoriteArtists(artists) {
		this.aboutMeData.favoriteArtists = artists;
		this.build();
		return this;
	}

	setFavoriteMovies(movies) {
		this.aboutMeData.favoriteMovies = movies;
		this.build();
		return this;
	}

	setFavoriteActors(actors) {
		this.aboutMeData.favoriteActors = actors;
		this.build();
		return this;
	}

	setOrigin(origin) {
		this.aboutMeData.origin = origin;
		this.build();
		return this;
	}

	setStatus(status) {
		this.aboutMeData.status = status;
		this.build();
		return this;
	}

	build() {
		this.setTitle(this.aboutMeData.name);

		const fields = [];

		if (this.aboutMeData.age !== null) {
			fields.push({ name: "Age", value: this.aboutMeData.age, inline: true });
		}

		if (this.aboutMeData.gender !== null) {
			fields.push({ name: "Gender", value: this.aboutMeData.gender, inline: true });
		}

		if (this.aboutMeData.hobbies !== null) {
			fields.push({ name: "Hobbies", value: this.aboutMeData.hobbies, inline: true });
		}

		if (this.aboutMeData.languages !== null) {
			fields.push({ name: "Languages", value: this.aboutMeData.languages, inline: true });
		}

		if (this.aboutMeData.flags !== null) {
			fields.push({ name: "Flags", value: this.aboutMeData.flags, inline: true });
		}

		if (this.aboutMeData.badges !== null) {
			fields.push({ name: "Badges", value: this.aboutMeData.badges, inline: true });
		}

		if (this.aboutMeData.id !== null) {
			fields.push({ name: "ID", value: this.aboutMeData.id, inline: true });
		}

		if (this.aboutMeData.birthday !== null) {
			fields.push({ name: "Birthday", value: this.aboutMeData.birthday, inline: true });
		}

		if (this.aboutMeData.favoriteColor !== null) {
			fields.push({ name: "Favorite Color", value: this.aboutMeData.favoriteColor, inline: true });
		}

		if (this.aboutMeData.favoriteAnimals !== null) {
			fields.push({ name: "Favorite Animals", value: this.aboutMeData.favoriteAnimals, inline: true });
		}

		if (this.aboutMeData.favoriteFoods !== null) {
			fields.push({ name: "Favorite Foods", value: this.aboutMeData.favoriteFoods, inline: true });
		}

		if (this.aboutMeData.favoriteSongs !== null) {
			fields.push({ name: "Favorite Songs", value: this.aboutMeData.favoriteSongs, inline: true });
		}

		if (this.aboutMeData.favoriteArtists !== null) {
			fields.push({ name: "Favorite Artists", value: this.aboutMeData.favoriteArtists, inline: true });
		}

		if (this.aboutMeData.favoriteMovies !== null) {
			fields.push({ name: "Favorite Movies", value: this.aboutMeData.favoriteMovies, inline: true });
		}

		if (this.aboutMeData.favoriteActors !== null) {
			fields.push({ name: "Favorite Actors", value: this.aboutMeData.favoriteActors, inline: true });
		}

		if (this.aboutMeData.origin !== null) {
			fields.push({ name: "Origin", value: this.aboutMeData.origin, inline: true });
		}

		if (this.aboutMeData.status !== null) {
			fields.push({ name: "Status", value: this.aboutMeData.status, inline: true });
		}

		this.addFields(fields);

		return this;
	}
}

module.exports = {
	AboutMeBuilder,
	AboutMeEmbedBuilder,
};
