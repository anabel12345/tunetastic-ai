
async function createModel() {
    const modelURL = 'https://anabel12345.github.io/tunetastic-ai/model/model.json';
    const metadataURL = 'https://anabel12345.github.io/tunetastic-ai/model/metadata.json';

    const recognizer = speechCommands.create('BROWSER_FFT', undefined, modelURL, metadataURL);
    await recognizer.ensureModelLoaded();
    return recognizer;
}



async function init(render) {
    const recognizer = await createModel();
    const classLabels = recognizer.wordLabels(); 
    console.log(recognizer)
 



    recognizer.listen(result => {
       console.log(result)
    }, {
        includeSpectrogram: true,
        probabilityThreshold: 0.75,
        invokeCallbackOnNoiseAndUnknown: true,
        overlapFactor: 0.50
    });
    


    }