import React, { useState, useEffect } from "react";

const Item = ({ item, setChanged, checkedCount, setCheckedCount }) => {
  const [count, setCount] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setChanged(item);
  }, [count, isChecked]);
  
  const handleCheckboxChange = () => {
    setCheckedCount((prevCount) => (isChecked ? prevCount - 1 : prevCount + 1));
    setIsChecked(!isChecked);
  };

  return (
    <>
      <li>
        <div>
          <input
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={isChecked}
          />
          <span style={{ fontWeight: "bold" }}>{item}</span>
        </div>

        <div>
          <div>{count}</div>
          <div className={"button-list"}>
            <button
              onClick={() => {
                setCount(count - 1);
              }}
            >
              -
            </button>
            <button
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </button>
          </div>
        </div>

      </li>
      <style jsx>{`
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
          background: #efeded;
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
          background: #f6ecff;
          
          font-size: 1rem;
          font-weight: 500;
        }
      `}</style>
    </>
  );
};

export default Item;