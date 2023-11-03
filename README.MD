# Aboutme.JS

Created a NPM package for aboutme.js, it also accepts all fields that `EmbedBuilder` from discord.js does.

## Code Example
```js
async execute(interaction) {
    const aboutme = new AboutMeEmbedBuilder()
        .setName('HeCodes2Much')
        .setAge(null)
        .setGender('Male')
        .setHobbies('Programming')
        .setLanguages('Javascript, HTML, CSS, PHP and Python')
        .setFooter({ text: 'About Me' })
        .build();

    await interaction.reply({ embeds: [aboutme] });
},
```