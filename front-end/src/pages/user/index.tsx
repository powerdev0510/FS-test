import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
  
const User = () => {
  const [name, setName] = useState('')
  const [balance, setBalance] = useState(0)
  const [transaction, setTransaction] = useState<any>([])
  const params = useParams<any>()
  
  const getUser = async () => {
    const response = await fetch(`http://localhost:4000/api/v1/user/detail/${params.id}`);
    const json = await response.json()
    setName(json.data.user[0].firstName + json.data.user[0].lastName)
    setBalance(json.data.user[0].accountBalance)
    setTransaction(json.data.transaction)
  }

  useEffect(()=> {
    getUser();
  },[])

  return (
    <div className="container relative mx-auto">
        <h2>
            {name}:{balance}
        </h2>
        <table>
            <thead>
                <tr>
                    <td>Transaction Type</td>
                    <td>Amount</td>
                    <td>Date</td>
                </tr>
            </thead>
            <tbody>
                {
                    transaction && transaction.map((e:any)=>
                    <tr key={e.id}>
                        <td>{e.transactionType}</td>
                        <td>{e.amount}</td>
                        <td>{e.transactionDate}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
};

export default User;
