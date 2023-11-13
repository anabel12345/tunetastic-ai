  
   
    async function createModel() {
        const checkpointURL = URL + "./model/model.json"; // model topology
        const metadataURL = "https://github.com/anabel12345/tunetastic-ai/model/metadata.json"; // model metadata

        const recognizer = speechCommands.create(
            "BROWSER_FFT", // fourier transform type, not useful to change
            undefined, 
            checkpointURL,
            metadataURL);

        // check that model and metadata are loaded via HTTPS requests.
        await recognizer.ensureModelLoaded();

        return recognizer;
    }

    async function init() {
        const recognizer = await createModel();
        const classLabels = recognizer.wordLabels(); // get class labels
       
        
        recognizer.listen(result => {
            const scores = result.scores; // probability of prediction for each class
            // render the probability scores per class
            let maxScoreIndex=0;
            let maxScore = 0;
            for(let i=0;i<scores.length;i++){
                if(scores[i]>maxScore){
                    maxScoreIndex=i;
                }
            }
            displayData(classLabels[maxScoreIndex])
        }, {
            includeSpectrogram: true, // in case listen should return result.spectrogram
            probabilityThreshold: 0.75,
            invokeCallbackOnNoiseAndUnknown: true,
            overlapFactor: 0.50 // probably want between 0.5 and 0.75. More info in README
        });

    }
