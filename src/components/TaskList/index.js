import React, { useState, useMemo } from 'react';
import { Container, Typography, Box, Table, Button, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const header = ["SL.NO.", "Task Name", "Created", "Due", "Go Live", "Assignee", "Category", "Status", "JIRA ID", "Mock-Up", "Notes", "Actions"]

function TaskList({ tasks = null, onClickEdit = () => null }) {
  const [tasksList, setTasksList] = useState([]);
  const theme = createTheme();
  const [currentTaskId, setCurrentTaskId] = useState(0);

  useMemo(() => {
    if (tasks) {
      let _tasksList = tasksList;
      if (currentTaskId != 0) {
        _tasksList = tasksList.filter(item => item.id != currentTaskId);
      }
      setTasksList([..._tasksList, tasks]);
    }
  }, [tasks]);

  const onClickDone = (index) => {
    let _tasksList = JSON.parse(JSON.stringify(tasksList));
    _tasksList[index].status = "completed";
    setTasksList(_tasksList);
  }

  const onClickRevert = (index) => {
    let _tasksList = JSON.parse(JSON.stringify(tasksList));
    _tasksList[index].status = "On Hold";
    setTasksList(_tasksList);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xl">
        <Box
          sx={{
            marginTop: 8
          }}
        >
          <Typography component="h1" variant="h5">
            Task In Progress
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead style={{ backgroundColor: "lightgray" }}>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 1 } }}
                >
                  {header && header.map(item => (
                    <TableCell key={item} align="center" style={{color: "black", fontWeight: "bold"}}>{item}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {tasksList && tasksList.map((row, i) => {
                  if (row.status == "completed") {
                    return null;
                  }
                  return (
                    <TableRow
                      key={`${row.name}_${i}`}
                      sx={{ '&:last-child td, &:last-child th': { border: 1 } }}
                    >
                      <TableCell align="center" component="th" scope="row">{i + 1}</TableCell>
                      <TableCell align="center">{row.name}</TableCell>
                      <TableCell align="center">{row.created}</TableCell>
                      <TableCell align="center">{row.due}</TableCell>
                      <TableCell align="center">{row.goLive}</TableCell>
                      <TableCell align="center">{row.assignee}</TableCell>
                      <TableCell align="center">{row.category}</TableCell>
                      <TableCell align="center">{row.status}</TableCell>
                      <TableCell align="center">{row.jiraId}</TableCell>
                      <TableCell align="center">{row.mockUp}</TableCell>
                      <TableCell align="center">{row.notes}</TableCell>
                      <TableCell >
                        <Button
                          variant="contained"
                          sx={{ mb: 2 }}
                          color="error"
                          onClick={() => { setCurrentTaskId(row.id); onClickEdit(row) }}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="contained"
                          sx={{ ml: 1, mb: 2 }}
                          color="error"
                          onClick={() => onClickDone(i)}
                        >
                          Done
                        </Button>
                      </TableCell>
                    </TableRow>
                  )
                }
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box
          sx={{
            marginTop: 8,
            marginBottom: 20
          }}
        >
          <Typography component="h1" variant="h5">
            Task Completed
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead style={{ backgroundColor: "lightgray" }}>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 1 } }}
                >
                  {header && header.map(item => (
                    <TableCell key={item} align="center" style={{color: "black", fontWeight: "bold"}}>{item}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {tasksList && tasksList.map((row, i) => {
                  if (row.status != "completed") {
                    return null;
                  }
                  return (
                    <TableRow
                      key={`${row.name}_${i}`}
                      sx={{ '&:last-child td, &:last-child th': { border: 1 } }}
                    >
                      <TableCell align="center" component="th" scope="row">{i + 1}</TableCell>
                      <TableCell align="center">{row.name}</TableCell>
                      <TableCell align="center">{row.created}</TableCell>
                      <TableCell align="center">{row.due}</TableCell>
                      <TableCell align="center">{row.goLive}</TableCell>
                      <TableCell align="center">{row.assignee}</TableCell>
                      <TableCell align="center">{row.category}</TableCell>
                      <TableCell align="center">{row.status}</TableCell>
                      <TableCell align="center">{row.jiraId}</TableCell>
                      <TableCell align="center">{row.mockUp}</TableCell>
                      <TableCell align="center">{row.notes}</TableCell>
                      <TableCell >
                        <Button
                          variant="contained"
                          sx={{ mb: 2 }}
                          color="error"
                          onClick={() => onClickRevert(i)}
                        >
                          REVERT
                        </Button>
                      </TableCell>
                    </TableRow>
                  )
                }
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default TaskList;