const sounds = {
    click: new Audio("assets/sounds/click.mp3"),
    gift: new Audio("assets/sounds/gift-open.mp3"),
    pop: new Audio("assets/sounds/pop.mp3"),
    fireworks: new Audio("assets/sounds/fireworks.mp3")
};

sounds.click.volume = 0.4;
sounds.gift.volume = 0.7;
sounds.pop.volume = 0.5;
sounds.fireworks.volume = 0.8;

function playSound(name){
    if(sounds[name]){
        sounds[name].currentTime = 0;
        sounds[name].play();
    }
}