const Discord = require('discord.js')
exports.run = (client, message, args) => {
  let user = message.mentions.users.first();
  if(!user) return message.channel.send('Öpüceğin birisini etiketlemelisin')
  if (user.id === message.author.id) return message.reply('Kendini emcükleyemessin olum sakin :D');
    
  if ( message.react(':heart_eyes:')) {
      var gif = [
      'https://tenor.com/view/kisses-gif-8534709', 'https://media.giphy.com/media/3oz8xIZrAhijabg69a/giphy.gif', 'https://media.giphy.com/media/l2JegJ1EAA2NIxEWY/giphy.gif', 'https://media.giphy.com/media/3o6ozHbQHZzDTxRjsA/giphy.gif', 'https://media.giphy.com/media/3o7TKqhF898sKm6opy/giphy.gif', 'https://media.giphy.com/media/3o72F3zlbWvP4kJp4c/giphy.gif','https://media.giphy.com/media/UVeDrtJTSD8L5QBTTx/giphy.gif','https://media.giphy.com/media/UVeDrtJTSD8L5QBTTx/giphy.gif'];
      var gifler = gif[Math.floor(Math.random() * gif.length)];
  }
    
    if (message.react(':heart_eyes:')) {
    const op = new Discord.RichEmbed()
    .setDescription(`<@${message.author.id}>` + ` <@${user.id}>'ı öptü <3`)
    .setColor('RANDOM')
    .setImage(gifler)
    return message.channel.send(op)
    }
  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'öp',
  description: 'öp',
  usage: 'öp'
};
//ejderteam
//v11
