function alignWordStart() {
    for (i = 0; i < wordUser.length; i++) {
        wordStart += wordUser[i];
    }
}

function alignWordEnd() {
    for (let j = wordUser.length - 1; j >= 0; j--) {
      // console.log(wordUser[j]);
        wordEnd += wordUser[j];
    }
}