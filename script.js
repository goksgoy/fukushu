// Vocabulary List: You can add more words and meanings
const vocabulary = [
    // Minggu 1
    { word: "作文", meaning: "僕の作文を見ていただけますか" },
    { word: "近所", meaning: "近所で火事があった" }, { word: "大使館", meaning: "インドネシア大使館はどこですか" }, 
    { word: "運転手", meaning: "運転者はベルトを締めるべきだ" }, { word: "低い", meaning: "気温が低いと水は氷になる" }, 
    { word: "短い", meaning: "短い髪が似合ってます" }, { word: "遠い", meaning: "ここから海までどのくらい遠いのでしょうか" }, 
    { word: "悪い", meaning: "悪いことだと思うか" }, { word: "暗い", meaning: "暗い部屋で何を探していますか" }, 
    { word: "遠足", meaning: "遠足は雨のため中止になった" }, { word: "去年", meaning: "去年の冬は非常に寒かった" }, 
    { word: "写す", meaning: "このページをノートに写しておきなさい" }, { word: "真ん中", meaning: "どうして5円玉と50円玉の真ん中に穴が空いているの" }, 
    { word: "写真", meaning: "ここで写真を撮らないで下さい" }, { word: "両方", meaning: "両方とも、日本語が分かりますか" }, 
    { word: "主人", meaning: "ご主人によろしくお伝えて下さい" }, { word: "旅館", meaning: "彼女はその旅館に部屋を予約してくれた" }, 
    { word: "店員", meaning: "スーパーに行くたびに店員さんと話します" }, { word: "国民", meaning: "日本人はよく働く国民だと思う" }, 
    { word: "学者", meaning: "将来科学者になりたい" }, { word: "歌う", meaning: "さあ歌を歌いましょう" }, 
    { word: "医学", meaning: "彼女は医学生です" }, { word: "趣味", meaning: "私の趣味は音楽を聴くことだ" }, 
    { word: "歌手", meaning: "その人気歌手は自殺した" }, { word: "銀行", meaning: "父は銀行員です" }, 
    { word: "秋", meaning: "秋より春のほうが好きだ" }, { word: "都道府県", meaning: "とどうふけん" }, 
    { word: "昼間", meaning: "昼間寝て夜働く人もいる" }, { word: "味", meaning: "恋の味は苦い" }, 
    { word: "洗う", meaning: "お皿を洗うのを手伝いましょうか" }, { word: "地理", meaning: "私は地理と歴史が好きだ" }, 
    { word: "水族館", meaning: "水族館へ行く道を教えてくれますか" }, { word: "用事", meaning: "何か用事でおいでになったかと思いました" }, 
    { word: "映画", meaning: "古い映画を見ています" }, { word: "用意", meaning: "母に朝食の用意ができているか聞いた" }, 
    { word: "光る", meaning: "ダイヤは明るく光った" }, { word: "計画", meaning: "計画は変更された" }, 
    { word: "別れる", meaning: "結婚して一年で別れてしまった" }, { word: "和室", meaning: "和室が好きな英国人もいると言われます" }, 
    { word: "太る", meaning: "そんなに食べると太るよ" }, { word: "池", meaning: "家の裏に小さな池がある" }, 
    { word: "特別", meaning: "この店の特別の料理はラーメンんでございます" }, { word: "平和", meaning: "世界中が平和を望んでいる" }, 
    { word: "", meaning: "" }, { word: "", meaning: "" }, 
];
  
  let currentVocabulary = {};
  
  function getRandomVocabulary() {
    const randomIndex = Math.floor(Math.random() * vocabulary.length);
    return vocabulary[randomIndex];
  }
  
  function nextVocabulary() {
    // Get a random vocabulary and display the word
    currentVocabulary = getRandomVocabulary();
    document.getElementById("word").textContent = currentVocabulary.word;
  
    // Enable the "Show Meaning" button and hide "Show Vocab"
    document.getElementById("show-meaning").style.display = "inline";
    document.getElementById("show-meaning").disabled = false;
    document.getElementById("show-vocab").style.display = "none";
  }
  
  function showMeaning() {
    // Show the meaning of the current vocabulary
    document.getElementById("word").textContent = currentVocabulary.meaning;
  
    // Disable the "Show Meaning" button and show "Show Vocab"
    document.getElementById("show-meaning").style.display = "none";
    document.getElementById("show-vocab").style.display = "inline-block";
  }
  
  function showVocab() {
    // Show the vocabulary word again
    document.getElementById("word").textContent = currentVocabulary.word;
  
    // Disable the "Show Vocab" button and enable the "Show Meaning" button
    document.getElementById("show-vocab").style.display = "none";
    document.getElementById("show-meaning").style.display = "inline";
  }
  
