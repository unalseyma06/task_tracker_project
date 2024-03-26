import axios from "axios";
import { useEffect, useState } from "react";
import TaskList from "../components/TaskList";
import AddTask from "../components/AddTask";
import { Button } from "react-bootstrap";


function Home() {
  const [task, setTask] = useState([]);
  const url = "https://65f48298f54db27bc021de76.mockapi.io/task-tracker";
  const getTask = async () => {
    const { data } = await axios(url);
    setTask(data);
  };
  useEffect(() => {
    getTask();
  }, []);
  return (
    <div>
      <AddTask getTask={getTask} />
      <TaskList task={task} getTask={getTask} />
    </div>
  );
}
export default Home;
