const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
var PREFIX = ayarlar.prefix
const db = require ('quick.db')
exports.run = async (client, message, args) => {
const embed = new Discord.RichEmbed()
.setColor('GREEN')
.setTitle('STARUS » Koruma Komutlar')
.setTimestamp()
.addField(`• ${PREFIX}**reklam-taraması**   `,`**Oynuyor kısmında reklam olanları sıralar.**.`)
.addField(`• ${PREFIX}**küfür <aç-kapat>**      `,`**Sunucuda küfür edilemez.**,`)
.addField(`• ${PREFIX}**reklam-engel**      `,`**Sunucuda reklam yapılamaz.**,`)
.addField(`• ${PREFIX}**capslock-engelleme**`,`**Üyelerin capslock ile yazmalarını yasaklarsınız.**,`)
.addField(`• ${PREFIX}**sağ-tık-kick**      `,`**Sağ tık kick atıldığında kickleyen kişinin yetkileri alınır**.`)
.addField(`• ${PREFIX}           ` ,`.`)

.setFooter('© 2020  Starus')
.setTimestamp()
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['yy','koruma-yardım','ykomutlar'], 
  permLevel: 0 
};

exports.help = {
  name: 'koruma-yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'koruma'
};
