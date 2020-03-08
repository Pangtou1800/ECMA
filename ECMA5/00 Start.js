function greetMe(yourName) {
  console.log('Hello ' + yourName);
}

greetMe('World');

function testNumber() {
  console.log(Number(234));
  console.log(Number("342"));
  console.log(Number("aaa"));
  console.log(Number(''));
  console.log(Number(true));
  console.log(Number(false));
  console.log(Number(undefined));
  console.log(Number(null));
  console.log(parseInt('23 cats 33'));
  console.log(Number('42 cats'));
  console.log('S\tS\vS\nS');
  console.log(parseInt('\t\v12.34\n'));
  console.log(Number('\t\v12.34\n'));

  console.log(
    Number(
      {
        valueOf: function () {
          return 2;
        }
      }
    )
  );

  console.log(
    Number(
      {
        toString: function () {
          return 3;
        }
      }
    )
  )

  console.log(
    Number(
      {
        valueOf: function () {
          return 2;
        },
        toString: function () {
          return 3;
        }
      }
    )
  )
}



