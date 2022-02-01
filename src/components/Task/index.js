import React, {useState} from 'react';
import { Container, Box, Button, MenuItem, InputLabel, Select, Avatar, TextareaAutosize, CssBaseline, TextField, FormControl, FormControlLabel, Grid, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TaskList from '../TaskList';
import moment from "moment";

const categories = ["NAP Bug Task", "NAP Dev", "New Project", "HP Update"];
const statusList = ["Completed", "In QC", "In Development", "On Hold"];
const assigneeList = ["Bibhu", "Tanzil"];

const initialState = {
  name: "", 
  due: null, 
  goLive: null, 
  assignee: "", 
  category: "", 
  status: "",
  jiraId: "",
  mockUp: "",
  notes: ""
};

function Task() {
  const theme = createTheme();
  const [tasks, setTasks] = useState(null);
  const [
    {
      name, 
      due, 
      goLive, 
      assignee, 
      category, 
      status,
      jiraId,
      mockUp,
      notes
    },
    setState,
  ] = useState(initialState);
  const [taskId, setTaskId] = useState('');

  function gen4() {
    return Math.random().toString(16).slice(-4)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let created = moment().format("YYYY-MM-DD");
    let currentRes = {
      id: taskId ? taskId : gen4(),
      name, 
      due, 
      goLive, 
      assignee, 
      category, 
      status,
      jiraId,
      mockUp,
      notes,
      created
    };
    setTasks(currentRes);
    clearForm();
  }

  const clearForm = () => {
    setState({ ...initialState });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setTasks(null);
    setState(prevState => ({ ...prevState, [name]: value }));
  }

  const handleDateChange = (date, id) => {
    setState(prevState => ({ ...prevState, [id]: moment(new Date(date)).format("YYYY-MM-DD") }));
  }

  const onClickEdit = (item) => {
    setTaskId(item.id);
    setState(prevState => ({ ...item }));
  }

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="lg">
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              Task Form
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={5}>
                  <TextField
                    autoComplete="given-name"
                    name="name"
                    fullWidth
                    value={name}
                    onChange={handleChange}
                    id="name"
                    label="Task Name"
                    // autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={5}>
                  <FormControl fullWidth>
                    <InputLabel id="category-select-label">Select Category</InputLabel>
                    <Select
                      labelId="category-select-label"
                      name="category"
                      value={category}
                      label='Select Category'
                      onChange={handleChange}
                    >
                      {categories && categories.map(item=> (
                        <MenuItem key={item} value={item}>{item}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <TextField
                    name="jiraId"
                    fullWidth
                    id="jiraId"
                    value={jiraId}
                    onChange={handleChange}
                    label="Jira ID"
                  />
                </Grid>
                <Grid item xs={6} sm={3}>
                  <FormControl fullWidth>
                    <InputLabel id="assignee-select-label">Select Assignee</InputLabel>
                    <Select
                      labelId="assignee-select-label"
                      name="assignee"
                      value={assignee}
                      label='Select Assignee'
                      onChange={handleChange}
                    >
                      {assigneeList && assigneeList.map(item=> (
                        <MenuItem key={item} value={item}>{item}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6} sm={3}>  
                  <FormControl fullWidth>
                    <InputLabel id="status-select-label">Select Status</InputLabel>
                    <Select
                      labelId="status-select-label"
                      name="status"
                      value={status}
                      label='Select Status'
                      onChange={handleChange}
                    >
                      {statusList && statusList.map(item=> (
                        <MenuItem key={item} value={item}>{item}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6} sm={3}>  
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      label="Due"
                      value={due}
                      onChange={(newValue) => {
                        handleDateChange(newValue, "due")
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={6} sm={3}>  
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      label="Go Live"
                      value={goLive}
                      onChange={(newValue) => {
                        handleDateChange(newValue, "goLive")
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="mockUp"
                    label="Mock Up"
                    name="mockUp"
                    value={mockUp}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextareaAutosize
                    aria-label="empty textarea"
                    placeholder="Other Comments"
                    name="notes"
                    value={notes}
                    onChange={handleChange}
                    style={{ width: "100%", height: 130 }}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color="error"
              >
                Submit
              </Button>

            </Box>
          </Box>
        </Container>
      </ThemeProvider>
      <TaskList tasks={tasks} onClickEdit={onClickEdit}></TaskList>
    </React.Fragment>
  )
}

export default Task;