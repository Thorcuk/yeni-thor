const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
var PREFIX = ayarlar.prefix
const db = require ('quick.db')
exports.run = async (client, message, args) => {
const embed = new Discord.RichEmbed()
.setColor('GREEN')
.setTitle('STARUS » Eğlence Komutlar')
.setTimestamp()
.addField(`• ${PREFIX}**1v1** `,`**Etietlediğiniz kişiyle vs atarsınız.**   .`)
.addField(`• ${PREFIX}**kralol**`,`**kral olmak için kullana bilirsiniz.**`)
.addField(`• ${PREFIX}**güzelsözler**`,`**güzelsözler komutuyla güzel sözler göre bilirsiniz.**`)
.addField(`• ${PREFIX}**çıkma-teklifi-et**`,`**birine çıkma teklifi edebilirsin.**`)
.addField(`• ${PREFIX}**öp**   `,`**Etiketlediğiniz kişiyi öpersiniz.**.`)
.addField(`• ${PREFIX}**çayiç**   `,`**Çay içersin.**.`)
.addField(`• ${PREFIX}**çekiç**   `,`**Çekiç Fırlatırsın.**.`)
.addField(`• ${PREFIX}**wasted**   `,`**Fotografınıza Wasted Yazısı Ekler.**.`)
.setFooter('© 2020  Starus')
.setTimestamp()
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['yy','eğlence-yardım','ekomutlar'], 
  permLevel: 0 
};

exports.help = {
  name: 'eğlence-yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'eğlence-yardım'
};
