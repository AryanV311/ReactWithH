/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";

// eslint-disable-next-line no-unused-vars
export const Form = ({data, setData, updateApi, setUpdateApi}) => {

    const api = "https://jsonplaceholder.typicode.com/posts";

    const [addData, setAddData] = useState({
        title:"",
        body:""
    })

    let isEmpty = Object.keys(updateApi).length === 0;
    // console.log(isEmpty);

    //*----------
    //* Getting data to update

    useEffect(() => {
        updateApi && setAddData({
            title:updateApi.title || "",
            body:updateApi.body || ""
        })
    },[updateApi])

    const handleInputChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setAddData((prev) => ({ ...prev, [name]:value}))
    }

    const addPostData = async(post) => {
        const res = await axios.post(`${api}`,post)
        console.log(res.status);

        if(res.status === 201){
            setData([...data, res.data])
        }
    }

    const updatePostData = async() => {
        const res = await axios.put(`${api}/${updateApi.id}`, addData)
        console.log(res);

        if(res.status === 200){
            setData((prev) => {
                return prev.map((curElem) => {
                    return curElem.id === res.data.id ? res.data : curElem
                })
            });
            setAddData({ title:"", body:""});
            setUpdateApi({});
        }
    }

    const handleSubmitForm = (e) => {
        e.preventDefault()
        const action = e.nativeEvent.submitter.value;
        // console.log(action);

        if(action == "Add"){
            addPostData(addData);
        } else if (action === "Edit"){
            updatePostData();
        }

    }

  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <div>
          <label htmlFor="title"></label>
          <input
            type="text"
            name="title"
            id="title"
            autoComplete="off"
            placeholder="Add title"
            required
            value={addData.title}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="body"></label>
          <input
            type="text"
            name="body"
            id="body"
            autoComplete="off"
            placeholder="Add Post"
            required
            value={addData.body}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" value={isEmpty ? "Add" : "Edit"}>{isEmpty ? "Add" : "Edit"}</button>
      </form>
    </>
  );
};
