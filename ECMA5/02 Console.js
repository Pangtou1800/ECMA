function testConsole() {
    console.log('Hello World');

    console.log('a', 'b', 'c');

    let number = 11 * 9;
    let color = 'red';
    console.log("%d %s ballons", number, color, 233);

    console.log("%cThis text is styled!\n%cAnother style!", "color: red; background: yellow; font-size: 24px", "color: blue; background: orange;");
}

function redefConsole() {
    ['log', 'info', 'warn', 'error'].forEach(
        function (method) {
            console[method] = console[method].bind(
                console,
                new Date().toISOString()
            );
        }
    );

    console.log("Error!");
}

function testConsole2() {
    let languages = [
        { name: 'JavaScript', fileExtension: '.js' },
        { name: 'TypeScript', fileExtension: '.ts' },
        { name: 'CoffeeScript', fileExtension: '.coffee' },
        { name: 'StrangeScript' }
    ];

    console.table(languages);

    let languages2 = {
        csharp: {
            name: "C#", paradigm: "object-oriented"
        },
        fsharp: {
            name: "F#", paradigm: "functional"
        }
    };

    console.table(languages2);
}

function testConsole3() {
    console.log({ f1: 'foo', f2: 'bar' });

    console.dir({ f1: 'foo', f2: 'bar' });

    let ctr = 10;
    console.assert(ctr > 9, "Ctr is bigger than 9!");
    console.assert(ctr < 9, "Ctr is smaller than 9!");

    console.time('Array initialize');

    let array = new Array(1000000);
    for (let i = array.length - 1; i > 0; i--) {
        array[i] = new Object();
    }

    console.timeEnd('Array initialize');
}

testConsole();

// redefConsole();

testConsole2();

testConsole3();
