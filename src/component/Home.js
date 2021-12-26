import axios from "axios";
import React ,{useState}from 'react'

export default function Home() {
    const [post, setPost] = useState()
    const [text, setText] = useState()
    const [img, setImg] = useState()

    const addPost=(e)=>{
        setPost(e.target.value)
    }

    // const addPostt = async ()=>{
    //     const respons = await axios.post("http://localhost:5000/posts",{
    //         text:text,
    //         img:img,
    //     },
    //     {
    //         headers:{authorization:`Beareer ${token}`}
    //     }
    //     )
    //     setPost(respons.data)
    //     setText("")
    //     setImg("")
    // }

    // const dlettPost = ()=>{

    // }
    return (
        <div>
            
            {/* <input onChange={()=>{}}placeholder="AddText"/>
            <input onChange={()=>{}}placeholder="AddImg"/>
            <button onClick={()=>{}}>AddPost</button>
            <hr/>
            <button onClick={()=>{}}>Like</button>
            <button onClick={()=>{}}>Delet</button> */}
            <h1>Home</h1>
        </div>
    )
}
