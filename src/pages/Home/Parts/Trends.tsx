import React from "react";
import "./PartsStyle.css";

export const Trends: React.FC<{}> = ({}) => {
  return (
    <div className="container-fluid d-none d-sm-none d-md-none d-lg-block d-xl-block trends-styles">
      <div className="row">
        <div className="col-11">
          <h3 className="font-bold ml-5 my-3 rounded-t text-xl text-center">
            Trends for you
          </h3>
        </div>
        <div className="col-11">
        <button className="bg-dark w-80 m-3 w-100">
          <div className="py-3 px-6 flex justify-between">
            <div className="flex flex-col items-start">
              <h5 >
                <small>
                  <em>Trainings</em>
                </small>
              </h5>
              <h5 className="font-semibold">Escuelita Crombie</h5>
              <span className="text-xs">- 50 posts -</span>
            </div>
            <i className="bi bi-three-dots" />{" "}
          </div>
        </button>
        <button className="bg-dark w-80 m-3 w-100">
          <div className="py-3 px-5 flex justify-between">
            <div className="flex flex-col items-start">
              <h5 className="">
                <small>
                  <em>Entertainment</em>
                </small>
              </h5>
              <h5 className="font-semibold">Chipa thursday</h5>
              <span className="text-xs">- 100 posts -</span>
            </div>
            <i className="bi bi-three-dots" />{" "}
          </div>
        </button>
        <button className="bg-dark w-80 m-3 w-100">
          <div className="py-3 px-6 flex justify-between">
            <div className="flex flex-col items-start">
              <h5 className="">
                <small>
                  <em>Trainings</em>
                </small>
              </h5>
              <h5 className="font-semibold">Campus Crombie</h5>
              <span className="text-xs">- 150 posts -</span>
            </div>
            <i className="bi bi-three-dots" />{" "}
          </div>
        </button>
        </div>
        
      </div>
    </div>
  );
};
