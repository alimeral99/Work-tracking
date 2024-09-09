import React, { useEffect, useState } from "react";
import "./WorkingList.css";
import FilterWorking from "./FilterWorking/FilterWorking";
import Loading from "../../Loading/Loading";
import { getWorks } from "../../redux/Works/WorkApi";

import { useSelector, useDispatch } from "react-redux";
import { Alert } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(works, durations, id) {
  return { works, durations, id };
}

function WorkingList() {
  const { currentWorks, alert, filteredWorks } = useSelector(
    (state) => state.works
  );

  const dispatch = useDispatch();

  useEffect(() => {
    getWorks(dispatch);
  }, [dispatch]);

  if (!currentWorks) return <Loading />;

  if (alert) {
    return <Alert severity="info">{alert}</Alert>;
  }

  const rows = currentWorks.map((work) =>
    createData(work.name, work.duration, work._id)
  );
  return (
    <div className="working-list">
      {filteredWorks ? (
        <FilterWorking />
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
