let minutos=document.getElementById('minutos')
let segundos=document.getElementById('segundos')
let milisegundos=document.getElementById('milisegundos')
let playBtn=document.getElementById('play')
let pauseBtn=document.getElementById('pauseBtn')
let resumeBtn=document.getElementById('resumeBtn')
let resetBtn=document.getElementById('resetar')


console.log(minutos)

let interval;
let minutes=0
let seconds=0
let miliseconds=0
let isPaused=false

let click1=1
let click2=0
if(playBtn.addEventListener('click',startTime)){

}


	function startTime(){
		interval=setInterval(()=>{
			if(!isPaused===true){
                miliseconds+=10
            }
            if(miliseconds===1000){
                seconds++
                miliseconds=0
            }
            if(seconds===60){
                minutes++
                seconds=0
            }
            

            minutos.textContent=formatTime(minutes)
            segundos.textContent=formatTime(seconds)
            milisegundos.textContent=formatMilliseconds(miliseconds)

		},10)

        playBtn.style.display='none'
        pauseBtn.style.display='block'
        console.log('está aqui')
	}

pauseBtn.addEventListener('click',pauseTempo)
        function pauseTempo(){
            isPaused=true
            pauseBtn.style.display='none'
            resumeBtn.style.display='block'

            console.log('agora aqui pause tempo')
        }


resumeBtn.addEventListener('click',resumeTempo)
        function resumeTempo(){
            isPaused=false
            pauseBtn.style.display='block'
            resumeBtn.style.display='none'
            console.log('resume tempo')
        }


resetBtn.addEventListener('click',resetar)
    function resetar(){
        clearInterval(interval)
        minutes=0
        seconds=0
        miliseconds=0

            minutos.textContent='00'
            segundos.textContent='00'
            milisegundos.textContent='000'

            playBtn.style.display='block'
            pauseBtn.style.display='none'
            resumeBtn.style.display='none'
        console.log('agora no resetar tempo')
    }
    

    function formatTime(time){
        return time < 10 ? `0${time}` : time
    }
    
    function formatMilliseconds(time){
        return time < 100 ? `${time}`.padStart(3, '0') : time;
    }
    