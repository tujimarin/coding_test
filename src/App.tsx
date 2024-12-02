import { useEffect } from "react";
/**
 * 入力値を反転させて、加算した数字を、文字列として返します
 * @param {String} insertVal
 * @return 計算した数字の文字列
 */
const insertReverse = (insertVal: String): String => {
  let resultVal = '2桁以上で入力してください';
  if (!Number.isInteger(Number(insertVal))) {
    resultVal = '数字を入力してください';
  } else if (insertVal.length > 1) {
    let reverse = insertVal.split('').reverse().join('');
    resultVal = String(Number(insertVal) + Number(reverse));
  }
  return resultVal;
}

function App() {
  useEffect(() => {
    let insertEl = document.getElementById('insert') as HTMLInputElement;
    let buttonEl = document.getElementById('button') as HTMLElement;
    let resultEl = document.getElementById('result') as HTMLElement;

    buttonEl.addEventListener('click', function () {
      if (insertEl) {
        const resultVal = insertReverse(insertEl.value);
        resultEl.innerText = resultVal.toString();
      }
    });
  })
  return (
    <>
      <div className="insert_block_items">
        <input id="insert" type="text" placeholder="2桁以上で入力" />
        <button id="button">
          計算
        </button>
      </div>

      <div className="result_block">
        <p id="result">

        </p>
      </div>
    </>
  );
}

export default App;
