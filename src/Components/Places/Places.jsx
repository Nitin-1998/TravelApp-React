import React, { useState } from "react";
import PlacesCard from "./PlacesCard";
import Popup from "../Popup/Popup";

const Places = () => {
  //Pop form
  const [ShowForm, setShowForm] = useState(false);

  const openPopup = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };
  return (
    <>
      <div onClick={openPopup} className="  ">
        <div className="container py-10 ">
          <h1 className=" border-l-8 h-12 border-secondary pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
        </div>
        <div>
          <PlacesCard />
          {ShowForm && <Popup closeForm={closeForm} />}
        </div>
      </div>
    </>
  );
};

export default Places;
