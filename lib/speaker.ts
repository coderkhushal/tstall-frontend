export class Speaker{
    private static instance : Speaker
    private content: string;
    private speaker: SpeechSynthesis;
    private constructor(){  
        this.content= ""
        this.speaker = speechSynthesis

    }
    public static getInstance(){
        if(!this.instance){
            this.instance = new Speaker();
        }
        return this.instance
    }
    speak(c: string){
        this.content= c;
        let utterance= new SpeechSynthesisUtterance(this.content)
        this.speaker.speak(utterance)
        this.content=""

    }
    stop(){
        this.speaker.cancel()
    }
    
}