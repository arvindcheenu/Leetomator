const { Composer, Extra } = require('micro-bot')
const bot = new Composer()

bot.start((ctx) => {
    ctx.replyWithHtml("Hello, " + ctx.message.from.first_name + "!\n\n" +
        "I'm Leetomator, an Automator who'll help you speak the language of the Eleet.\n" +
        "Just type @leetspeak_bot inline, and let me handle the rest.\n\n <i>Shall. We. <b>Begin?</b></i>")
    ctx.replyWithSticker('CAADAgADbAIAApzW5woYlt5rV_hKIgI');
})

bot.on('inline_query', (ctx) => {
    let text = ctx.update.inline_query.query
    if (text.length != 0) {
        return ctx.answerInlineQuery([{
                type: "article",
                id: ctx.update.inline_query.id + "0",
                text: "Easy Mode",
                title: "Easy Mode",
                description: convertToLeet("easy", text).trim(),
                thumb_url: "http://i68.tinypic.com/hwc1a0.png",
                input_message_content: {
                    message_text: convertToLeet("easy", text).trim(),
                    parse_mode: 'Markdown'
                }
            },
            {
                type: "article",
                id: ctx.update.inline_query.id + "1",
                text: "Normal Mode",
                title: "Normal Mode",
                description: convertToLeet("normal", text).trim(),
                thumb_url: "http://i67.tinypic.com/a0ao1j.png",
                input_message_content: {
                    message_text: convertToLeet("normal", text).trim(),
                    parse_mode: 'Markdown'
                }
            },
            {
                type: "article",
                id: ctx.update.inline_query.id + "2",
                text: "Hard Mode",
                title: "Hard Mode",
                description: convertToLeet("hard", text).trim(),
                thumb_url: "http://i68.tinypic.com/291jern.png",
                input_message_content: {
                    message_text: convertToLeet("hard", text).trim(),
                    parse_mode: 'Markdown'
                }
            },
            {
                type: "article",
                id: ctx.update.inline_query.id + "3",
                text: "Insane Mode",
                title: "Insane Mode",
                description: convertToLeet("insane", text).trim(),
                thumb_url: "http://i65.tinypic.com/33fdnch.png",
                input_message_content: {
                    message_text: convertToLeet("insane", text).trim(),
                    parse_mode: 'Markdown'
                }
            }
        ])
    }
})

function convertToLeet(command, text) {
    let code = '`'
    if (command == "easy") {
        text = text.replace(/a/gi, "4")
        text = text.replace(/e/gi, "3")
        text = text.replace(/i/gi, "1")
        text = text.replace(/o/gi, "0")
        text = text.replace(/u/gi, "(_)")
        return code + text + code
    } else if (command == "normal") {
        text = text.replace(/a/gi, "4")
        text = text.replace(/c/gi, "[")
        text = text.replace(/d/gi, "|)")
        text = text.replace(/e/gi, "3")
        text = text.replace(/g/gi, "6")
        text = text.replace(/h/gi, "#")
        text = text.replace(/i/gi, "1")
        text = text.replace(/j/gi, "]")
        text = text.replace(/k/gi, "|<")
        text = text.replace(/l/gi, "1")
        text = text.replace(/m/gi, "/V\\")
        text = text.replace(/n/gi, "|\\|")
        text = text.replace(/o/gi, "0")
        text = text.replace(/p/gi, "|>")
        text = text.replace(/q/gi, "0_")
        text = text.replace(/s/gi, "5")
        text = text.replace(/t/gi, "7")
        text = text.replace(/u/gi, "(_)")
        text = text.replace(/v/gi, "\\/")
        text = text.replace(/w/gi, "\\/\\/")
        text = text.replace(/x/gi, "><")
        text = text.replace(/z/gi, "2")
        text = text.replace(/f/gi, "ph")
        text = text.replace(/b/gi, "I3")
        text = text.replace(/r/gi, "I2")
        text = text.replace(/y/gi, "j")
        return code + text + code
    } else if (command == "hard") {
        var rand = 0
        var a = ["4", "@", "/\\"]
        rand = randomize(a) - 1
        text = text.replace(/a/gi, a[rand])
        var a = ["[", "{", "<"]
        rand = randomize(a) - 1
        text = text.replace(/c/gi, a[rand])
        var a = [")", "|)", "(|", "[)", "|>"]
        rand = randomize(a) - 1
        text = text.replace(/d/gi, a[rand])
        var a = ["3", "&", "ë"]
        rand = randomize(a) - 1
        text = text.replace(/e/gi, a[rand])
        var a = ["&", "6", "9", "(_+", "(?,", "[,", "{,"]
        rand = randomize(a) - 1
        text = text.replace(/g/gi, a[rand])
        var a = ["#", "/-/", "[-]", "]-[", ")-(,", "(-)", ":-:"]
        rand = randomize(a) - 1
        text = text.replace(/h/gi, a[rand])
        var a = ["1", "[]", "|", "!", "]["]
        rand = randomize(a) - 1
        text = text.replace(/i/gi, a[rand])
        var a = [",_|", "_|", "._|", "._]", "_]"]
        rand = randomize(a) - 1
        text = text.replace(/j/gi, a[rand])
        var a = [">|", "|<", "/<", "1<", "|(", "|{"]
        rand = randomize(a) - 1
        text = text.replace(/k/gi, a[rand])
        var a = ["1", "7", "|_", "|"]
        rand = randomize(a) - 1
        text = text.replace(/l/gi, a[rand])
        var a = ["^/", "|\\|", "/\\/", "[\\]", "<\\>", "{\\}"]
        rand = randomize(a) - 1
        text = text.replace(/n/gi, a[rand])
        var a = ["(0)", "()", "[]", "<>"]
        rand = randomize(a) - 1
        text = text.replace(/o/gi, a[rand])
        var a = ["|*", "|º", "|^", "|>", "|7"]
        rand = randomize(a) - 1
        text = text.replace(/p/gi, a[rand])
        var a = ["(_,)", "9", "()_", "2", "0_", "<|", "&"]
        rand = randomize(a) - 1
        text = text.replace(/q/gi, a[rand])
        var a = ["5", "$", "2"]
        rand = randomize(a) - 1
        text = text.replace(/s/gi, a[rand])
        var a = ["7", "+", "-|-", "']['", "~|~"]
        rand = randomize(a) - 1
        text = text.replace(/t/gi, a[rand])
        var a = ["\\/", "|/", "\\|"]
        rand = randomize(a) - 1
        text = text.replace(/v/gi, a[rand])
        var a = ["\\/\\/", "VV", "\\N", "'//", "\\\\'", "\\^/", "\\|/", "\\_|_/", "\\_:_/"]
        rand = randomize(a) - 1
        text = text.replace(/w/gi, a[rand])
        var a = ["><", "}{", ")(", "]["]
        rand = randomize(a) - 1
        text = text.replace(/x/gi, a[rand])
        var a = ["2", "7_", "-/_", "%"]
        rand = randomize(a) - 1
        text = text.replace(/z/gi, a[rand])
        var a = ["/\\/\\", "/V\\", "[V]", "[]V[]", "|\\/|", "^^", "<\\/>", "]\\/["]
        rand = randomize(a) - 1
        text = text.replace(/m/gi, a[rand])
        var a = ["ph", "|=_", "|#", "/="]
        rand = randomize(a) - 1
        text = text.replace(/f/gi, a[rand])
        var a = ["I3", "8", "13", "|3", "!3", "(3"]
        rand = randomize(a) - 1
        text = text.replace(/b/gi, a[rand])
        var a = ["I2", "2", "12", "|9", "|`", "/2"]
        rand = randomize(a) - 1
        text = text.replace(/r/gi, a[rand])
        var a = ["j", "'/'", "7", "\\|/", "\\//"]
        rand = randomize(a) - 1
        text = text.replace(/y/gi, a[rand])
        var a = ["(_)", "|_|", "V", "L|"]
        rand = randomize(a) - 1
        text = text.replace(/u/gi, a[rand])
        return code + text + code
    } else if (command == "insane") {
        var rand = 0
        var a = ["4", "@", "/\\", "Д"]
        rand = randomize(a) - 1
        text = text.replace(/a/gi, a[rand])
        var a = ["[", "{", "<", "©"]
        rand = randomize(a) - 1
        text = text.replace(/c/gi, a[rand])
        var a = [")", "|)", "(|", "[)", "|>", ">", "|]", "|}"]
        rand = randomize(a) - 1
        text = text.replace(/d/gi, a[rand])
        var a = ["3", "&", "ë", "£", "€", "[-", "|=-"]
        rand = randomize(a) - 1
        text = text.replace(/e/gi, a[rand])
        var a = ["&", "6", "9", "(_+", "(?,", "[,", "{,", "gee"]
        rand = randomize(a) - 1
        text = text.replace(/g/gi, a[rand])
        var a = ["#", "/-/", "[-]", "]-[", ")-(,", "(-)", ":-:", "1-1", "|+|"]
        rand = randomize(a) - 1
        text = text.replace(/h/gi, a[rand])
        var a = ["1", "[]", "|", "!", "][", "!"]
        rand = randomize(a) - 1
        text = text.replace(/i/gi, a[rand])
        var a = [",_|", "_|", "._|", "._]", "_]"]
        rand = randomize(a) - 1
        text = text.replace(/j/gi, a[rand])
        var a = [">|", "|<", "/<", "1<", "|(", "|{"]
        rand = randomize(a) - 1
        text = text.replace(/k/gi, a[rand])
        var a = ["1", "7", "|_", "|", "£"]
        rand = randomize(a) - 1
        text = text.replace(/l/gi, a[rand])
        var a = ["^/", "|\\|", "/\\/", "[\\]", "<\\>", "{\\}", "И", "ท"]
        rand = randomize(a) - 1
        text = text.replace(/n/gi, a[rand])
        var a = ["(0)", "()", "[]", "<>", "oh", "Ø"]
        rand = randomize(a) - 1
        text = text.replace(/o/gi, a[rand])
        var a = ["|*", "|º", "|^", "|>", "|7", "[]D"]
        rand = randomize(a) - 1
        text = text.replace(/p/gi, a[rand])
        var a = ["(_,)", "9", "()_", "2", "0_", "<|", "&"]
        rand = randomize(a) - 1
        text = text.replace(/q/gi, a[rand])
        var a = ["5", "$", "2", "§", "ehs", "es"]
        rand = randomize(a) - 1
        text = text.replace(/s/gi, a[rand])
        var a = ["7", "+", "-|-", "']['", "~|~", "†"]
        rand = randomize(a) - 1
        text = text.replace(/t/gi, a[rand])
        var a = ["\\/", "|/", "\\|"]
        rand = randomize(a) - 1
        text = text.replace(/v/gi, a[rand])
        var a = ["\\/\\/", "VV", "\\N", "'//", "\\\\'", "\\^/", "\\|/", "\\_|_/", "\\_:_/", "Ш", "Щ", "พ", "v²"]
        rand = randomize(a) - 1
        text = text.replace(/w/gi, a[rand])
        var a = ["><", "}{", ")(", "][", "×", "ecks"]
        rand = randomize(a) - 1
        text = text.replace(/x/gi, a[rand])
        var a = ["2", "7_", "-/_", "%"]
        rand = randomize(a) - 1
        text = text.replace(/z/gi, a[rand])
        var a = ["/\\/\\", "/V\\", "[V]", "[]V[]", "|\\/|", "^^", "<\\/>", "]\\/[", "nn", "|T|", "JTI"]
        rand = randomize(a) - 1
        text = text.replace(/m/gi, a[rand])
        var a = ["ph", "|=_", "|#", "/=", "v", "ƒ"]
        rand = randomize(a) - 1
        text = text.replace(/f/gi, a[rand])
        var a = ["I3", "8", "13", "|3", "!3", "(3", "j3"]
        rand = randomize(a) - 1
        text = text.replace(/b/gi, a[rand])
        var a = ["I2", "2", "12", "|9", "|`", "/2", "®", "[z", "Я"]
        rand = randomize(a) - 1
        text = text.replace(/r/gi, a[rand])
        var a = ["j", "'/'", "7", "\\|/", "\\//", "¥", "Ч"]
        rand = randomize(a) - 1
        text = text.replace(/y/gi, a[rand])
        var a = ["(_)", "|_|", "V", "L|", "µ", "บ"]
        rand = randomize(a) - 1
        text = text.replace(/u/gi, a[rand])
        return code + text + code
    }
}

function randomize(arr) {
    var random = 0
    var length = arr.length
    random = Math.floor((Math.random() * length) + 1)
    return random
}

module.exports = bot