# Aboutme.JS

Created a NPM package for aboutme.js, it also accepts all fields that `EmbedBuilder` from discord.js does.

## Code Example
```js
async execute(interaction, client) {
    const aboutme = new AboutMeEmbedBuilder()
        .setName({ emoji: client.emoji.basic.help, value: 'HeCodes2Much' })
        .setAge({ emoji: '🎂', value: '35' })
        .setGender({ emoji: '♂️', value: 'Male' })
        .setHobbies({ emoji: '💻', value: 'Programming' })
        .setLanguages({ emoji: '🌐', value: 'Javascript, HTML, CSS, PHP and Python' })
        .setFlags({ emoji: '🏅', value: 'Developer' })
        .setBadges({ emoji: '🎖️', value: 'GoldBadge, Moderator' })
        .setID({ emoji: '🆔', value: '861270236475817994' })
        .setBirthday({ emoji: '🎈', value: 'June 16, 1988' })
        .setFavoriteColor({ emoji: '🌈', value: 'Blue' })
        .setFavoriteAnimals({ emoji: '🐱🐶', value: 'Cats, Dogs' })
        .setFavoriteFoods({ emoji: '🍕🍣', value: 'Pizza, Sushi' })
        .setFavoriteSongs({ emoji: '🎵', value: 'Song A, Song B' })
        .setFavoriteArtists({ emoji: '🎤', value: 'Artist X, Artist Y' })
        .setFavoriteMovies({ emoji: '🎬', value: 'Movie 1, Movie 2' })
        .setFavoriteActors({ emoji: '🎭', value: 'Actor A, Actor B' })
        .setOrigin({ emoji: '🌍', value: 'Earth' })
        .setStatus({ emoji: '🟢', value: 'Online' })
        .setFooter({ text: 'About Me', iconURL: interaction.user.displayAvatarURL({ dynamic: true, size: 512 }) })
        .build();

    await interaction.reply({ embeds: [aboutme] });
},
```