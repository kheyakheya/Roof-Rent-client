import { useEffect, useState } from "react";
import Container from "../shared/Container";
import Card from "./Card";
import Loader from "../shared/Loader";
import { useSearchParams } from "react-router-dom";

const Roofs = () => {
    const [roofs,setRoofs]=useState([]);
    const [loading, setLoading]= useState(false);
    const [params, setParams]= useSearchParams();
    const category= params.get('category');
    console.log('cat',category);
     useEffect(()=>{
        setLoading(true);
        fetch('./roofs.json')
        .then (res=>res.json())
        .then(data=>{
            if(category){
                const filertedData= data.filter(roof=> roof.category === category);
                setRoofs(filertedData);
            }
           else{
            setRoofs(data)
           }
            
            setLoading(false)
        })
        .catch(err=>console.log(err))
        
    },[category]);
    if (loading) {
        return <Loader></Loader>
      }
    return (
        <Container>
           <div className="pt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl-grid-cols-5 gap-8">
            {roofs.map((roof,index)=><Card key={index} roof={roof} ></Card>)}
           </div>
        </Container>
    );
};

export default Roofs;