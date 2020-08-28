const Discord = require('discord.js');
exports.run = function(client, message, args) {
    let ejderteamtr = message.mentions.users.first();
    if (!ejderteamtr) return message.channel.send(':x: **Çıkma Teklif Edeceğin Kişiyi Seçsene Kardeşim **');
    let dm = args.slice(1).join(' ');
    const dmat = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setTitle('Biri Sana Çıkma Teklifi Etti!:heart::heart:')
    .addField('Ne Cevap Vericen Acaba Bende Merak Ettim:laughing:', `Bu Arada Botu eklemeyi Unutma!`)
    .addField('Teklif Eden Kişi :', `➽ <@${message.author.id}>`)
    .setFooter('Çıkma Teklifi | SPL | ♛')
    ejderteamtr.sendEmbed(dmat);
    const dmtamam = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setTitle('Çıkma Teklifi Ettin :white_check_mark:')
    .setFooter('Çıkma Teklifi | SPL | ♛ ')
    message.channel.sendEmbed(dmtamam);
    
        message.channel.send(':white_check_mark: **Teklif Gönderildi! Bol Şans!:wink:**');
    };
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["çteklifet",'teklifet','çte'],
  permLevel: 0
};
exports.help = {
  name: 'çıkma-teklifi-et',
  description: 'Özel komut.',
  usage: 'çıkma-teklifi-et'
};
//EJDERTEAM
//V11
