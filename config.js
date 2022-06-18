/**
   * Create By Quadhir.
   * Contact Me on wa.me/2347082252014
   * Follow https://github.com/Quad-hir
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

// Other
global.owner = ['2347082252014']
global.premium = ['2347082252014']
global.packname = 'Dux-bot'
global.author = 'WhatsApp Bot'
global.sessionName = 'Dux'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Admin Group Special Features!',
    botAdmin: 'Bot Must Become Admin First!',
    owner: 'Owner Bot Special Features',
    group: 'Feature Used For Group Only!',
    private: 'Feature Used For Private Chat Only!',
    bot: 'Feature Only For Number Bot Users',
    wait: 'Loading...',
    endLimit: 'Your Daily Limit Has Expired, Limit Will Reset Every 12Hours',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
