<template>
  <td-list>
    <template v-slot:filter>
      <td-todo-status>
        <td-tags :labels="status" v-model="selectedStatus" @select="refresh"></td-tags>
      </td-todo-status>
    </template>

    <template v-slot:items>
      <td-todo-item v-for="todoItem in todoItems" :key="todoItem.id">
        <template v-slot:header>
          <td-title :title="todoItem.name"></td-title>
        </template>
        <template v-slot:content>
          <td-date-labeled
            :date="todoItem.deadline | formatDate"
            :label="todoItem.status === 'WIP' ? 'までに終わらせる' : 'までに終わらせる予定が'"
          ></td-date-labeled>
          <td-date-labeled
            class="mt-4"
            v-if="todoItem.status === 'DONE'"
            :date="todoItem.completionDate | formatDate"
            label="に終わった"
          ></td-date-labeled>
        </template>
        <template v-slot:footer>
          <td-button
            v-if="todoItem.status === 'WIP'"
            primary
            label="DONE"
            @click="changeStatus(todoItem.id, 'DONE')"
          ></td-button>
          <td-button
            v-if="todoItem.status === 'DONE'"
            danger
            label="DELETE"
            @click="deleteTodo(todoItem.id)"
          ></td-button>
        </template>
      </td-todo-item>
    </template>

    <template v-slot:action>
      <td-todo-add v-if="!adding">
        <td-area-clickable label="TODOアイテムを追加する" @click="adding = true"></td-area-clickable>
      </td-todo-add>
      <td-todo-item v-if="adding">
        <template v-slot:header>
          <td-title v-model="newTodoName" editable anchor-text="を"></td-title>
        </template>
        <template v-slot:content>
          <td-date-labeled v-model="newTodoDeadline" label="までに終わらせる" editable></td-date-labeled>
        </template>
        <template v-slot:footer>
          <td-button primary label="OK" @click="addTodo(newTodoName, newTodoDeadline)"></td-button>
        </template>
      </td-todo-item>
    </template>
  </td-list>
</template>

<script>
import todoStore from "../store/todo";
import { formatDate } from "../util";
import moment from "moment";

export default {
  data() {
    return {
      status: ["WIP", "DONE", "ALL"],
      selectedStatus: "ALL",
      todoItems: [],
      adding: false,
      newTodoName: "",
      newTodoDeadline: ""
    };
  },
  computed: {
    targetStatus() {
      return this.selectedStatus === "ALL"
        ? ["WIP", "DONE"]
        : [this.selectedStatus];
    }
  },
  filters: {
    formatDate
  },
  methods: {
    refresh() {
      this.todoItems = todoStore.findAll({
        status: this.targetStatus
      });

      this.newTodoName = "";
      this.newTodoDeadline = "";
    },
    changeStatus(id, status) {
      todoStore.update(id, {
        status,
        // register now as completion date.
        completionDate: new Date()
      });

      this.refresh();
    },
    deleteTodo(id) {
      todoStore.delete(id);

      this.refresh();
    },
    addTodo(name, deadline) {
      // TODO validate input value.

      todoStore.add({
        name,
        deadline
      });

      this.adding = false;

      this.refresh();
    }
  },
  created() {
    this.refresh();
  }
};
</script>