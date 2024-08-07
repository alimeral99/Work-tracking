import React, { useEffect, useState } from "react";
import "./WorkingList.css";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import axios from "axios";

function createData(works, durations) {
  return { works, durations };
}

function WorkingList() {
  const [works, setWorks] = useState([]);
  useEffect(() => {
    getWorks();
  }, []);

  const getWorks = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/working/get");
      setWorks(data);
    } catch (error) {
      console.error(error);
    }
  };

  const rows = works.map((work) => createData(work.name, work.duration));

  console.log(works);
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "600" }}>Works</TableCell>
              <TableCell style={{ fontWeight: "600" }} align="right">
                Durations
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.works}
                </TableCell>
                <TableCell align="right">{row.durations}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default WorkingList;
