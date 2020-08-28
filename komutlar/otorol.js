//komutlarA
const Discord = require('discord.js');
const loglar = require('../ayarlar.json');
const db = require('quick.db');


var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const eğlence = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`STARUS PRO LEAGUE Bot Otorol Komutları`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
.addField("| Otorol Ayarlamak İçin -otorol-ayarla @rol #kanal| ", "Bu Kod Normal Kullanıcılar İçindir")
.addField("| Otorol Kapat|","Otorol Kapatmak İçin Bunu Yazın `-oto-rol-kapat`")
.addField("| !oto-rol-msg 》 Otorol Mesajını . | ", "Örnek: `-oto-rol-msg -server-, Sunucumuza Hoşgeldin, -uye-! -rol- Adlı Rolün Başarı İle Verildi Seninle Beraber, **-uyesayisi-** Kişiyiz.`")  

return message.channel.sendEmbed(eğlence);
 

};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
  
exports.help = {
  name: 'otorol',
  description: 'Komut kategorilerini gösterir.',
  usage: 'eğlence'
};



 

