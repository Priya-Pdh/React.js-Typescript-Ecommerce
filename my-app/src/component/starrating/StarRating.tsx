import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./StarRating.css";

function StarRating() {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  return (
    <>
      <div id="StarRating-conatiner">
        {[...Array(5)].map((star, count) => {
          const ratingValue = count + 1;

          return (
            <label>
              <input
                className="star-rating-radio"
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
              />

              <FaStar
                className="star"
                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                size={60}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(0)}
              />
            </label>
          );
        })}
      </div>
      <p>The rating is {rating}</p>
    </>
  );
}

export default StarRating;
