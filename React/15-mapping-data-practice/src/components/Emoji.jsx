import React from 'react';

function Emoji(props) {
  return (
    <div className="cardContainer">
      <dl className="dictionary">
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {props.emoji}
            </span>
            <span>{props.name}</span>
          </dt>
          <dd>
            {props.meaning}
          </dd>
        </div>
      </dl>
    </div>
  );
}

export default Emoji;