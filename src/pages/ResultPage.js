import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const images = {
  "グルメ": [
    { src: "/images/g1.jpg", title: "ぶーる・ぶーる・ぶらんじぇり", subtitle: "パン、ベーグル", set: "g1" },
    { src: "/images/g2.jpg", title: "みんみんラーメン", subtitle: "ラーメン", set: "g2" }
  ],
  "歴史、文化": [
    { src: "/images/s1.jpg", title: "八王子城跡", subtitle: "歴史、文化", set: "s1" },
    { src: "/images/s2.jpg", title: "八王子車人形", subtitle: "歴史、文化", set: "s2" },
    // 他の画像も同様に追加
  ],
  "自然": [
    { src: "/images/n1.jpg", title: "高尾山", subtitle: "自然", set: "n1" },
    { src: "/images/n2.jpg", title: "都立滝山公園", subtitle: "自然", set: "n2" },
    // 他の画像も同様に追加
  ],
  "ショッピング": [
    { src: "/images/k1.jpg", title: "八王子オクトーレ", subtitle: "ショッピング", set: "n1" },
    { src: "/images/k2.jpg", title: "三井アウトレットパーク 多摩南大沢", subtitle: "ショッピング", set: "n2" },
    // 他の画像も同様に追加
  ],
  "スポーツ": [
    { src: "/images/u1.jpg", title: "とらんぽん八王子", subtitle: "スポーツ", set: "u1" },
    { src: "/images/u2.jpg", title: "戸吹スポーツ公園", subtitle: "スポーツ", set: "u2" },
    // 他の画像も同様に追加
  ],
  // 他のジャンルも同様に追加
  "居酒屋": [
    { src: "/images/i1.jpg", title: "韓国料理 青龍樹", subtitle: "居酒屋", set: "i1" },
    { src: "/images/i2.jpg", title: "もつ酒場", subtitle: "居酒屋", set: "i2" },
    // 他の画像も同様に追加
  ],
  "温泉": [
    { src: "/images/o1.jpg", title: "竜泉寺の湯 八王子みなみ野店", subtitle: "温泉", set: "o1" },
    { src: "/images/o2.jpg", title: "京王高尾山温泉 極楽湯", subtitle: "温泉", set: "o2" },
    // 他の画像も同様に追加
  ],
};

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedPreferences } = location.state || { selectedPreferences: [] };

  const handleClick = (image) => {
    navigate("/details", { state: { image } });
  };

  return (
    <div className="App-content">
      {selectedPreferences.length > 0 ? (
        selectedPreferences.flatMap((genre) =>
          images[genre].map((image, index) => (
            <div key={index} style={{ position: "relative" }}>
              <img
                src={image.src}
                alt={genre}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                onClick={() => handleClick(image)}
              />
              <div className="result-title">
                <h2>{image.title}</h2>
                <p>{image.subtitle}</p>
              </div>
            </div>
          ))
        )
      ) : (
        <p>選択がありません。</p>
      )}
    </div>
  );
};

export default ResultPage;