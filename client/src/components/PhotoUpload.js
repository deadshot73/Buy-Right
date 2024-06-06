import React,{useState,useEffect} from 'react'

const PhotoUpload = () => {
    const [photo,setPhoto] = useState("")
  return (
    <>
    <div className='mb-3'>
<label className='btn btn-outline-secondary col-md-12'>
{photo ? photo.name : "Upload Photo"}
<input type='file' name="photo" accept="image/*" onChange={(e)=>setPhoto(e.target.files[0])} hidden/>
</label>
    </div>

    <div className='mb-3'>
{photo ? (
    <div className='text-center'><img src={URL.createObjectURL(photo)} alt="product-photo" height={"200px"} className='img img-responsive' /></div>
):<p></p>}
    </div>
    </>
    
  )
}

export default PhotoUpload