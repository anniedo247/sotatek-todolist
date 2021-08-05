import React, { useContext, useState } from "react";

import Banner from "../shared/Banner";
import { TodoContext } from "../context/TodoContext";
import { ACTIONS } from "../reducer/TodoReducer";
import Button from "../shared/Button";

const AddToDo = () => {
  var curr = new Date();
  curr.setDate(curr.getDate());
  var date = curr.toISOString().substr(0, 10);

  const { dispatch } = useContext(TodoContext);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(date);
  const [priority, setPriority] = useState("normal");

  const clearData = () => {
    setTitle("");
    setDescription("");
    setDueDate(date);
    setPriority("normal");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    dispatch({
      type: ACTIONS.ADD,
      payload: {
        title: title.toLowerCase(),
        description,
        dueDate,
        priority,
      },
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 2000);

    clearData();
    setLoading(false);
  };

  return (
    <div>
      <h2> New Task</h2>
      <container>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              className="textInput"
              type="text"
              placeholder="Add new task..."
              name="title"
              required
              value={title}
              disabled={loading}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="colum-display textarea">
              <label className="label">Description</label>
              <textarea
                className="textareaInput"
                rows="8"
                name="description"
                value={description}
                disabled={loading}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="row">
              <div className="colum-display width45">
                <label className="label">Due Date</label>
                <input
                  className="dateInput"
                  type="date"
                  defaultValue={date}
                  value={dueDate}
                  disabled={loading}
                  onChange={(e) => setDueDate(e.target.value)}
                  name="dueDate"
                />
              </div>
              <div className="colum-display width45">
                <label className="label">Priority</label>
                <select
                  className="priorityInput"
                  name="priority"
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                >
                  <option value="low">Low</option>
                  <option value="normal">Normal</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>
            {loading ? (
              <Button disabled="true" size="big">
                Adding...
              </Button>
            ) : (
              <Button type="submit" size="big">
                ADD
              </Button>
            )}
          </div>
        </form>
        {submitted && (
          <Banner text="A new to-do has been added to your list!" />
        )}
      </container>
    </div>
  );
};

export default AddToDo;
