import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from 'react-redux';
import { doneItem, editItem, filterByDone } from "../store/item";
import itemImg from "../img/item.jpg";
function Task(props) {
    const dispatch = useDispatch();
    const {filtredList , globalList} = useSelector((state) => state.item.items);
    const [update, setUpdate] = useState(false);
    const [id, setId] = useState(null);
    const [desc2, setDesc2] = useState("");
  return (
    <div>
       <div className="center">
          <button
            type="button"
            class="btn btn-outline-dark"
            onClick={() => dispatch(filterByDone(true))}
          >
            task is done{" "}
          </button>
          <button
            type="button"
            class="btn btn-outline-dark"
            onClick={() => dispatch(filterByDone(false))}
          >
            task is not done{" "}
          </button>
        </div>
      
      <div className="flex">
        {globalList.length >= 0
          ? filtredList.map((item1) => (
              <div className="card cardStyle" key={item1.id}>
                <div className="img">
                  <img src={itemImg} className="card-img-top" alt="item" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{item1.title}</h5>
                  <p className="card-text">{item1.desc}</p>
                  <div className="button">
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        setUpdate(true);
                        setId(item1.id);
                      }}
                    >
                      Edit
                    </button>
                    {update && id === item1.id && (
                      <div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-default"
                          placeholder="descreption"
                          onChange={(e) => setDesc2(e.target.value)}
                        />
                        <button
                          className="btn btn-outline-success"
                          onClick={() => {
                            dispatch(editItem({ id, desc: desc2 }));
                            setUpdate(false);
                          }}
                        >
                          update
                        </button>
                      </div>
                    )}

                    <button
                      type="button"
                      className={`btn ${
                        item1.isdone
                          ? "btn-outline-success"
                          : "btn-outline-danger"
                      } `}
                      onClick={() => dispatch(doneItem(item1.id))}
                    >
                      Done
                    </button>
                  </div>
                </div>
              </div>
            ))
          : "no items"}
      </div>
    </div>
  )
}

export default Task
