import axios from "axios";
import { useEffect, useState } from "react";
// import { getPost } from "./api/PostApi";
import "./index.css"
import { Form } from "./Components/Form";


export const Post = () => {

    const [data, setData] = useState([]);
    const [updateApi, setUpdateApi] = useState({});

    const api = "https://jsonplaceholder.typicode.com/posts";

    //*-----------------------------
    //* Getting Data
    //*-----------------------------

    const getPostData = async() => {
        try {
          const res = await axios.get(`${api}`);
          setData(res.data)
          // console.log(res.data);
    
        //   const res = await getPost();
        //   console.log(res.data);
        } catch (error) {
          console.log(error);
        }
      }


      useEffect(() => {
        getPostData();
      },[])

      //*---------------------------
      //* Delete Post
      //*---------------------------

      const handleDeletePost = async(id) => {
        try {
            // console.log(id);
            const res = await axios.delete(`${api}/${id}}`);
            // console.log(res.data);

            if(res.status === 200){
                const newUpdatedPost = data.filter((curPost) => {
                  return (
                    curPost.id !== id
                  )
                });
                console.log(newUpdatedPost);
                setData(newUpdatedPost)

            }else {
              console.error("Data is not deleted occur some error:");
            }
        } catch (error) {
            console.log(error);
        }
        
      }

      //*-------------------------
      //* Update data
      //*-------------------------

      const handleUpdatePost =(curElem) => {setUpdateApi(curElem)}

    
  return (
    <>
    <section className="section-form">
      <Form data={data} setData={setData} updateApi={updateApi} setUpdateApi={setUpdateApi} />
    </section>
    <section className="section-post">
        <ol>
            {data.map((curElem) => {
                return (
                    <li key={curElem.id}>
                        <p>Title: {curElem.title}</p>
                        <p>Body:{curElem.body}</p>
                        <button onClick={() => handleUpdatePost(curElem)}>Edit</button>
                        <button className="btn-delete" onClick={() => handleDeletePost(curElem.id)}>Delete</button>
                    </li>
                )
            })
            }
        </ol>
    </section>
    </>
  )
}
