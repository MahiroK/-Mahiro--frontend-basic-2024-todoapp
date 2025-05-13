import { TodoCard } from "./index";

export default { title: "components/organisms/TodoCard", component: TodoCard };

export const Default = {
  args: {
    onClick: () => console.log("clicked"),
  },
};
