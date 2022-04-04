function defaultWords() {
    const defaultWordsArray = [
        'Palindrome',
        'Stereoscopic',
        'Vermillion',
        'Terrestrial',
        'Hexadecimal',
        'Monochromatic',
        'Soliloquy',
        'Pneumatic',
        'Bombastic',
        'Intrinsic',
        'Hypothetical',
        'Anomalous',
        'Weevil',
        'Nomenclature',
        'Quadratic',
        'Amphisbaena',
        'Nonplussed',
        'Pantagruelian',
        'Ouroboros',
        'Rendezvous',
        'Troglodyte',
        'Fastidious',
        'Prototypical',
        'Concatenation'
    ];

    return defaultWordsArray[Math.floor(Math.random() * defaultWordsArray.length)];
}

export default defaultWords;
