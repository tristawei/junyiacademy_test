function reverse(word) {
    return word.split('').reverse().join('');
}

function reverseSentence(sentence) {
    return sentence.split(' ').map(word => reverse(word)).join(' ');
}

console.log(reverse('junyiacademy'));
console.log(reverseSentence('flipped class room is important'));