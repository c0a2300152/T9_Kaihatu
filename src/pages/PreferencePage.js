import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/PreferencePage.css";

// ジャンルのリスト
const genres = [
  "グルメ", "歴史、文化", "自然", "ショッピング", "スポーツ", "居酒屋", "温泉"
];

const PreferencePage = () => {
  const [selectedPreferences, setSelectedPreferences] = useState([]);
  const navigate = useNavigate();

  // チェックボックス変更時のハンドラ
  const handleCheckboxChange = (genre) => {
    setSelectedPreferences((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  // フォーム送信時のハンドラ
  const handleSubmit = () => {
    navigate('/result', { state: { selectedPreferences } });
  };

  return (
    <div className="preferences">
      <h2>どのようなコンテンツを見たいですか？</h2>
      <p>興味・関心を選択して、表示される内容をパーソナライズする</p>
      
      {/* ジャンル選択 */}
      <div className="genre-grid">
        {genres.map((genre) => (
          <label key={genre} className="genre-item square">
            <input
              type="checkbox"
              checked={selectedPreferences.includes(genre)}
              onChange={() => handleCheckboxChange(genre)}
            />
            {genre}
          </label>
        ))}
      </div>

      {/* 次へボタン */}
      <div className="button-group" style={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}>
        <button
          className="next-button"
          onClick={handleSubmit}
          disabled={selectedPreferences.length === 0}
        >
          {selectedPreferences.length === 0 ? "次へ" : `次へ (${selectedPreferences.length})`}
        </button>
      </div>
    </div>
  );
};

export default PreferencePage;