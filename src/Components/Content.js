import React,{useState,useEffect} from 'react'
import '../CascadingStyleSheet/content.css'
import Memories from './Memories';

const Content = ({userName}) => {

    
const [data, setData] = useState([]);
const[obj2,setObj2] = useState([[],[],[],[],[],[],[],[],[],[],[]])

const [memories,setMemories] = useState({
  data: "",
  value: false,
  user: "username"
})

function handleClick(index){
  setMemories({
    data: data[index].urls.full,
    value: true,
    user: "username",
    index: index
  })
}



useEffect(() => {
  fetchData();
}, []);

  const fetchData = async () => {
  try {
    const response = await fetch("https://api.unsplash.com/search/photos?page=1&query=tree&client_id=YcSk1crOEiJQSjlnItMnSiOXuUHqbQEMZGVSxqC13rw");
    const jsonData = await response.json();
    setData(jsonData.results);
  } catch (error) {
    console.log('An error occurred:', error);
}

  

}

function getData(param){
  let obj = [...obj2];
  obj[param.index].push(param.data);
  setObj2(obj)
  // setData()
}


function geteData2(param){
  setMemories({...memories,["value"]:param})
}

  return (
    <div className='content-container'>
    {
        data.map((item,index)=>{
           return <img src={item.urls.full} key={index} onClick={()=>handleClick(index)} alt='imagee' className='content-image-box'/>
        })
    }
    {
      memories.value===true?
      <div className='memories'>
          <Memories datam={memories} userName={userName} comment={obj2} func={getData} func2={geteData2}/>
      </div>:null
    }
    </div>
  )
}

export default Content