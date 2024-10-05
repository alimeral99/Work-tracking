import React, { useEffect, useState } from "react";
import "./WorkingList.css";
import Loading from "../../Loading/Loading";
import { searchWorks } from "../../redux/Works/WorkApi";

import { useSelector, useDispatch } from "react-redux";
import { Alert } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

function createData(works, durations, id) {
  return { works, durations, id };
}

function WorkingList() {
  const [date, setDate] = useState(new Date());

  const { currentWorks, alert } = useSelector((state) => state.works);
  const dispatch = useDispatch();

  useEffect(() => {
    searchWorks(dispatch, date);
  }, [dispatch]);

  const rows = currentWorks?.map((work) =>
    createData(work.name, work.duration, work._id)
  );

  return (
    <div className="working-list">
      {alert ? (
        <Alert severity="info">{alert}</Alert>
      ) : (
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
              {rows?.map((row, id) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell style={{ color: "grey" }}>{row.works}</TableCell>
                  <TableCell style={{ color: "grey" }} align="right">
                    {row.durations} hours
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}

export default WorkingList;
