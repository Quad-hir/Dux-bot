/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/2347082252014
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'Your Key',
}
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.ownername = 'DUX BOT MD'
// Other
global.owner = ['2347082252014','2347046411495','79818648925']
global.premium = ['2347082252014']
global.packname = 'Hisoka Morrow'
global.author = 'WhatsApp Bot'
global.wlcm = []
global.sessionName = './src/session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Make Dux Bot Admim!',
    owner: 'Bot Owner Special Features',
    group: 'This Feature can only be used.in groups!',
    private: 'This Feature Can only be used in Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: '𝖑𝖔𝖆𝖉𝖎𝖓𝖌...',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/jo.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
