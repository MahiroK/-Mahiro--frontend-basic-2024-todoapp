import React from "react";
import { useState } from "react";
import AddTaskButton from "../../Atoms/AddTaskButton";
import Task from "../../Molecules/Task";
import styled from "styled-components";
import COLOR from "../../../variables/color";
export const TodoCard = () => {
  const [taskList, setTaskList] = useState([]);
  const onAddTaskButtonClick = () => {
    const newTasks = {
      name: "",
      initializing: true,
    };

    setTaskList((prevList) => [...prevList, newTasks]);
  };

  const onTaskComplete = (index) => {
    setTaskList((prevList) => prevList.filter((_, i) => i !== index));
  };

  const onTaskNameChange = (value, index) => {
    setTaskList((prevList) => {
      if (value === "") {
        return prevList.filter((_, i) => i !== index);
      } else {
        const newList = [...prevList];
        newList[index] = { ...newList[index], name: value };
        return newList;
      }
    });
  };
  return (
    <Wrapper>
      <AddTaskButton onClick={onAddTaskButtonClick}>タスク追加</AddTaskButton>
      <TaskList>
        {taskList.map((task, index) => (
          <Task
            key={index}
            onTaskComplete={() => onTaskComplete(index)}
            onTaskNameChange={(value) => onTaskNameChange(value, index)}
            taskName={task.name}
            defaultIsEditing={task.initializing}
          />
        ))}
      </TaskList>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-color: ${COLOR.LIGHT_BLACK};
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 4px;
`;
const TaskList = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  flex-direction: column;
`;
