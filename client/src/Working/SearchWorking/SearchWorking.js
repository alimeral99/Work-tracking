import React, { useState } from "react";
import "./SearchWorking.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function SearchWorking() {
  const [date, setDate] = useState(new Date());

  console.log(date);

  const handleSearching = (e) => {
    e.preventDefault();

    console.log(date);
  };

  return (
    <div className="search-working">
      <form className="date-form" onSubmit={handleSearching}>
        <DatePicker
          wrapperClassName="date-picker"
          selected={date}
          onChange={(date) => setDate(date)}
        />
        <button>Search</button>
      </form>
    </div>
  );
}

export default SearchWorking;
