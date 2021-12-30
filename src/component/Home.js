import axios from 'axios'
import React, { useState, useEffect } from 'react'



export default function Home({ token }) {
    const [post, setPost] = useState([])
    const [favList, setFavList] = useState([])
    const [text, setText] = useState("")
    const [img, setImg] = useState("")
    const [toggle, setToggle] = useState(false)
    const [update, setUpdate] = useState("")

    useEffect(() => {
        const getDate = async () => {

            try {
                const response = await axios.get("http://localhost:5000/posts", {
                })
                setPost(response.data)


                if (token) {
                    const likes = await axios.get("http://localhost:5000/allFavorite", {
                        headers: { authorization: `Bearer ${token}` }
                    })
                    console.log(likes.data, "likes");
                    setFavList(likes.data)
                }



            } catch (error) {
                console.log("roooooooooooo");
            }


        }

        getDate()
    }, [token])


    const addText = (e) => {
        setText(e.target.value);
    };
    const addimg = (e) => {
        setImg(e.target.value);
    };

    const addPost = async () => {
        const result = await axios.post(
            "http://localhost:5000/addPost",
            {
                text: text,
                img: img,
            },
            {
                headers: { authorization: `Bearer ${token}` },
            }
        )
        setPost(result.data)
        setImg("")
        setText("")
    }


    const deletePost = async (id) => {
        const response = await axios.delete(`http://localhost:5000/deletePost/${id}`, {
            headers: { authorization: `Bearer ${token}` }
        })
        setPost(response.data)
    }

    const favPost = async (postId) => {
        const response = await axios.post("http://localhost:5000/favorite", {
            postId: postId
        }, {
            headers: { authorization: `Bearer ${token}` }
        })

        console.log(response.data.favorite);
        setFavList(response.data.favorite)

    }
    const changeePosts = (e) => {
        setUpdate(e.target.value);
    };
    // فنكشن  للتعديل   تطبع اذا سويت رفرش بس
    const Update = async (id) => {
        try {
            console.log(id,"id");
            const updateP = await axios.put(`http://localhost:5000/updatePost/${id}`, {
                text: update
            }, {
                headers: { authorization: "Bearer " + token },
            });
            setPost(updateP.data)
            console.log(updateP.data,"postUpdate");
        } catch (error) {
            console.log("err");
        }
    };






    return (<div className="home-page">


        <div className="post-container">

            {
                token ? toggle ? "" : <button className="add-post-btn" onClick={() => { setToggle(!toggle) }}>ADD Post</button> : ""
              
            }

            {
                toggle ? <div className="box-home">
                    {/* <input type="text" placeholder="search here" onChange={addSearch} value={searchInput}/> */}
                    <input onChange={addText} placeholder="Add text" value={text} />
                    <input onChange={addimg} placeholder="add img" value={img} />
                    <button onClick={() => { addPost() }}>Add</button>
                </div> : ""
            }


            {
                post.map((elem, index) => {
                    console.log(elem);
                    <img src="b.png" alt="kk" />

                    for (let i = 0; i < favList.length; i++) {
                        if (elem._id == favList[i]._id) {
                            return <div key={index}>
                                <h3 className="account-post">{elem.userId.account}</h3>
                                <p className="text-post">{elem.text}
                                    <span className="like-icon" onClick={() => { favPost(elem._id) }}>♥</span>
                                    {
                                        elem.img ? <img src={elem.img} /> : ""
                                    }
                                    <button onClick={() => { Update(elem._id) }}>Updat</button>
                                    <input onChange={(e) => { changeePosts(e) }} />
                                    <button className="btn-delete" onClick={() => { deletePost(elem._id) }}>delete</button>

                                </p>


                            </div>
                        }
                    }
                    return <div key={index}>
                        <h3 className="account-post">{elem.userId.account}</h3>
                        <p className="text-post">{elem.text}
                            <span className="like-icon" onClick={() => { favPost(elem._id) }}>♡</span>
                            {
                                elem.img ? <img src={elem.img} /> : ""
                            }
                            <button onClick={() => { Update(elem._id) }}>Updat</button>
                            <input onChange={(e) => { changeePosts(e) }} />
                            <button className="btn-delete" onClick={() => { deletePost(elem._id) }}>delete</button>
                        </p>

                                
                    </div>
                })
            }

        </div>
    </div>
    )
}