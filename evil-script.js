let generator = document.getElementById("generator");
let summonBtn = document.getElementById("summon-btn");

let evil = document.getElementById("evil");
let goatHead = document.getElementById("goat-head");
let skeleton = document.getElementById("skeleton");
let skelet0n = document.getElementById("skelet0n");
let orc = document.getElementById("orc");
let gateKeeper = document.getElementById("gate-keeper");
let warrior = document.getElementById("warrior");
let pyro = document.getElementById("pyro");
let pyr0 = document.getElementById("pyr0");
let demonBitch = document.getElementById("demon-bitch");
let gargoyle = document.getElementById("gargoyle");
let ghost = document.getElementById("ghost");
let gh0st = document.getElementById("gh0st");
let ghostFace = document.getElementById("ghost-face");
let reaper = document.getElementById("reaper");
let r34p3r = document.getElementById("r34p3r");
let darkMask = document.getElementById("dark-mask");
let d4rkM4sk = document.getElementById("d4rk-m4sk");
let wolf = document.getElementById("wolf");
let bat = document.getElementById("bat");
let shrooms = document.getElementById("shrooms");
let evilMushroom = document.getElementById("evil-mushroom");
let trip = document.getElementById("trip");
let brains = document.getElementById("brains");
let fatGuy = document.getElementById("fat-guy");
let evilFatGuy = document.getElementById("evil-fat-guy");
let bitch = document.getElementById("bitch");
let evilBitch = document.getElementById("evil-bitch");
let evilEye = document.getElementById("evil-eye");
let zodiac = document.getElementById("zodiac");
let psychoBitch = document.getElementById("psycho-bitch");
let ev1lB1tch = document.getElementById("ev1l-b1tch");
let skull = document.getElementById("skull");
let skvll = document.getElementById("skvll");
let fuck = document.getElementById("fuck");
let lesbians = document.getElementById("lesbians");
let jesus = document.getElementById("jesus");
let cerberus = document.getElementById("cerberus");
let burningSkull = document.getElementById("burning-skull");
let electricGuitar = document.getElementById("electric-guitar");
let doom = document.getElementById("doom");
let devil = document.getElementById("devil");
let weed = document.getElementById("weed");
let bug = document.getElementById("bug");
let spaceInvader = document.getElementById("space-invader");
let alien = document.getElementById("alien");
let al13n = document.getElementById("al13n");
let anubis = document.getElementById("anubis");
let illuminati = document.getElementById("illuminati");
let bitcoin = document.getElementById("bitcoin");
let troll = document.getElementById("troll");
let tr0ll = document.getElementById("tr0ll");
let tr011 = document.getElementById("tr011");
let scaryFace = document.getElementById("scary-face");
let cyclops = document.getElementById("cyclops");
let frankenstein = document.getElementById("frankenstein");
let zomby = document.getElementById("zomby");
let hangMan = document.getElementById("hang-man");
let deadMan = document.getElementById("dead-man");
let spectre = document.getElementById("spectre");
let shadowMan = document.getElementById("shadow-man");
let captive = document.getElementById("captive");
let rapeDungeon = document.getElementById("rape-dungeon");
let jigsaw = document.getElementById("jigsaw");
let dragon = document.getElementById("dragon");
let witchesBrew = document.getElementById("witches-brew");

let asciiDemons = [evil, evil, goatHead, skeleton, skelet0n, orc, gateKeeper, warrior, pyro, pyr0, demonBitch, gargoyle, ghost, gh0st, ghostFace, reaper, r34p3r, darkMask, d4rkM4sk, wolf, bat, shrooms, evilMushroom, trip, brains, fatGuy, evilFatGuy, bitch, evilBitch, evilEye, zodiac, psychoBitch, ev1lB1tch, skull, skvll, fuck, lesbians, jesus, cerberus, burningSkull, electricGuitar, doom, devil, weed, bug, spaceInvader, alien, al13n, anubis, illuminati, bitcoin, troll, tr0ll, tr011, scaryFace, cyclops, frankenstein, zomby, hangMan, deadMan, spectre, shadowMan, captive, rapeDungeon, jigsaw, dragon, witchesBrew];
let randomNumber = Math.ceil(Math.random() * 66);

function summonEvil() {
    generator.innerHTML = asciiDemons[randomNumber].innerHTML;
    if (generator.innerHTML === evil.innerHTML || generator.innerHTML === goatHead.innerHTML || generator.innerHTML === spaceInvader.innerHTML || generator.innerHTML === troll.innerHTML || generator.innerHTML === tr0ll.innerHTML || generator.innerHTML === tr011.innerHTML || generator.innerHTML === scaryFace.innerHTML || generator.innerHTML === cyclops.innerHTML || generator.innerHTML === hangMan.innerHTML || generator.innerHTML === wolf.innerHTML || generator.innerHTML === bitcoin.innerHTML || generator.innerHTML === anubis.innerHTML || generator.innerHTML === doom.innerHTML) {
        generator.style.fontSize = "6px";
        if (generator.innerHTML === bitcoin.innerHTML) {
            generator.style.color = "orange";
        } else {
            generator.style.color = "#ca1717";
        }
        generator.style.transform = "rotateY(0)";
        generator.style.animation = "evil";
        generator.style.animationDuration = "1.5s";
        generator.style.animationTimingFunction = "linear";
        generator.style.animationIterationCount = "infinite"
        generator.style.filter = "blur(0px)";
        generator.style.opacity = "100%";
    } else if (generator.innerHTML === skeleton.innerHTML || generator.innerHTML === gargoyle.innerHTML || generator.innerHTML === jesus.innerHTML || generator.innerHTML === devil.innerHTML || generator.innerHTML === alien.innerHTML || generator.innerHTML === rapeDungeon.innerHTML || generator.innerHTML === zodiac.innerHTML || generator.innerHTML === cerberus.innerHTML || generator.innerHTML === zomby.innerHTML || generator.innerHTML === warrior.innerHTML || generator.innerHTML === witchesBrew.innerHTML || generator.innerHTML === electricGuitar.innerHTML) {
        if (generator.innerHTML === cerberus.innerHTML || generator.innerHTML === zomby.innerHTML) {
            generator.style.fontSize = "15px";
        } else if (generator.innerHTML === witchesBrew.innerHTML) {
            generator.style.fontSize = "11px";
        } else {
            generator.style.fontSize = "6px";
        }
        generator.style.color = "#ca1717";
        if (generator.innerHTML === jesus.innerHTML || generator.innerHTML === rapeDungeon.innerHTML) {
            generator.style.transform = "rotate(-180deg)";
        } else {
            generator.style.transform = "rotateY(0)";
        }
        generator.style.animation = "skeleton";
        generator.style.animationDuration = "1.5s";
        generator.style.animationTimingFunction = "linear";
        generator.style.animationIterationCount = "infinite";
        generator.style.filter = "blur(0px)";
        generator.style.opacity = "100%";
    } else if (generator.innerHTML === skelet0n.innerHTML || generator.innerHTML === r34p3r.innerHTML || generator.innerHTML === frankenstein.innerHTML || generator.innerHTML === shadowMan.innerHTML || generator.innerHTML === jigsaw.innerHTML || generator.innerHTML === bat.innerHTML) {
        generator.style.color = "green";
        generator.style.transform = "rotateY(0)";
        if (generator.innerHTML === frankenstein.innerHTML) {
            generator.style.animation = "frankenstein";
            generator.style.animationDuration = "6s";
        } else if (generator.innerHTML === shadowMan.innerHTML) {
            generator.style.animation = "shadow";
            generator.style.animationDuration = "6s";
        } else if (generator.innerHTML === jigsaw.innerHTML) {
            generator.style.color = "#ca1717";
            generator.style.animation = "jigsaw";
            generator.style.animationDuration = "3s"
        } else if (generator.innerHTML === bat.innerHTML) {
            generator.style.animation = "bat";
            generator.style.animationDuration = "3s";
        } else{
            generator.style.animation = "skelet0n";
            generator.style.animationDuration = "3s";
        }
        generator.style.animationTimingFunction = "ease-in-out";
        generator.style.animationIterationCount = "infinite";
        generator.style.filter = "blur(0px)";
        generator.style.opacity = "100%";
    } else if (generator.innerHTML === orc.innerHTML || generator.innerHTML === pyro.innerHTML || generator.innerHTML === pyr0.innerHTML || generator.innerHTML === burningSkull.innerHTML || generator.innerHTML === bug.innerHTML || generator.innerHTML === spectre.innerHTML || generator.innerHTML === dragon.innerHTML || generator.innerHTML === illuminati.innerHTML || generator.innerHTML === weed.innerHTML) {
        if (generator.innerHTML === burningSkull.innerHTML || generator.innerHTML === dragon.innerHTML) {
            generator.style.fontSize = "7px";
        } else {
            generator.style.fontSize = "9px";
        }
        generator.style.transform = "rotateY(-180deg)";
        generator.style.animation = "pentagram";
        generator.style.animationDuration = "1.5s";
        generator.style.animationTimingFunction = "linear";
        generator.style.animationIterationCount = "infinite";
        if (generator.innerHTML === orc.innerHTML || generator.innerHTML === bug.innerHTML || generator.innerHTML === illuminati.innerHTML || generator.innerHTML === weed.innerHTML) {
            generator.style.color = "green";
            generator.style.animation = "evil";
            generator.style.animationDuration = "1.5s";
            generator.style.animationTimingFunction = "linear";
            generator.style.animationIterationCount = "infinite";
        } else if (generator.innerHTML === dragon.innerHTML) {
            generator.style.animation = "dragon";
            generator.style.animationDuration = "1.5s";
            generator.style.animationTimingFunction = "linear";
            generator.style.animationIterationCount = "infinite";
        }
        generator.style.filter = "blur(0px)";
        generator.style.opacity = "100%";
    } else if (generator.innerHTML === gateKeeper.innerHTML || generator.innerHTML === reaper.innerHTML || generator.innerHTML === deadMan.innerHTML) {
        generator.style.fontSize = "7.5px";
        generator.style.color = "#ca1717";
        generator.style.transform = "rotateY(0)";
        generator.style.animation = "gate-keeper";
        generator.style.animationDuration = "1.5s";
        generator.style.animationTimingFunction = "linear";
        generator.style.animationIterationCount = "infinite";
        generator.style.filter = "blur(0px)";
        generator.style.opacity = "100%";
    } else if (generator.innerHTML === demonBitch.innerHTML || generator.innerHTML === skull.innerHTML || generator.innerHTML === al13n.innerHTML || generator.innerHTML === skvll.innerHTML) {
        generator.style.fontSize = "6px";
        if (generator.innerHTML === skull.innerHTML || generator.innerHTML === skvll.innerHTML) {
            generator.style.color = "green";
        } else {
            generator.style.color = "#ca1717";
        }
        generator.style.transform = "rotateY(0)";
        generator.style.animation = "demon-bitch";
        generator.style.animationDuration = "1.5s";
        generator.style.animationTimingFunction = "linear";
        generator.style.animationIterationCount = "infinite";
        generator.style.filter = "blur(0px)";
        generator.style.opacity = "100%";
    } else if (generator.innerHTML === ghost.innerHTML || generator.innerHTML === gh0st.innerHTML) {
        generator.style.color = "green";
        generator.style.transform = "rotateY(0)";
        if (generator.innerHTML === ghost.innerHTML) {
            generator.style.animation = "ghost";
        } else {
            generator.style.animation = "gh0st";
        }
        generator.style.animationDuration = "3.5s";
        generator.style.animationTimingFunction = "linear";
        generator.style.animationIterationCount = "infinite";
        generator.style.filter = "blur(9px)";
        generator.style.opacity = "0";
    } else if (generator.innerHTML === ghostFace.innerHTML || generator.innerHTML === darkMask.innerHTML || generator.innerHTML === d4rkM4sk.innerHTML) {
        generator.style.fontSize = "4px";
        generator.style.color = "green";
        generator.style.transform = "rotateY(0)";
        generator.style.animation = "gate-keeper";
        generator.style.animationDuration = "1.5s";
        generator.style.animationTimingFunction = "linear";
        generator.style.animationIterationCount = "infinite"
        if (generator.innerHTML === ghostFace.innerHTML) {
            generator.style.filter = "blur(9px)";
            generator.style.opacity = "0";
        } else {
            generator.style.fontSize = "6px";
            generator.style.filter = "blur(0px)";
            generator.style.opacity = "99%";
        }
    } else if (generator.innerHTML === brains.innerHTML) {
        generator.style.fontSize = "6px";
        generator.style.color = "violet";
        generator.style.transform = "rotateY(0)";
        generator.style.animation = "brains";
        generator.style.animationDuration = "5s";
        generator.style.animationTimingFunction = "linear";
        generator.style.animationIterationCount = "infinite"
        generator.style.filter = "blur(0px)";
        generator.style.opacity = "100%";
    } else if (generator.innerHTML === fatGuy.innerHTML || generator.innerHTML === evilFatGuy.innerHTML) {
        generator.style.color = "#ca1717";
        generator.style.transform = "rotateY(0)";
        generator.style.animation = "fat";
        generator.style.animationDuration = "1.5s";
        generator.style.animationTimingFunction = "linear";
        generator.style.animationIterationCount = "infinite"
        generator.style.filter = "blur(0px)";
        generator.style.opacity = "100%";
    } else if (generator.innerHTML === bitch.innerHTML || generator.innerHTML === evilBitch.innerHTML || generator.innerHTML === evilEye.innerHTML || generator.innerHTML === psychoBitch.innerHTML || generator.innerHTML === fuck.innerHTML || generator.innerHTML === lesbians.innerHTML || generator.innerHTML === ev1lB1tch.innerHTML || generator.innerHTML === captive.innerHTML) {
        if (generator.innerHTML === lesbians.innerHTML) {
            generator.style.fontSize = "9px";
        } else if (generator.innerHTML === ev1lB1tch.innerHTML || generator.innerHTML === captive.innerHTML) {
            generator.style.fontSize = "9px";
        } else if (generator.innerHTML === bitch.innerHTML || generator.innerHTML === fuck.innerHTML) {
            generator.style.fontSize = "7px";
        } else {
            generator.style.fontSize = "6px";
        }
        generator.style.color = "#ca1717";
        generator.style.transform = "rotateY(0)";
        generator.style.animation = "fuck";
        generator.style.animationDuration = "1s";
        generator.style.animationTimingFunction = "linear";
        generator.style.animationIterationCount = "infinite"
        generator.style.filter = "blur(0px)";
        generator.style.opacity = "100%";
    } else if (generator.innerHTML === evilMushroom.innerHTML || generator.innerHTML === trip.innerHTML || generator.innerHTML === shrooms.innerHTML) {
        generator.style.fontSize = "6px";
        generator.style.transform = "rotateY(0)";
        generator.style.animation = "trip";
        generator.style.animationDuration = "1.5s";
        generator.style.animationTimingFunction = "linear";
        generator.style.animationIterationCount = "infinite"
        generator.style.filter = "blur(0px)";
        generator.style.opacity = "100%";
    }
    randomNumber = Math.ceil(Math.random() * 66);
}

summonBtn.addEventListener("click", summonEvil);
