import React,{useState,useEffect} from 'react';
import axios from "axios";
import { Select } from "antd";
const {Option} = Select

const DBSpecsInput = ({ endpoint, specName }) => {
    const [specs,setSpecs] = useState([]);
    const [singleSpec,setSingleSpec] = useState("");
//get all specs
    const getAllSpecs = async () => {
        try {
          const { data } = await axios.get(`/api/v1/specs/${endpoint}`);
          if (data?.success) {
            setSpecs(data?.spec);
          }
        } catch (error) {
          console.log("Something went wrong in getting specs");
          console.log(error);
        }
      };

      useEffect(() => {
        getAllSpecs();
      }, []);
  return (
    
        <Select variant="borderless" placeholder = {specName} size="large" showSearch className="form-select mb-3" onChange={(value)=>{setSingleSpec(value)}}>
            {specs?.map(s=>(
                <Option key={s._id} value={s.name}>{s.name}</Option>
            ))}
        </Select>
  )
}

export default DBSpecsInput