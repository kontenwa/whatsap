exports.menu = (ucapan, pushname, ownerName, botName, tanggal, jam, runtime, prefix) => {
    return `${ucapan.data.result} ${pushname}

👑 Creator : ${ownerName}
🤖 Bot Name : ${botName}
📆 Tanggal : ${tanggal}
⌚ Jam : ${jam}
⏳ Runtime
${runtime}

*SIMPLE MENU*
❏ ${prefix}sticker
❏ ${prefix}attp
❏ ${prefix}nulis

*GROUP MENU*
❏ ${prefix}add
❏ ${prefix}kick
❏ ${prefix}welcome
❏ ${prefix}left
❏ ${prefix}setwelcome
❏ ${prefix}changewelcome
❏ ${prefix}delsetwelcome
❏ ${prefix}setleft
❏ ${prefix}changeleft
❏ ${prefix}delsetleft
❏ ${prefix}mute
❏ ${prefix}hidetag
❏ ${prefix}opengrup
❏ ${prefix}closegrup
❏ ${prefix}antilink
❏ ${prefix}antiwame
❏ ${prefix}checksewa
❏ ${prefix}setcmd
❏ ${prefix}delcmd

*DOWNLOAD MENU*
❏ ${prefix}instagram <error>
❏ ${prefix}youtube <error>
❏ ${prefix}tiktok

*STORE MENU*
❏ ${prefix}addlist
❏ ${prefix}dellist
❏ ${prefix}update
❏ ${prefix}list
❏ y < reply orderan >
❏ d < reply orderan >

*OWNER MENU*
❏ ${prefix}bc
❏ ${prefix}setlogo
❏ ${prefix}setprefix
❏ ${prefix}exif
❏ ${prefix}public
❏ ${prefix}self
❏ ${prefix}ban
❏ ${prefix}unban
❏ ${prefix}join
❏ ${prefix}addsewa
❏ ${prefix}delsewa
`
}
