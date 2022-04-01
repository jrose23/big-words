function defaultWords() {
    const defaultWordsArray = [
        'Palindrome',
        'Stereoscopic',
        'Vermillion',
        'Benchmark',
        'Terrestrial',
        'Hexadecimal',
        'Monotype',
        'Soliloquy',
        'Pneumatic',
        'Bombastic',
        'Intrinsic',
        'Hypothetical',
        'Anomalous',
        'Weevil',
        'Nomenclature',
        'Quadratic'
    ];

    return defaultWordsArray[Math.floor(Math.random() * defaultWordsArray.length)];
}

export default defaultWords;
