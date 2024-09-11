import React, { useState } from "react";
import "./SearchWorking.css";
import { searchWorks } from "../../redux/Works/WorkApi";
import { reset } from "../../redux/Works/WorksSlice";

import { useSelector, useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { IoCaretBackSharp } from "react-icons/io5";
import { IoCaretForwardSharp } from "react-icons/io5";

function SearchWorking() {
  const [date, setDate] = useState(new Date());
  const [isMonthPicker, setIsMonthPicker] = useState(false);

  const dispatch = useDispatch();

  const handleSearch = async (e) => {
    e.preventDefault();

    if (isMonthPicker) {
      const monthDate = format(date, "yyyy-MM");
      searchWorks(dispatch, monthDate);
    } else {
      searchWorks(dispatch, date);
    }

    dispatch(reset());
  };

  const changeDate = (days) => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    setDate(newDate);
  };

  const handlePickerToggle = () => {
    setDate(null);
    setIsMonthPicker(!isMonthPicker);
  };

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

      <div className="buttons-container">
        <button className="dateChange-btn" onClick={() => changeDate(-1)}>
          <IoCaretBackSharp />
        </button>

        <button className="dateChange-btn" onClick={() => changeDate(1)}>
          <IoCaretForwardSharp />
        </button>

        <button className="toogle-btn" onClick={handlePickerToggle}>
          {isMonthPicker ? "Month" : "all date"}
        </button>
      </div>
    </div>
  );
}

export default SearchWorking;
