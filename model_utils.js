
async function createModel() {
    const modelURL = 'http://127.0.0.1:5500/model/model.json';
    const metadataURL = "http://127.0.0.1:5500/model/metadata.json";

    const recognizer = speechCommands.create('BROWSER_FFT', undefined, modelURL, metadataURL);
    await recognizer.ensureModelLoaded();
    return recognizer;
}



// async function init(render) {
//     const recognizer = await createModel();
//     const classLabels = recognizer.wordLabels(); 
//     console.log(recognizer)
 



//     recognizer.listen(result => {
//        console.log(result)
//     }, {
//         includeSpectrogram: true,
//         probabilityThreshold: 0.75,
//         invokeCallbackOnNoiseAndUnknown: true,
//         overlapFactor: 0.50
//     });
    


// }




async function init() {
    const recognizer = await createModel();
    console.log(recognizer.listen)
  

    // listen() takes two arguments:
    // 1. A callback function that is invoked anytime a word is recognized.
    // 2. A configuration object with adjustable fields
    recognizer.listen(result => {
    console.log('hi')
        const scores = result.scores; // probability of prediction for each class
        // render the probability scores per class
     
    }, {
        includeSpectrogram: true, // in case listen should return result.spectrogram
        probabilityThreshold: 0.75,
        invokeCallbackOnNoiseAndUnknown: true,
        overlapFactor: 0.50 // probably want between 0.5 and 0.75. More info in README
    });

}