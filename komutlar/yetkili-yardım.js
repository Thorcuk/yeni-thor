const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
var PREFIX = ayarlar.prefix
const db = require ('quick.db')
exports.run = async (client, message, args) => {
const embed = new Discord.RichEmbed()
.setColor('GREEN')
.setTitle('STARUS » Yetkili Komutlar')
.setTimestamp()
.addField(`• ${PREFIX}**otorol ayarla <ayarla/sıfırla>**        `,`**Üyelerin sunucuya girdiklerinde verilecek rolü ayarlarsınız.**`)
.addField(`• ${PREFIX}**sil <0-99>**                            `,`**Mesajları silersiniz..**`)
.addField(`• ${PREFIX}**slowmode <süre>**                       `,`**Yavaş modu açarsınız.**`)
.addField(`• ${PREFIX}**sa-as <aç-kapat>**                      `,`**Sa-as açarsınız.**`)
.addField(`• ${PREFIX}**ban <@etiket>**                         `,`**Etiketlediniz bir kişiyi banlarsınız.**`)
.addField(`• ${PREFIX}**kilit <süre> <unlock>**                 `,`**Komutu girdiğiniz kanal yazmaya kapatılır.**`)
.addField(`• ${PREFIX}**çek <@etiket>**                         `,`**Etiketlediğiniz kişiyi yanınıza çekmek için ona istek gönderirsiniz.**`)
.addField(`• ${PREFIX}**çekilişyap <isim>**                     `,`**Normal bir çekliş yapmanı sağlar.**`)
.addField(`• ${PREFIX}**güvenlik <@kanal/sıfırla>**             `,`**kullanıcıların güvenli olup olmadını söyler.**`)
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
  name: 'yetkili-yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'kullanıcı-yardım'
};
