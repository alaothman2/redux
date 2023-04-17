import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem, editItem } from "../store/item";
import itemImg from "../img/item.jpg";
function Items() {
  const items = useSelector((state) => state.item.items);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const dispatch = useDispatch();
  const [update, setUpdate] = useState(false);
  const [id, setId]= useState(null)
  const [title2, setTitle2] = useState("");
  const [desc2, setDesc2] = useState("");
  return (
    <div>
      <div classNamee="container">
        <h1 className="center">
          {" "}
          <span className="badge bg-secondary">Add Items</span>
        </h1>
        <div className="input-group mb-3 mt-5 px-5 ">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Title
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
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
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="center">
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={() =>
              {
                dispatch(addItem({ id: items.length + 1, title, desc }))
                setTitle("")
                setDesc("")
              }
            }
          >
            Add item
          </button>
        </div>
      </div>
      <div className="flex">
        {items.length >= 0
          ? items.map((item1) => (
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
                        setUpdate(true)  
                        setId(item1.id) 

                      }}
                    >
                      Edit
                    </button>
                    {update && id === item1.id &&(
                      <div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-default"
                          placeholder="title"
                          onChange={(e) =>  setTitle2(e.target.value)}
                        />
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-default"
                          placeholder="descreption"
                          onChange={(e) =>  setDesc2(e.target.value)}
                        />
                        <button className="btn btn-outline-success" onClick={() => 
                          {dispatch(editItem({id,title:title2,desc:desc2}) ) 
                          setUpdate(false)
                        }
                          
                          }>update</button>
                      </div>
                    )}

                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      onClick={() => dispatch(deleteItem(item1.id))}
                    >
                      Delete
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
