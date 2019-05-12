import Vue from "vue";

// namespace for Todo
const namespace = "Td";

// molecules
import AreaClickable from "./molecules/AreaClickable";
Vue.component(namespace + "AreaClickable", AreaClickable);
import Button from "./molecules/Button";
Vue.component(namespace + "Button", Button);
import DateLabeled from "./molecules/DateLabeled";
Vue.component(namespace + "DateLabeled", DateLabeled);
import Tags from "./molecules/Tags";
Vue.component(namespace + "Tags", Tags);
import Title from "./molecules/Title";
Vue.component(namespace + "Title", Title);

// organisms
import TodoAdd from "./organisms/TodoAdd";
Vue.component(namespace + "TodoAdd", TodoAdd);
import TodoItem from "./organisms/TodoItem";
Vue.component(namespace + "TodoItem", TodoItem);
import TodoStatus from "./organisms/TodoStatus";
Vue.component(namespace + "TodoStatus", TodoStatus);

// templates
import List from "./templates/List";
Vue.component(namespace + "List", List);

// pages
import Manage from "./pages/Manage";
Vue.component(namespace + "Manage", Manage);

import "./style.css";

new Vue({
  el: "#app",
  render: h => h(Manage)
});
