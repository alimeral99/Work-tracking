import React, { useEffect, useState } from "react";
import "./WorkingList.css";
import API_URL from "../../api";

import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(works, durations, id) {
  return { works, durations };
}

function WorkingList() {
  const [works, setWorks] = useState([]);
  useEffect(() => {
    getWorks();
  }, []);

  const getWorks = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/api/works`);
      setWorks(data);
    } catch (error) {
      console.error(error);
    }
  };

  const rows = works.map((work) =>
    createData(work.name, work.duration, work._id)
  );

  return (
    <div className="workingList">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 600 }}>Works</TableCell>
              <TableCell style={{ fontWeight: 600 }} align="right">
                Durations
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, id) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell key={id} style={{ color: "grey" }}>
                  {row.works}
                </TableCell>
                <TableCell key={id} style={{ color: "grey" }} align="right">
                  {row.durations}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default WorkingList;
