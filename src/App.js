import logo from './logo.svg'; 
import './App.css'; 
import { useEffect, useState } from 'react'; 
import { BarLoader } from 'react-spinners'; 
import {useCookies} from 'react-cookie' 

function App() { 
  const [student, setStudent] = useState(null); 
  const [cookie, setCookie] = useCookies(); 
  const [sessionStudent, setSessionStudent] = useState(null) 
  
  // React-Cookie Code
  async function getStudent(id){ 
    if(!id) return; 
    let res = await fetch(`http://localhost:5000/student/${encodeURIComponent(id)}`) 
    let js = await res.json() 
    setStudent(js.Student) 
    } 
    
    async function handleCookieChange(name, val){ 
      setCookie(name, val, {path:"/"}) 
      await getStudent(val) 
    } 
    
    useEffect(()=>{ 
      if (cookie.id){ 
        getStudent(cookie.id) 
      } 
    }, []) 
    
  // Flask Session Code
  async function fetchSessionStudent() {
      const res = await fetch("http://localhost:5000/secure", {
        credentials: "include", 
      });

      if (res.ok) {
        const js = await res.json();
        setSessionStudent(js.Student);
      } else {
        setSessionStudent(null);
    }
  }

  async function handleSessionChange(id) {
      await fetch(`http://localhost:5000/secure/set/${encodeURIComponent(id)}`, {
        credentials: "include",       
      });
      await fetchSessionStudent();
    }

    useEffect(()=>{ 
      fetchSessionStudent();
    }, []) 
    
    return ( 
    <div className="App h-[100vh]"> 
      <div className='h-[30%]'> 
        <h1 className='font-bold'>React-Cookie Example (Insecure)</h1> 
        {student 
        ? 
        <> 
          <h2>{student.Name}</h2> 
          <p>{student.Age}</p> 
          <p>{student.Course}</p> 
        </> 
        : 
        <> 
          <div className='flex justify-center p-2'> 
            <BarLoader/> 
          </div> 
        </> 
        } 
        <div className='flex justify-evenly h-[10%]'> 
          <button className='bg-gray-400 w-[30%] h-[100%] rounded-md hover:bg-gray-500' onClick={()=>{handleCookieChange("id", 1)}}>Set Cookie To 1</button> 
          <button className='bg-gray-400 w-[30%] h-[100%] rounded-md hover:bg-gray-500' onClick={()=>{handleCookieChange("id", 2)}}>Set Cookie To 2</button> 
        </div> 
      </div> 
      <div className='h-[30%]'> 
        <h1 className='font-bold'>Flask Session Example</h1> 
        {sessionStudent 
        ? 
        <> 
          <h2>{sessionStudent.Name}</h2> 
          <p>{sessionStudent.Age}</p> 
          <p>{sessionStudent.Course}</p> 
        </> 
        :
        <>
        <div className='flex justify-center p-2'> 
          <BarLoader/> 
        </div> 
        </> 
        } 
        <div className='flex justify-evenly h-[10%]'> 
          <button className='bg-gray-400 w-[30%] h-[100%] rounded-md hover:bg-gray-500' onClick={()=>{handleSessionChange(1)}}>Set Session To 1</button> 
          <button className='bg-gray-400 w-[30%] h-[100%] rounded-md hover:bg-gray-500' onClick={()=>{handleSessionChange(2)}}>Set Session To 2</button> 
        </div> 
      </div> 
    </div> 
          ); 
        } 
        
export default App;