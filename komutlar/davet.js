const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
var prefix = ayarlar.prefix
const db = require ('quick.db')
exports.run = async (client, message, args) => {
const embed = new Discord.RichEmbed()
.setColor('#FF0000')
.setTitle('Linkler »')
.setTimestamp()
.setDescription("**\n[Botu Ekle](https://discord.com/oauth2/authorize?client_id=744990839339483276&scope=bot&permissions=8)**")
.setFooter('© 2020  STARUS & Thor')
.setTimestamp()
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['davetim','invite','linkler'], 
  permLevel: 0 
};

exports.help = {
  name: 'davet',
  description: 'Tüm komutları gösterir.',
  usage: 'müzik'
};
