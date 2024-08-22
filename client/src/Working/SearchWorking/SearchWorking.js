import React, { useState } from "react";
import "./SearchWorking.css";
import API_URL from "../../api";

import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function SearchWorking() {
  const [date, setDate] = useState(new Date());

  const works = useSelector((state) => state.works);
  const dispatch = useDispatch();

  console.log(works);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`${API_URL}/api/searchWorks/${date}`);
      console.log(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
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
