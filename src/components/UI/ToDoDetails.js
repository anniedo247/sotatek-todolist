import React, { useState } from "react";
import Button from "../shared/Button";
import { ACTIONS } from "../reducer/TodoReducer";
import { HiOutlineX } from "react-icons/hi";

const ToDoDetails = ({ item, handleClose, dispatch}) => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);
  const [dueDate, setDueDate] = useState(item.dueDate);
  const [priority, setPriority] = useState(item.priority);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    dispatch({
      type: ACTIONS.SAVE,
      payload: {
        id: item.id,
        title: title.toLowerCase(),
        description,
        dueDate,
        priority,
      },
    });

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="textInput"
            type="text"
            placeholder={title}
            name="title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="colum-display textarea">
            <label className="label">Description</label>
            <textarea
              className="textareaInput"
              rows="8"
              name="description"
              placeholder={description}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="row">
            <div className="colum-display width45">
              <label className="label">Due Date</label>
              <input
                className="dateInput"
                type="date"
                defaultValue={dueDate}
                value={dueDate}
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
          <div>
            {loading ? (
              <Button disabled="true" size="big">
                Updating...
              </Button>
            ) : (
              <Button type="submit" size="big">
                UPDATE
              </Button>
            )}
          </div>
        </div>
      </form>
      <div className="close-details" >
      <HiOutlineX size="20" style={{cursor:'pointer'}} onClick={handleClose}/>
      </div>
    </div>
  );
};

export default ToDoDetails;
