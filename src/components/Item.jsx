import React, { useState } from "react";
import "../styling/transaction.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Item = ({ transaction }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="wrap-item">
      <div className="id">
        <h4>{transaction.date}</h4>
      </div>
      <div className="descriptionn">
        <h4>{transaction.description}</h4>
      </div>
      <div className="amount">
        <h4>{transaction.amount}</h4>
      </div>
      <div className="balence">
        <h4>{transaction.balance}</h4>
      </div>
      <div className="toggle-icon" onClick={toggleExpand}>
        <FontAwesomeIcon icon={expanded ? faArrowUp : faAngleDown} />
      </div>
      {expanded && (
        <div className="parent">
          <div className="expanded-details wrap-item">
            {/* Additional details for expanded view */}
            {/* Modify this section according to your data structure */}
            <div className="expanded-details-content">
              <p>Additional details for {transaction.description}</p>
              {/* Example: */}
              <div className="descriptionn">
                <p className="">Additional info: Some more information here.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Item;
