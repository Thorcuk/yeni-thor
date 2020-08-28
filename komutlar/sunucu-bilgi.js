const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');
const moment = require('moment');

exports.run = async (client, message, params) => {  
  
    var konum = 'Konumlar'
        if(message.guild.region === "russia") {
            var konum = 'Rusya'
        }
        if(message.guild.region === "us-west") {
            var konum = 'Batı Amerika'
        }
        if(message.guild.region === "us-south") {
            var konum = 'Güney Amerika'
        }
        if(message.guild.region === "us-east") {
            var konum = 'Doğu Amerika'
        }
        if(message.guild.region === "us-central") {
            var konum = 'Amerika'
        }
        if(message.guild.region === "brazil") {
            var konum = 'Brezilya'
        }
        if(message.guild.region === "singapore") {
            var konum = 'Singapur'
        }
        if(message.guild.region === "sydney") {
            var konum = 'Sidney'
        }
        if(message.guild.region === "eu-west") {
            var konum = 'Batı Avrupa'
        }
        if(message.guild.region === "eu-south") {
            var konum = 'Güney Avrupa'
        }
        if(message.guild.region === "eu-east") {
            var konum = 'Doğu Avrupa'
        }
        if(message.guild.region === "eu-central") {
            var konum = 'Orta Avrupa'
        }
        if(message.guild.region === "hongkong") {
            var konum = 'Hong Kong'
        }
        if(message.guild.region === "japan") {
            var konum = 'Japonya'
        }
  
  var tarih = 'Tarihler'
        if(moment(message.guild.createdAt).format('MM') === '01') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/01/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '02') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/02/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '03') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/03/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '04') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/04/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '05') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/05/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '06') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/06/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '07') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/07/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '08') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/08/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '09') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/09/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '10') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/10/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '11') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/11/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '12') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/12/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }  
  
  const sunucubilgi = new Discord.RichEmbed()
  .setAuthor(`Bot Adı Sunucu Bilgi`, message.guild.iconURL)
  .setColor("333333")
  .addField(`» **Kullanıcılar** [${message.guild.memberCount}]`, `${message.guild.members.filter(m => m.user.presence.status === "online").size} Aktif \n ${message.guild.members.filter(m => m.user.presence.status === "idle").size} Boşta \n  ${message.guild.members.filter(m => m.user.presence.status === "dnd").size} Rahatsız Etmeyin \n ${message.guild.members.filter(m => m.user.presence.status === "offline").size} Çevrim Dışı \n   ${message.guild.members.filter(m => m.user.bot).size} Bot`, true)
  .addField(`» **Kanallar**`, `Toplam Kanal Sayısı : ${message.guild.channels.size} \nToplam Yazı Kanalı : ${message.guild.channels.filter(c => c.type === "text").size} \nToplam Ses Kanalı : ${message.guild.channels.filter(c => c.type === "voice").size}`, true)
  .addField(`» **Sunucu Kurucusu**`, message.guild.owner, true)
  .addField(`» **Rol Sayısı**`, `${message.guild.roles.size}`, true)
  .addField(`» **Doğrulama Seviyesi**`, message.guild.verificationLevel, true)
  
  .addField(`» Sunucu Bölgesi`, konum, true)
  .addField(`» Oluşturulma Tarihi`, tarih, true)
  .addField(`» Sunucu İD`,message.guild.id ,true)
  
   .addField('Roller:', message.guild.roles.map(role => role.name).join(', '), true)
  .setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(sunucubilgi);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sunucu-bilgisi"],
  permLevel: 0
};

exports.help = {
  name: 'sunucu-bilgi',
  description: 'Sunucunun bilgilerini gönderir.',
  usage: 'sunucu-bilgi'
};