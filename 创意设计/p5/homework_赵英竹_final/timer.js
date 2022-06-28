class Timer
{
    constructor(t)
    {
        this.totalTime = t
        this.currentTime = millis()
        this.passedTime = 0;
    }

    reset()
    {
        this.passedTime = 0;
        this.currentTime = millis();
    }
    update(t2)
    {
        this.totalTime=t2
    }
    isFinished()
    {
        if(this.passedTime >= this.totalTime)
        {
            
            //console.log(this.passedTime)
            return true
        }
        else 
        {
            this.passedTime =millis()- this.currentTime;
        }

    }

}