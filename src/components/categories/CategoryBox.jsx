import qs from "query-string";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";

const CategoryBox = ({label}) => {
    const [params,setParams]=useSearchParams();
    const Navigate=useNavigate();
    // make a query string when we click on a category
    
    const handelCategory=()=>{
        // process to add category as query in url
        let currentQuery= {}
        if(params){
            currentQuery= qs.parse(params.toString())
        }
        const updatedQuery= {...currentQuery, category: label}
        const url= qs.stringifyUrl(
            {
            url:'/',
            query: updatedQuery
        },
        {skipNull: true}

        )
        Navigate(url);
    }
   
    return (
        <div onClick={handelCategory} className=' cursor-pointer border-b-2 p-2 hover:border-2 hover:rounded-md hover:text-[#5ca7af] text-[#377b82] border-transparant'>            <div className='text-sm font-medium'>{label}</div>
        </div>
    );
};

export default CategoryBox;