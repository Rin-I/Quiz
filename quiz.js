const quizAll = [
    {
        question : "不動産業界は？",
        answerAll : [
            "汚い",
            "いい人ばっか",
            "ワイルド",
            "優しい",
        ],
        correct : "汚い"
    },
    {
        question : "プログラミングは？",
        answerAll : [
            "おもろい",
            "つまらん",
            "オタクがやること",
            "うんち",
        ],
        correct : "おもろい"
    },
    {
        question : "うんこは？",
        answerAll : [
            "気持ちいい",
            "いやだ",
            "一生出さんでもいい",
            "ばかたれ",
        ],
        correct : "気持ちいい"
    }
]

// const quiz = "不動産業界は？";
// const answer = [
//     "汚い",
//     "いい人ばっか",
//     "ワイルド",
//     "優しい",
// ];
// const correct = "汚い";
const $AnsButton = document.getElementsByTagName("button");

//クイズの設定
const setupQ = ()=>{
    const questionS = document.getElementById("js-question");
    questionS.textContent = quizAll[0].question;
    
    //ボタン設定
    let ansIndex = 0;
    let ansLen = $AnsButton.length;
    while (ansIndex < ansLen){
        $AnsButton[ansIndex].innerText = quizAll[0].answerAll[ansIndex];        
        ansIndex++;
    };    
};
setupQ();

const clickHandler = (e) => {
    if(e.target.innerText === correct){
        alert("正解")
    } else {
        alert("不正解")
    };
};

let AnsBIndex = 0;
let AnsBLen = $AnsButton.length;
while (AnsBIndex < AnsBLen) {
    $AnsButton[AnsBIndex].addEventListener("click", (e) =>{
        clickHandler(e);
    });    
    AnsBIndex++;
};
