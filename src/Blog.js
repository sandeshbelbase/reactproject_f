import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import Custominput from './Custominput'
import Customselect from './Customselect';
import Customtext from './Customtext';
import "./styles/index.css";

const Blog = () => {

    const { handleSubmit, control } = useForm({})
    const [blogs, setBlogs] = useState([ ]);
    const onSubmit = (values) => {
        // console.log(values);
        const finalBlog = {...values, image:image}
        setBlogs([...blogs, finalBlog]);
    }

    // const imgUrl = 'https://source.unsplash.com/random';
    const options=[
        {
            label: "Music",
            value: "music"
        },
        {
            label: "Food",
            value: "food"
        },
        {
            label: "Travel",
            value: "travel"
        },
        {
            label: 'Movie',
            value: 'Movie'
        }

    ]

    const formSubmitted = () =>{
        alert('Your form has been submitted!!')
    }

    const[image, setImage] = useState('');
    const handleImg= (e) =>{
        setImage(e.target.files[0]);
    }

     const upload = useRef(null);  

     const imghandle = () => {
         upload.current.click();
     }

  return (
    <> 
        <div className='blog_wrap'>
             <form className="blog_form" onSubmit={handleSubmit(onSubmit)}>
            <h3>Add Blog</h3>
            <div>
            <span>Blog Title</span>
                <div className='title'>
                <Custominput name="title" control={control} /><br/>
                </div>

                <div className='title'>
                <span> Slug:</span><br />
                <Custominput name = "slug" control={control}/><br/>
                </div>

                <div>
                <span> Description</span><br />
                <Customtext name="text-area" control={control} type="textarea" rows="10"/><br/>
                </div> <br />
                <div>
                <span> Upload Image</span> <i class="img_icon far fa-image" onClick={imghandle}></i><br/> <br />
               

                {image && <img src={URL?.createObjectURL(image)} alt="" width="300px" height="300px"/>}
                <input className="upload" type="file" name="img" onChange={handleImg} ref={upload}/>
                </div>
                <div> 
                <span className='sport'>Choose Category</span> <br />
                <Customselect name="category" options={options} control={control}/>
                </div> <br/>
                <button className="add" type='submit' onSubmit={formSubmitted}>Add Blog</button>
            </div>

            </form>
                {blogs.map((blog, index)=>
                    <div  key={index}>
                    <div className='display_blog'>

                    <div className='img'>
                    {blog.image && <img src={URL?.createObjectURL(blog.image)} alt="" width="300px" height="200px"/>}</div>
                    <div className='blog_title'>
                    <h3>{blog.title}</h3>
                    </div>
                    <div className='blog_title'>
                    <h3>{blog.slug}</h3>
                    </div>
                    <div className='blog_category'>
                        <span>{blog.category}</span>
                    </div>
                    <div className='blog_des'>
                        <p>{blog.description}</p>
                    </div>
                        </div>
                    
                    </div>

                )}

                


            </div>


    </>
  )
}

export default Blog