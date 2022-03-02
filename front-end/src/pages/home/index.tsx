import { useState, useEffect } from "react";

const Home = () => {
  const [list, setList] = useState<any>([])

  const getUsers = async () => {
    const response = await fetch('http://localhost:4000/api/v1/user/list');
    const json = await response.json()
    setList(json.data.Users)
  }
  useEffect(()=> {
    getUsers();
  },[])

  return (
    <div className="container relative mx-auto">
      <ul>
      {
        list && list.map((e:any)=>
          <li key={e.id}>
            <a href={`/user/${e.id}`}>{e.firstName + e.lastName}</a>
          </li>
        )
      }
      </ul>
    </div>
  )
};

export default Home;
