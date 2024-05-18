import React from "react";
import PB from "../../ima/pb.jpg";
import HoverRating from "../rating/HoverRating";

export default function CompPeople() {
  return (
    <>
      <div className="person1">
        <div className="image-area">
          <img className="w-2/4" src={PB} alt="" />
        </div>
        <div className="text-area">
          <div className="name">Name: Prakash Bhattarai</div>
          <div className="age">Age: 33</div>
        </div>
        <div className="comment-section">
          <div className="submit-sec">
            <button>Submit</button>
          </div>
        </div>
        <div className="rating-area">
          <HoverRating />
        </div>
        <div className="input-section">
          <input type="text" placeholder="FeedBack" />
        </div>
      </div>

      <div className="person1">
        <div className="image-area">
          <img className="w-2/4" src={PB} alt="" />
        </div>
        <div className="text-area">
          <div className="name">Name: Prakash Bhattarai</div>
          <div className="age">Age: 33</div>
        </div>
        <div className="comment-section">
          <div className="submit-sec">
            <button>Submit</button>
          </div>
        </div>
        <div className="rating-area">
          <HoverRating />
        </div>
        <div className="input-section">
          <input type="text" placeholder="FeedBack" />
        </div>
      </div>

      <div className="person1">
        <div className="image-area">
          <img className="w-2/4" src={PB} alt="" />
        </div>
        <div className="text-area">
          <div className="name">Name: Ram Adhin</div>
          <div className="age">Age: 39</div>
        </div>
        <div className="comment-section">
          <div className="submit-sec">
            <button>Submit</button>
          </div>
        </div>
        <div className="rating-area">
          <HoverRating />
        </div>
        <div className="input-section">
          <input type="text" placeholder="FeedBack" />
        </div>
      </div>
    </>
  );
}
