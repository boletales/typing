let goalKanji="";//課題の漢字表記
let goal     ="";//課題の読み仮名
let kanamachi="";
let kana     ="";
let romans   ="";
let kouhos   =[];//現在の文字の入力候補
let convTable= romanTable.concat(alphaTable);
        
function gameInput(char){
    let nowKouho=kouhos.filter(k=>(kana==k[0] && k[2].startsWith(kanamachi+char)));
    if(nowKouho.length>0){
        whenright();
        kanamachi+=char;
        romans+=char;
        let input=nowKouho.find(k=>k[2]==kanamachi);
        if(input!=undefined){//ひらがなが完成したら
            kana=input[1];
            kanamachi=input[3];
            if(kana==goal){
                if(whendone())return;
            }
        }
    }else{
        whenwrong();
    }
    refresh();
}
const _SEQ = false;
let seqid=0;
let tasks = [];

function shuffle(arr){
    let tmp = arr.concat();
    let rtn = [];
    for(;tmp.length>0;){
        rtn.push(tmp.splice(Math.floor(Math.random()*tmp.length),1)[0]);
    }
    return rtn;
}

function resetPhrase(){
    if(tasks.length==0) tasks=shuffle(texts[theme]);
    let next=tasks.shift();
    goalKanji=next[0];
    goal=next[1];
    kouhos=strToKouho(goal);
    kanamachi="";
    kana="";
    romans="";
    refresh();
}




function strToKouho(string){
    //[そこまでのカナ,その後一入力分のローマ字]
    let search=[[string,""]];//これから候補を検索すべきリスト
    let kouhos=[];
    while(search.length>0){
        let searching=search.pop();
        //次の条件を満たすローマ字を探す:検索中の枝について、その枝のカナがそのローマ字で終わる かつ 次入力がその後のローマ字の先頭に一致
        let kouho=convTable.filter(r=>(searching[0].endsWith(r[1])&&searching[1].startsWith(r[2])));
        kouho.forEach(k=>{
            kouhos.push([searching[0].slice(0,-k[1].length),searching[0],k[0],k[2]]);
            let newSearch=[searching[0].slice(0,-k[1].length),k[0]];
            //検索リスト上で重複しないばあいnewsearchを追加
            if( search.findIndex( s=>(s[0]==newSearch[0]&&s[1]==newSearch[1]) ) == -1){
                search.unshift(newSearch);
            }
        })
    }
    return kouhos;
}
function getYosoku(){
    let _romans="";
    let _kana=kana;
    let _machi=kanamachi;
    let _nowkouho;
    while(_kana!=goal){
        _nowkouho=kouhos.filter(k=>(_kana==k[0]& k[2].startsWith(_machi)));
        _romans+=_nowkouho[0][2].substr(_machi.length);
        _kana=_nowkouho[0][1];
        _machi=_nowkouho[0][3];
    }
    return _romans;
}