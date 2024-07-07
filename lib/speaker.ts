"use client"

export class Speaker{
    private static instance : Speaker
    private content: string;
    private speaker: SpeechSynthesis;
    private voiceindex: number ;
    
    private constructor(){  
        this.content= ""
        this.speaker = speechSynthesis
        this.voiceindex= this.speaker.getVoices().findIndex((e)=>e.lang=="en-IN")

    }
    public static getInstance(){
        if(!this.instance){
            this.instance = new Speaker();
        }
        return this.instance
    }
    async speak(c: string, lang?: string){
        // if(lang){
        //     c= await this.translate(c, "en", lang)
        // }
        this.content= c;
        let utterance= new SpeechSynthesisUtterance(this.content)
        
        utterance.voice= this.speaker.getVoices()[this.voiceindex==-1 ? 0 : this.voiceindex]
        utterance.rate = 0.6
        this.speaker.speak(utterance)
        this.content=""

    }
    stop(){
        this.speaker.cancel()
    }
 
}