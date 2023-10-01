import { useState, useEffect } from "react";
import Item from "./Item";

import { AiFillAlert } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";


function App() {

  // 변경된 아이템 표시
  const [changed, setChanged] = useState(null);
  // 체크 개수 카운트
  const [checkedCount, setCheckedCount] = useState(0);

  return (
    <>
      <article>
        <section className={"changed"}>
          <AiFillAlert />
          <h1>방금 변경된 아이템</h1>
          <div>{changed}</div>
        </section>

        <section className={"changed"}>
          <AiFillCheckCircle />
          <h1>체크된 아이템 개수</h1>
          <div>{checkedCount}개</div>
        </section>

        <section className={"list"}>
          <h1>
          <AiFillStar /> 아이템 리스트</h1>
    
          <ol>
            {["A", "B", "C", "D", "E", "F", "G", "H","I","J"].map((item) => {
              return (
                <Item 
                  key={item} 
                  item={item} 
                  setChanged={setChanged}
                  checkedCount={checkedCount}
                  setCheckedCount={setCheckedCount}
                />);
            })}
          </ol>
        </section>
      </article>
      <style jsx>{`
        article {
          height: 100vh;
          width: 100vw;
          max-width: 30rem;
          margin: 0 auto;
          padding: 1.5rem;

          background : #efe5e5;
          color : #5d5555;
        }

        article h1 {
          padding: 0 0.5rem;
        }
        section.changed {
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }
        section.changed > div {
          color:#1d1717;

          font-weight: 800;
        }
        section.list {
          display: flex;
          flex-direction: column;
        }
        section.list ol {
          list-style-type: none;
          padding: 0;
          margin: 0;

          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        li {
          display: flex;
          justify-content: space-between;
          align-items: center;

          padding: 1rem;
          border-radius: 0.5rem;
          background-color: white;
          

          box-shadow: 0px 2px 10px 0px rgb(182 158 198 / 15%);
          height: 2rem;
        }
        li > span {
          font-size: 1.5rem;
          font-weight: 500;
        }
        li > div {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
        }
        li > div > div:first-child {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding: 0 0.5rem;
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 5px;
          background: 
          font-weight: 700;
        }
        li > div > div.button-list {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
        }
        li > div > div.button-list button {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 1.7rem;
          height: 1.7rem;
          cursor: pointer;
          border-radius: 5px;
          border: none;

          background : #716868;

          font-size: 1rem;
          font-weight: 500;
        }
      `}</style>
    </>
  );
}

export default App;