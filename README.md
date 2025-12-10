# Quiz app

## 專案簡介

- 一個小型的單頁 React 測驗遊戲網頁。
- 系統會根據使用者的作答紀錄，計算正確率、錯誤率、跳題率。


## 技術堆疊

- **Frontend：**
  - React（`useState`、`useEffect`、`useCallback`、`useRef`）
  - JSX Components
  - CSS
- **Tools：**
  - Vite
  - Git / GitHub


## 功能特色

- 依序顯示題目

  - 作答後先顯示正確答案在切換至下一題。
  - 若無作答，10 秒後自動跳到下一題。

- 倒數計時器

  - 每題皆有 10 秒鐘時間可以做答。
  - 並以進度調呈現剩餘時間。

- 隨機排列選項

- 顯示測驗結果
  - 計算並顯示： 跳題率、答對率、答錯率。
  - 每題的作答結果和原始題目的內容。

## 截圖

<img width="2777" height="1472" alt="Image" src="https://github.com/user-attachments/assets/72485edf-25a6-4a4c-9802-02f6e627bc88" />
<img width="2774" height="1474" alt="Image" src="https://github.com/user-attachments/assets/5715b764-5972-4241-aadc-098023dcc668" />
<img width="2734" height="1467" alt="Image" src="https://github.com/user-attachments/assets/e05cc9d5-41ee-4d43-93cc-c3f337579337" />

## 安裝與執行

```bash
git clone https://github.com/dittooooo/quiz-app.git
npm install
npm run dev
```

## 專案架構

```bash
src/
 ├── assets/
 ├── components/
 │    ├── Answers.jsx
 │    ├── Header.jsx
 │    ├── Question.jsx
 │    ├── QuestionTimer.jsx
 │    ├── Quiz.jsx
 │    └── Summary.jsx
 ├── App.jsx
 ├── index.css
 ├── main.jsx
 └── questions.js
```
