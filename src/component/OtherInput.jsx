import React, { useState } from 'react'

const OtherInput = () => {
    const [review, setReview] = useState("");
    const[agree, setAgree] = useState(false);
    const [picture, setPicture] = useState(null);
    const handleForm = (e) => {
        e.preventDefault();
        console.log(review, agree);
    };
    const [preview, setPreview] = useState(null)
    const handleFileChange = (e) => {
        setPicture(e.target.files[0]);
        setPreview(URL.createObjectURL(e.target.files[0]));
    };

  return (
    <div>
        <form onSubmit={handleForm} className='myform'>
            <label htmlFor="pic">Upload Photo</label>
            <input type="file" id='pic' className='myinput'
            onChange={handleFileChange} accept='image/*'/>
           { preview && (
            <img src={preview} alt="photo" className='h-16 w-16 object-cover rounded-md'/>
        )} 
            <textarea
            placeholder='Write A Review'
            className='myinput' 
            value={review}
            onChange={(e) => setReview(e.target.value)}></textarea>
            <input
            type="checkbox"
            id='agree'
            value={agree}
            onChange={(e) => setAgree(e.target.checked)}/>
            <label htmlFor="agree" className='ml-2'> Agree to Terms and Conditions</label>
            <button type='submit' className='mybtn block mt-2'>Submit</button>
        </form>
    </div>
  )
}

export default OtherInput