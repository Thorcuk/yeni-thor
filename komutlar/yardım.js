const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
var PREFIX = ayarlar.prefix
const db = require ('quick.db')
exports.run = async (client, message, args) => {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('STARUS » Komutlar')
.setTimestamp()
.addField(`• ${PREFIX}**kullanıcı-yardım**    `,` **Kullanıcı komutlarını gösterir.** .`)
.addField(`• ${PREFIX}**yetkili-yardım**   `,` **Yetkili komutlarını gösterir.** .`)
.addField(`• ${PREFIX}**koruma-yardım**       `,` **Koruma komutlarını gösterir.** .`)
.addField(`• ${PREFIX}**eğlence-yardım**      `,` **eğlence komutlarını gösterir.** .`)



.setFooter('© 2020  Starus')
.setTimestamp()
message.channel.send(embed)
};

 //youtube.com/linlords
//teşekkürler AloneDesign

//linlordscode.com

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['komutlar','yardim','help'], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'müzik'
};
