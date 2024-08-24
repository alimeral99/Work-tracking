import React, { useState } from "react";
import "./SearchWorking.css";
import { searchWorks } from "../../redux/Works/WorkApi";
import API_URL from "../../redux/Works/api";

import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function SearchWorking() {
  const [date, setDate] = useState(new Date());
  const { currentWorks } = useSelector((state) => state.works);

  const dispatch = useDispatch();

  console.log(currentWorks);

  const handleSearch = async (e) => {
    e.preventDefault();
    searchWorks(dispatch, date);
  };

  return (
    <div className="search-working">
      <form onSubmit={handleSearch} className="date-form">
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
