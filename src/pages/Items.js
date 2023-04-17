import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, doneItem, editItem, filterByDone, reset } from "../store/item";
import itemImg from "../img/item.jpg";
function Items() {
  const { globalList, filtredList } = useSelector((state) => state.item.items);
  const dispatch = useDispatch();
  const [desc, setDesc] = useState("");
  const [update, setUpdate] = useState(false);
  const [id, setId] = useState(null);
  const [desc2, setDesc2] = useState("");
  return (
    <div>
      <div classNamee="container">
        <h1 className="center">
          {" "}
          <span className="badge bg-secondary">Add Items</span>
        </h1>
        <div className="input-group mb-3 px-5 ">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Descreption
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            placeholder="descreption"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="center">
          <button
            type="button"
            className="btn btn-outline-success px-5"
            onClick={() => {
              dispatch(
                addItem({ id: globalList.length + 1, desc, isdone: false })
              );
              setDesc("");
            }}
          >
            Add task
          </button>
          <div className="center">
          <button type="button" class="btn btn-outline-success px-5" onClick={() => dispatch( reset())}>show all task </button>
          </div>
        </div>
        <div className="center">
          <button
            type="button"
            class="btn btn-outline-dark"
            onClick={() => dispatch(filterByDone(true))}
          >
            item is done{" "}
          </button>
          <button
            type="button"
            class="btn btn-outline-dark"
            onClick={() => dispatch(filterByDone(false))}
          >
            item is not done{" "}
          </button>
        </div>
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
  );
}

export default Items;
