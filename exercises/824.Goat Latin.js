//Solution: 
var toGoatLatin = function(S) {
    var voewls = {
        'a': 1,
        'e': 1,
        'i': 1,
        'o': 1,
        'u': 1
    };
    return S.split(' ').map((word, index) => {
        var s = word.charAt(0);
        if (voewls[s.toLowerCase()]) {
            word += 'ma';
        } else {
            word = word.substring(1) + s + 'ma';
        }
        while(index >= 0){
            word += 'a';
            index --
        }
        return word
    }).join(' ');
};