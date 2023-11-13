function createModel(){
    const modelStructureURL = "./model/model.json";
    const metadataURL = "./model/metadata.json";

    //Define audio input
    const recognizer = speechCommands.create('BROWSER_FFT')

    return recognizer;
}