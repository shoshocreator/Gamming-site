import React, { useEffect, useState } from "react";

import ChangingPage from "../ChangingPage/ChangingPage";

const TheGame = (props) => {
  const { allData } = props;
  let [addition, setAddition] = useState(20);

  let [newData, setNewData] = useState([]);

  // function splicingData(x) {
  //   for (let x = 0; allData.length > 20; x = x + 20) {
  //     newData = allData?.splice(0, 20 + { x });
  //     setNewData(newData);
  //   }
  // }
  useEffect(() => {
    setNewData(allData?.splice(0, addition));
  }, [addition]);
  return (
    <>
      <div className="row g-2 py-4 text-center">
        {newData?.map((game) => {
          return <ChangingPage key={game.id} game={game} />;
        })}

        {allData?.length > 20 && allData?.length > addition ? (
          <button
            onClick={() => {
              setAddition(addition + 20);
            }}
            className="btn btn-primary"
          >
            Show more
          </button>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default TheGame;
