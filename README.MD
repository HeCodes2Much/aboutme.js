# Aboutme.JS

Created a NPM package for aboutme.js, it also accepts all fields that `EmbedBuilder` from discord.js does.

## Code Example
```js
async execute(interaction, client) {
    const aboutme = new AboutMeEmbedBuilder()
        .setName({ emoji: '🎂', value: '```HeCodes2Much```', inline: true })
        .setID({ emoji: '🆔', value: '```861270236475817994```', inline: true })
        .setAge({ emoji: '🎂', value: '```35```', inline: true })
        .setGender({ emoji: '♂️', value: '```Male```', inline: true })
        .setHobbies({ emoji: '💻', value: '```Programming```', inline: true })
        .setLanguages({ emoji: '🌐', value: '```Javascript, HTML, CSS, PHP and Python```', inline: true })
        .setFlags({ emoji: '🏅', value: '```Developer```', inline: true })
        .setBadges({ emoji: '🎖️', value: '```GoldBadge, Moderator```', inline: true })
        .setBirthday({ emoji: '🎈', value: '```June 16, 1988```', inline: true })
        .setFavoriteColor({ emoji: '🌈', value: '```Blue```', inline: true })
        .setFavoriteAnimals({ emoji: '🐱🐶', value: '```Cats, Dogs```', inline: true })
        .setFavoriteFoods({ emoji: '🍕🍣', value: '```Pizza, Sushi```', inline: true })
        .setFavoriteSongs({ emoji: '🎵', value: '```Song A, Song B```', inline: true })
        .setFavoriteArtists({ emoji: '🎤', value: '```Artist X, Artist Y```', inline: true })
        .setFavoriteMovies({ emoji: '🎬', value: '```Movie 1, Movie 2```', inline: true })
        .setFavoriteActors({ emoji: '🎭', value: '```Actor A, Actor B```', inline: true })
        .setOrigin({ emoji: '🌍', value: '```Earth```', inline: true })
        .setStatus({ emoji: '🟢', value: '```Online```', inline: true })
        .setFooter({ text: 'About Me', iconURL: interaction.user.displayAvatarURL({ dynamic: true, size: 512 }) })
        .build();

    await interaction.reply({ embeds: [aboutme] });
},
```