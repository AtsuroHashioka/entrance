// 画像ファイルの配列
const images = [
    'photos/arima.JPG',
    'photos/beach.JPG',
    'photos/books.JPG',
    'photos/cosmos.JPG',
    'photos/dish.JPG',
    'photos/fall.JPG',
    'photos/frog.JPG',
    'photos/graduate.JPG',
    'photos/hiroshima.JPG',
    'photos/momiji.JPG',
    'photos/rose.JPG',
    'photos/plane.JPG',
    'photos/sakura.JPG',
    'photos/sky.JPG',
    'photos/soni.JPG',
    'photos/sunset.JPG',
    'photos/ukimi.JPG',
    'photos/ume.JPG',
    // 必要に応じて追加
];

// ランダムに画像を選択する関数
function getRandomImage() {
    return images[Math.floor(Math.random() * images.length)];
}

// ランダムに1つ選んで適用
window.addEventListener("DOMContentLoaded", () => {
    // ヘッダーの背景をランダムに設定（初期設定）
    const headerElement = document.querySelector('header');
    headerElement.style.backgroundImage = `url(${getRandomImage()})`;

    // スライドショーを一定間隔で実行
    setInterval(() => {
        headerElement.style.backgroundImage = `url(${getRandomImage()})`;
    }, 3000); // 3000ミリ秒（3秒）ごとに変更
});

const TL2 = document.getElementById('title-line-2');
const text = TL2.textContent;
TL2.innerHTML = ''; // 元のテキストをクリア

const animationDuration = 0.2; // アニメーションの基本 duration（秒）
const delayIncrement = 0.5; // 文字ごとの遅延増加量（秒）

for (let i = 0; i < text.length; i++) {
    const span = document.createElement('span');
    span.classList.add('char');
    span.textContent = text[i];
    span.style.animation = `fadeIn ${animationDuration}s ease-in-out ${delayIncrement * (i + 1)}s forwards`;
    TL2.appendChild(span);
}