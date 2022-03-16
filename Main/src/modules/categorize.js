export function categorize(x,y){
    const states = {0: "はじめました🐣", 1: "完全に理解したかも🐥", 2: "完全に理解した😎", 3: "なんもわからんかも😅",
    4: "なんもわからん😵", 5: "なんもわからんから脱出できるかも😮", 6: "あとチョットでチョットワカルかも😲", 7: "チョットワカル😆"};

    let state = 0;
    switch(x){
        case 0:
            state = 0;
            break;
        case 1:
            if(y>=70 && y<80){
                state = 0;
            }else if(y>=80 && y<90){
                state = 1;
            }else if(y>=90){
                state = 2;
            }
            break;
        case 2:
            if(y>20){
                state = 3;
            }else{
                state = 4;
            }
            break;
        case 3:
            state = 5;
            break;
        case 4:
            if(y<25){
                state = 5;
            }else{
                state = 6;
            }
            break;
        case 5:
            state = 7;
            break;
    }

    return states[state];
}