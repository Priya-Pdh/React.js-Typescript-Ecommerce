import "./Feedback.css";
import React, { useState } from "react";
import StarRating from "../starrating/StarRating";

type ReviewProps = {
  id: number;
  description: string;
};

function FeedBack() {
  const [feedback, setFeedback] = useState<ReviewProps[]>([]);
  const [description, setDescription] = useState<string>("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // check if the value is empty
    if (description.length === 0) {
      alert("Please enter Feedback!");
      return;
    }

    // create a new review
    const review: ReviewProps = {
      id: 0,
      description: description,
    };

    // add review to the state
    setFeedback([review, ...feedback]);

    // clear the value of description
    setDescription("");
  };
  const handleDelete = (id: number) => {
    // find index of review from id
    const index = feedback.findIndex((review) => review.id === id);

    // remove review
    feedback.splice(index, 1);

    // update the state
    setFeedback([...feedback]);
  };

  return (
    <div id="feedback-container">
      <h2 className="feedback-heading">
        Please provide feedback regarding shopping experience.
      </h2>
      <p>Your Feedbacks are valuable</p>
      <form onSubmit={handleFormSubmit}>
        <div className="input-area">
          <input
            id="feedback-input"
            className="input-feedback"
            type="text"
            name="task"
            value={description}
            onChange={handleInput}
          />

          <br />
          <br />
          <div id="btn-container">
            <button type="submit" className="feedback-button">
              Add Feedback
            </button>
          </div>
        </div>
      </form>
      <ul>
        {feedback.map((review) => (
          <div id="list-conatiner">
            <li key={review.id}>
              {review.description}
              <button
                className="feedback-button"
                onClick={() => handleDelete(review.id)}
              >
                Remove
              </button>
            </li>
          </div>
        ))}
      </ul>
      <br />
      <br/>
      <StarRating />
      <br/>
      <br/>
    </div>
  );
}

export default FeedBack;
