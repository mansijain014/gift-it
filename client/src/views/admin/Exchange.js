import React, { useState, useEffect } from "react";
import { db } from "../../firebase";

export default function Exchange() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    db.collection("users").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const items = doc.data().items;
        if (items) {
          setItems((prev) => [...prev, ...items]);
        }
      });
    });
    console.log(items);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-wrap pt-20">
      {items.map((item) => {
        return (
          <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
              <img
                alt="..."
                src={item.imageURL}
                className="w-full align-middle rounded-t-lg"
                style={{
                  height: 300,
                  width: 400,
                }}
              />
              <blockquote className="relative p-8 mb-4">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  className="absolute left-0 w-full block h-95-px -top-94-px"
                >
                  <polygon
                    points="-32,95 583,95 583,65"
                    className="text-lightBlue-500 fill-current"
                  ></polygon>
                </svg>

                <h4 className="text-xl font-bold text-white">
                  <span class="tab"> {item.itemName} </span>
                </h4>
                <p className="text-md font-light mt-2 text-white">
                  {item.description}
                </p>
                <button className="btn btn-block inline-flex justify-center py-2 border border-transparent shadow-sm text-sm font-medium rounded-md" style={{width: 70}}>
                  Interested
                </button>
              </blockquote>
            </div>
          </div>
        );
      })}
    </div>
  );
}
