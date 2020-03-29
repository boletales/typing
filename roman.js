//形式:["アルファベット","かな","次入力"]
//google日本語入力のアルゴリズム借りました
let romanTable=[
	["a","あ",""],
	["i","い",""],
	["u","う",""],
	["e","え",""],
	["o","お",""],
	["ka","か",""],
	["ki","き",""],
	["ku","く",""],
	["ke","け",""],
	["ko","こ",""],
	["sa","さ",""],
	["si","し",""],
	["su","す",""],
	["se","せ",""],
	["so","そ",""],
	["ta","た",""],
	["ti","ち",""],
	["tu","つ",""],
	["te","て",""],
	["to","と",""],
	["na","な",""],
	["ni","に",""],
	["nu","ぬ",""],
	["ne","ね",""],
	["no","の",""],
	["ha","は",""],
	["hi","ひ",""],
	["hu","ふ",""],
	["he","へ",""],
	["ho","ほ",""],
	["ma","ま",""],
	["mi","み",""],
	["mu","む",""],
	["me","め",""],
	["mo","も",""],
	["ya","や",""],
	["yi","い",""],
	["yu","ゆ",""],
	["ye","いぇ",""],
	["yo","よ",""],
	["ra","ら",""],
	["ri","り",""],
	["ru","る",""],
	["re","れ",""],
	["ro","ろ",""],
	["wa","わ",""],
	["wi","うぃ",""],
	["wu","う",""],
	["we","うぇ",""],
	["wo","を",""],
	["fa","ふぁ",""],
	["fi","ふぃ",""],
	["fu","ふ",""],
	["fe","ふぇ",""],
	["fo","ふぉ",""],
	["ga","が",""],
	["gi","ぎ",""],
	["gu","ぐ",""],
	["ge","げ",""],
	["go","ご",""],
	["za","ざ",""],
	["zi","じ",""],
	["zu","ず",""],
	["ze","ぜ",""],
	["zo","ぞ",""],
	["da","だ",""],
	["di","ぢ",""],
	["du","づ",""],
	["de","で",""],
	["do","ど",""],
	["ba","ば",""],
	["bi","び",""],
	["bu","ぶ",""],
	["be","べ",""],
	["bo","ぼ",""],
	["pa","ぱ",""],
	["pi","ぴ",""],
	["pu","ぷ",""],
	["pe","ぺ",""],
	["po","ぽ",""],
	["ja","じゃ",""],
	["ji","じ",""],
	["ju","じゅ",""],
	["je","じぇ",""],
	["jo","じょ",""],
	["sha","しゃ",""],
	["shi","し",""],
	["shu","しゅ",""],
	["she","しぇ",""],
	["sho","しょ",""],
	["tsa","つぁ",""],
	["tsi","つぃ",""],
	["tsu","つ",""],
	["tse","つぇ",""],
	["tso","つぉ",""],
	["tha","てゃ",""],
	["thi","てぃ",""],
	["thu","てゅ",""],
	["the","てぇ",""],
	["tho","てょ",""],
	["cha","ちゃ",""],
	["chi","ち",""],
	["chu","ちゅ",""],
	["che","ちぇ",""],
	["cho","ちょ",""],
	["kk","っ","k"],
	["ss","っ","s"],
	["tt","っ","t"],
	["hh","っ","h"],
	["mm","っ","m"],
	["yy","っ","y"],
	["rr","っ","r"],
	["ww","っ","w"],
	["cc","っ","c"],
	["ff","っ","f"],
	["gg","っ","g"],
	["zz","っ","z"],
	["dd","っ","d"],
	["bb","っ","b"],
	["pp","っ","p"],
	["jj","っ","j"],
	["xx","っ","x"],
	["ll","っ","l"],
	["nk","ん","k"],
	["ns","ん","s"],
	["nt","ん","t"],
	["nh","ん","h"],
	["nm","ん","m"],
	["nr","ん","r"],
	["nw","ん","w"],
	["nc","ん","c"],
	["nf","ん","f"],
	["ng","ん","g"],
	["nz","ん","z"],
	["nd","ん","d"],
	["nb","ん","b"],
	["np","ん","p"],
	["nj","ん","j"],
	["nx","ん","x"],
	["nl","ん","l"],
	["nn","ん",""],
	["kya","きゃ",""],
	["kyi","きぃ",""],
	["kyu","きゅ",""],
	["kye","きぇ",""],
	["kyo","きょ",""],
	["sya","しゃ",""],
	["syi","しぃ",""],
	["syu","しゅ",""],
	["sye","しぇ",""],
	["syo","しょ",""],
	["tya","ちゃ",""],
	["tyi","ちぃ",""],
	["tyu","ちゅ",""],
	["tye","ちぇ",""],
	["tyo","ちょ",""],
	["nya","にゃ",""],
	["nyi","にぃ",""],
	["nyu","にゅ",""],
	["nye","にぇ",""],
	["nyo","にょ",""],
	["hya","ひゃ",""],
	["hyi","ひ",""],
	["hyu","ひゅ",""],
	["hye","ひぇ",""],
	["hyo","ひょ",""],
	["mya","みゃ",""],
	["myi","みぃ",""],
	["myu","みゅ",""],
	["mye","みぇ",""],
	["myo","みょ",""],
	["rya","りゃ",""],
	["ryi","りぃ",""],
	["ryu","りゅ",""],
	["rye","りぇ",""],
	["ryo","りょ",""],
	["wyi","ゐ",""],
	["wye","ゑ",""],
	["gya","ぎゃ",""],
	["gyi","ぎ",""],
	["gyu","ぎゅ",""],
	["gye","ぎぇ",""],
	["gyo","ぎょ",""],
	["jya","じゃ",""],
	["jyi","じ",""],
	["jyu","じゅ",""],
	["jye","じぇ",""],
	["jyo","じょ",""],
	["zya","じゃ",""],
	["zyi","じぃ",""],
	["zyu","じゅ",""],
	["zye","じぇ",""],
	["zyo","じょ",""],
	["dya","ぢゃ",""],
	["dyi","ぢぃ",""],
	["dyu","ぢゅ",""],
	["dye","ぢぇ",""],
	["dyo","ぢょ",""],
	["bya","びゃ",""],
	["byi","びぃ",""],
	["byu","びゅ",""],
	["bye","びぇ",""],
	["byo","びょ",""],
	["pya","ぴゃ",""],
	["pyi","ぴ",""],
	["pyu","ぴゅ",""],
	["pye","ぺ",""],
	["pyo","ぴょ",""],
	["xa","ぁ",""],
	["xi","ぃ",""],
	["xu","ぅ",""],
	["xe","ぇ",""],
	["xo","ぉ",""],
	["xya","ゃ",""],
	["xyu","ゅ",""],
	["xyo","ょ",""],
	["xtu","っ",""],
	["lxa","ぁ",""],
	["lxi","ぃ",""],
	["lxu","ぅ",""],
	["lxe","ぇ",""],
	["lxo","ぉ",""],
	["lxa","ゃ",""],
	["lxu","ゅ",""],
	["lxo","ょ",""],
	["lxtu","っ",""],
	["qa","くぁ",""],
	["qi","くぃ",""],
	["qu","く",""],
	["qe","くぇ",""],
	["qo","くぉ",""],
	["ca","か",""],
	["ci","し",""],
	["cu","く",""],
	["ce","せ",""],
	["co","こ",""],
	["-","ー",""],
	["?","?",""],
	["!","!",""]
]
let atoz="abcdefghijklmnopqrstuvwxyz";
Array(26).forEach((c,i)=>{
	let char=atoz[i];
	romanTable.push([char,char,""]);
	romanTable.push([char,char.toUpperCase(),""]);
});