import React from 'react'
import Button from '../shared/Button'

const ToDoDetails = () => {
  return (
    <div>
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
              <Button disabled="true" size="small">
                Updating...
              </Button>
            ) : (
              <Button type="submit" size="small">
                UPDATE
              </Button>
            )}
            <Button size='small'>CANCEl</Button>
          </div>
        </form>
    </div>
  )
}

export default ToDoDetails
