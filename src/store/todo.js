import uuidv4 from "uuid/v4";

const dataKey = "todo-data";

class TodoStore {
  findAll({ status }) {
    const data = this.getData();

    return data.filter(x => status.includes(x.status));
  }

  add(newTodo) {
    const data = this.getData();

    data.push({
      id: uuidv4(),
      ...newTodo,
      status: "WIP"
    });

    this.saveData(data);
  }

  update(id, updateProps) {
    const data = this.getData();

    const index = data.findIndex(x => x.id === id);

    data[index] = {
      ...data[index],
      ...updateProps
    };

    this.saveData(data);
  }

  delete(id) {
    const data = this.getData();

    data.splice(data.findIndex(x => x.id === id), 1);

    this.saveData(data);
  }

  getData() {
    return JSON.parse(localStorage.getItem(dataKey) || "[]");
  }

  saveData(data) {
    localStorage.setItem(dataKey, JSON.stringify(data));
  }
}

export default new TodoStore();
