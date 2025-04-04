BrowserFS.install(window);

BrowserFS.configure({ fs: "IndexedDB", options: {} }, function (err) {
    if (err) {
        console.error("Error configuring BrowserFS:", err);
        return;
    }

    window.fs = BrowserFS.BFSRequire("fs");
    window.path = BrowserFS.BFSRequire("path");
    window.cwd = '/';

    function color(name, string) {
        var colors = {
            cyan: '#0ff',
            white: '#fff',
            green: '#0f0' 
        };
        return colors[name] ? `[[;${colors[name]};]${string}]` : string;
    }

    const commands = {
        "welcome": "[[;#0ff;]Welcome to My GitHub Account!]",
        "name": "[[;#0ff;]Full Name: Masih Sheikhi]",
        "field": "[[;#0ff;]Field: Materials Science]",
        "interests": "[[;#0ff;]Interests: AI, Data, Frontend,\nEconomics, Physics and Musics:)]",
        "git last-commit": "[[;#f80;]commit lc998 (HEAD -> main)]"
    };

    var term = $('.term').terminal((command) => {
        if (commands[command]) {
            term.echo(commands[command]);
        } else {
            term.error(`[[;f00;]bash: ${command}: command not found]`);
        }
    }, {
        checkArity: false,
        greetings: '',
        prompt: function() {
            return [
                color('green', 'LuChristCho:$ '),
            ].join('');
        },
        onInit: function(term) {
            term.css('animation', 'crt-flicker 0.1s infinite alternate');
        }
    });

    function simulateTyping(commandsList) {
        let index = 0;
        function typeNext() {
            if (index < commandsList.length) {
                term.exec(commandsList[index], { typing: true, delay: 60 });
                index++;
                setTimeout(typeNext, 3500);
            }
        }
        setTimeout(typeNext, 2000);
    }

    simulateTyping([
    ]);
});