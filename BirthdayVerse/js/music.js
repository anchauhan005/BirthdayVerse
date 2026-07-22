/* -----------------------
   Music
----------------------- */

function playMusic(){

    const music=document.getElementById("bg-music");

    if(music){

        music.play().catch(()=>{});

    }

}