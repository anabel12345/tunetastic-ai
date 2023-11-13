
async function createModel() {
    const modelURL = 'https://anabel12345.github.io/tunetastic-ai/model/model.json';
    const metadataURL = 'https://anabel12345.github.io/tunetastic-ai/model/metadata.json';

    const recognizer = speechCommands.create('BROWSER_FFT', undefined, modelURL, metadataURL);
    await recognizer.ensureModelLoaded();
    return recognizer;
}

// Rest of your code...


async function init(render) {
    const recognizer = await createModel();
    const classLabels = recognizer.wordLabels(); 
    console.log(recognizer)
 



   recognizer.listen(result => {
        const scores = result.scores; // probability of prediction for each class
        console.log(scores)
        let maxScoreIndex;
        for(let i=0; i<scores.length; i++){
            if(scores[i]>scores[maxScoreIndex]){
                maxScoreIndex=i;
            }
        }
        render(classLabels[maxScoreIndex]); //send the prediction to be rendered
    }, {
        includeSpectrogram: true,
        probabilityThreshold: 0.75,
        invokeCallbackOnNoiseAndUnknown: true,
        overlapFactor: 0.50 // probably want between 0.5 and 0.75. More info in README
  
      });


    }
