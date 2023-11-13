function createModel(){
    const modelStructureURL = "./model/model.json";
    const metadataURL = "./model/metadata.json";

    //Define audio input
    const recognizer = speechCommands.create('BROWSER_FFT')

    return recognizer;
}

async function init(render) {
    const recognizer = createModel();
    const classLabels = recognizer.wordLabels(); 
    
    recognizer.listen(result => {
        const scores = result.scores; // probability of prediction for each class
        let maxScoreIndex;
        for(let i=0; i<scores.length; i++){
            if(scores[i]>scores[maxScoreIndex]){
                maxScoreIndex=i;
            }
        }
        render(classLabels[maxScoreIndex]); //send the prediction to be rendered
    });
}