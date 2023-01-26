import React from "react";
import './Review_list.css'


function Review_list(props){
    return(
        <div className="reviewContent">
            <div className="rvLeft">
              <div className="lRating">
                <p>{props.rating}</p>
              </div>

              <div className="lSize">
                <p>사이즈:</p> <span>{props.size}</span>
                <div className="bar2"><span className="point"></span></div>
              </div>
  
              <div className="lRelax">
                <p>편안함:</p> <span>{props.relax}</span>
                <div className="bar2"><span className="point"></span></div>
              </div>
  
              <div className="lLife">
                <p>내구성:</p> <span>{props.life}</span>
                <div className="bar2"><span className="point"></span></div>
              </div>
            </div>

            <div className="rvRight">
              <div className="rvContentWrap">
                <div className="rvContent">
                  <h4>{props.title}</h4>
                  <p>
                    {props.content}
                  </p>
                  <p className="rvDate">{props.date}</p>
                </div>
              </div>
            </div>
        </div>
    )
}
export default Review_list