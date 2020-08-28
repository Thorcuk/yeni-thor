const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
var PREFIX = ayarlar.prefix
const db = require ('quick.db')
exports.run = async (client, message, args) => {
const embed = new Discord.RichEmbed()
.setColor('GREEN')
.setTitle('STARUS » Kullanıcı Komutlar')
.setTimestamp()
.addField(`• ${PREFIX}**ping**               `,`**Botun pingini gösterir.**`)
.addField(`• ${PREFIX}**istatistik**         `,`**Botun istatistiklerini gösterir.**`)
.addField(`• ${PREFIX}**bansay**             `,`**Sunucuda kaç kişi banlanmış?.**`)
.addField(`• ${PREFIX}**rol-info**           `,`**Yazdığın bir rolun bilgisini gösterir.**`)
.addField(`• ${PREFIX}**sunucu-bilgi**       `,`**Sunucunun bilgilerini gösterir.**`)
.addField(`• ${PREFIX}**emoji-bilgi**        `,`**İsmini yazdığınız emojinin bilgilerini atar.**`)
.addField(`• ${PREFIX}**hava-durumu**        `,`**Şehrinizdeki hava durumu göre bilirsiniz.**`)

.setFooter('© 2020  Starus')
.setTimestamp()
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['yy','yyardim','ykomutlar'], 
  permLevel: 0 
};

exports.help = {
  name: 'kullanıcı-yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'kullanıcı-yardım'
};
