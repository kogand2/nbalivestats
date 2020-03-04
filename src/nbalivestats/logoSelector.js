import sixers from "./logos/76ers.png";
import blazers from "./logos/blazers.png";
import bucks from "./logos/bucks.png";
import bulls from "./logos/bulls.png";
import cavs from "./logos/cavs.png";
import celtics from "./logos/celtics.png";
import clippers from "./logos/clippers.png";
import grizzlies from "./logos/grizzlies.png";
import hawks from "./logos/hawks.png";
import heat from "./logos/heat.png";
import hornets from "./logos/hornets.png";
import jazz from "./logos/jazz.png";
import kings from "./logos/kings.png";
import knicks from "./logos/knicks.png";
import lakers from "./logos/lakers.png";
import magic from "./logos/magic.png";
import mavs from "./logos/mavs.png";
import nets from "./logos/nets.png";
import nuggets from "./logos/nuggets.png";
import pacers from "./logos/pacers.png";
import pelicans from "./logos/pelicans.png";
import pistons from "./logos/pistons.png";
import raptors from "./logos/raptors.png";
import rockets from "./logos/rockets.png";
import spurs from "./logos/spurs.png";
import suns from "./logos/suns.png";
import thunder from "./logos/thunder.png";
import warriors from "./logos/warriors.png";
import wizards from "./logos/wizards.png";
import wolves from "./logos/wolves.png";

export default function selectLogo(team){
    switch(team){
        case "ATL":
            return hawks;
        case "BOS":
            return celtics;
        case "BKN":
            return nets;
        case "CHA":
            return hornets;
        case "CHI":
            return bulls;
        case "CLE":
            return cavs;
        case "DAL":
            return mavs;
        case "DEN":
            return nuggets;    
        case "DET":
            return pistons;
        case "GSW":
            return warriors;
        case "HOU":
            return rockets;
        case "IND":
            return pacers;
        case "LAC":
            return clippers;
        case "LAL":
            return lakers;
        case "MEM":
            return grizzlies;
        case "MIA":
            return heat;
        case "MIL":
            return bucks;
        case "MIN":
            return wolves;
        case "NOP":
            return pelicans;
        case "NYK":
            return knicks;      
        case "OKC":
            return thunder;
        case "ORL":
            return magic;  
        case "PHI":
            return sixers;
        case "PHX":
            return suns;  
        case "POR":
            return blazers;
        case "SAC":
            return kings;       
        case "SAS":
            return spurs;
        case "TOR":
            return raptors;  
        case "UTA":
            return jazz;
        case "WAS":
            return wizards;  
        default:
            return null;                                                 
    }
};