import Post from "../containners/Post"
import ToDoList from "../containners/ToDoList"
import Notes from "../containners/Notes"
import AlarmList from "../containners/AlarmsList"
var components = [{ component: Post, url: "/center/post" },
{ component: ToDoList, url: "/center/toDoList" },
{ component: Notes, url: "/center/note" }, { component: AlarmList, url:"/center/alarmList" }]
export default components