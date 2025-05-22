// 画像ファイルの配列
const images = [
    'photos/beach.webp',
    'photos/books.webp',
    'photos/cosmos.webp',
    'photos/fall.webp',
    'photos/graduate.webp',
    'photos/momiji.webp',
    'photos/rose.webp',
    'photos/sakura.webp',
    'photos/soni.webp',
    'photos/sunset.webp',
    'photos/ukimi.webp',
    'photos/ume.webp',
    // 必要に応じて追加
];

const preloadedImages = [];
for (let i = 0; i < images.length; i++) {
    const img = new Image();
    img.src = images[i];
    preloadedImages.push(img);
}

// ランダムに画像を選択する関数
function getRandomImage() {
    return images[Math.floor(Math.random() * images.length)];
}

// ランダムに1つ選んで適用
window.addEventListener("DOMContentLoaded", () => {
    // ヘッダーの背景をランダムに設定（初期設定）
    const titleElement = document.getElementById('title');
    titleElement.style.backgroundImage = `url(${getRandomImage()})`;

    // スライドショーを一定間隔で実行
    setInterval(() => {
        titleElement.style.backgroundImage = `url(${getRandomImage()})`;
    }, 3000); // 3000ミリ秒（3秒）ごとに変更

    //コンテンツスクロールアニメーション
    const contents = document.querySelectorAll('.content');

    const checkIfVisible = () => {
        contents.forEach(content => {
            const contentTop = content.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            // 要素の上端が画面の10%～90%の間に入ったら表示
            if (contentTop < screenHeight * 1.0 && contentTop > -content.offsetHeight * 0.95) {
                content.classList.add('is-visible');
            } else {
                // 画面外に出たら非表示に戻す（繰り返したい場合）
                content.classList.remove('is-visible');
            }
        });
    };

    // ロード時とスクロール時にチェック
    window.addEventListener('scroll', checkIfVisible);
    checkIfVisible(); // 初回ロード時にもチェック
});

// タイトル2行目のアニメーション
const TL2 = document.getElementById('title-line-2');
const text = TL2.textContent;
TL2.innerHTML = ''; // 元のテキストをクリア

const animationDuration = 0.5; // アニメーションの基本 duration（秒）
const delayIncrement = 0.1; // 文字ごとの遅延増加量（秒）

for (let i = 0; i < text.length; i++) {
    const div = document.createElement('div');
    div.classList.add('char');
    div.textContent = text[i];
    div.style.animation = `fadeIn ${animationDuration}s ease-in ${delayIncrement * (i + 1)}s forwards`;
    TL2.appendChild(div);
}