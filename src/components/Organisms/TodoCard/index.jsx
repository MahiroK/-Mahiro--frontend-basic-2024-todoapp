//インポート
import React, { useState } from "react";
import { Task } from "../../Molecules/Task";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import AddTaskButton from "../../Atoms/AddTaskButton";

export default function TodoCard() {
  // useStateの中にある[]の意味＞複数の値の時に用いる。空白でも使う理由としては、タスクリストが空配列の意味を表すことが多い。
  //　空の配列として定義することを意味している・型を合わせるため
  // initializing True
  // タスクを追加すると編集状態のタスクが出てくる
  const [taskList, setTaskList] = useState([]);
  const onAddTaskButtonClick = () => {
    const newTask = {
      name: "",
      initializing: true,
    };
    setTaskList([...taskList, newTask]);
  };

  const onTaskComplete = (index) => {
    setTaskList(taskList.filter((_, taskIndex) => taskIndex !== index));
  };

  const onTaskNameChange = (value, index) => {
    //編集したいものに対してアプローチをしている。
    if (value === "") {
      setTaskList(taskList.filter((_, taskIndex) => taskIndex !== index));
    } else {
      setTaskList(
        taskList.map((taskElement, taskIndex) => {
          if (taskIndex === index) {
            return { ...taskElement, name: value, initializing: false };
          }
          return taskElement;
        })
      );
    }
  };
  // AddTaskButtonのタグを一つにする
  return (
    <StyledWrapper>
      <AddTaskButton onClick={onAddTaskButtonClick} />
      <StyledTaskList>
        {taskList.map((task, index) => (
          <Task
            onTaskComplete={() => onTaskComplete(index)} //
            key={index}
            onTaskNameChange={(value) => onTaskNameChange(value, index)} // 51行目と同じindex.valueはTaskをユーザーが追加・入力したときの値（テキスト）が途中の時
            //ユーザーが入力したもの
            taskName={task.name}
            // task.initializingを理解するにはdefaultがどのような意味を果たしているかが重要。
            //編集中か否かのデフォルト値としてtask.initializingは使われている。初めから（初期状態で）編集中or閲覧中を決めている。
            //Trueだと初めから編集中になるということの明渡をしている。前に渡すためのものだった。isEditingの動作のために必要。
            defaultIsEditing={task.initializing}
          />
        ))}
      </StyledTaskList>
    </StyledWrapper>
  );
}
// map関数：新しい配列を作って並べる・取り出すetc...タスクを追加すると新しいタスクができて、それを保持するもの＝タスクコンポーネント

//styled-component
const StyledWrapper = styled.div`
  background-color: ${COLOR.LIGHT_BLACK};
  border-radius: 4px;
  padding: 20px;
  flex-direction: column;
`;
const StyledTaskList = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
