/* -----------------------
   TYPEWRITER EFFECT
----------------------- */

const birthdayMessage =
`Happy Birthday!

May this year bring you endless happiness,
good health,
beautiful memories,
and all the success you deserve.

Thank you for being such an amazing person.

Enjoy your special day!

❤️`;

function typeWriter(){

    const element = document.getElementById("typewriter");

    element.innerHTML="";

    let i=0;

    const timer=setInterval(()=>{

        if(i>=birthdayMessage.length){

            clearInterval(timer);
            return;

        }

        element.innerHTML+=birthdayMessage.charAt(i);

        i++;

    },40);

}