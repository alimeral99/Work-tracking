import React, { useState } from "react";
import "./SearchWorking.css";
import { searchWorks } from "../../redux/Works/WorkApi";
import API_URL from "../../redux/Works/api";

import { format } from "date-fns";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function SearchWorking() {
  const [date, setDate] = useState(new Date());
  const [isMonthPicker, setIsMonthPicker] = useState(false);

  const { currentWorks } = useSelector((state) => state.works);

  const dispatch = useDispatch();

  const handleSearch = async (e) => {
    e.preventDefault();

    if (isMonthPicker) {
      const monthDate = format(date, "yyyy-MM");
      searchWorks(dispatch, monthDate);
    } else {
      searchWorks(dispatch, date);
    }
  };

  const handlePickerToggle = () => {
    setDate(null);
    setIsMonthPicker(!isMonthPicker);
  };

  console.log(date);
  return (
    <div className="search-working">
      <form onSubmit={handleSearch} className="date-form">
        <DatePicker
          selected={date}
          onChange={(date) => setDate(date)}
          wrapperClassName="date-picker"
          showMonthYearPicker={isMonthPicker}
          dateFormat={isMonthPicker ? "MM/yyyy" : "dd/MM/yyyy"}
        />

        <button>Search</button>
      </form>
      <button className="toogle-button" onClick={handlePickerToggle}>
        {isMonthPicker ? "Month" : "all date"}
      </button>
    </div>
  );
}

export default SearchWorking;
