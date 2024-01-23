import { useReducer, useState } from 'react';
import './App.css';
import ContactList from './ContactList';
import ChatComp from './ChatComp';
import Counter from './Counter';


const contacts=[
  { name:'Kushal', email :'kushal@th.co' },
  { name:'Jinesh', email :'jinesh@th.co' },
  { name:'Ravi', email :'ravi@th.co' },
];
function Panel({title,children,isActive,onShow}){
  return(
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow}>
          Show
        </button>
      )}
    </section>
  );
}
function submitForm(input){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      let errorOccurred = input.toLowerCase() !== 'lima';
      if(errorOccurred){
        reject(new Error("not a correct answer"));
      }else{
        resolve();
      }
    },1500);
  });
}
const reducer=(state, action)=>{
  switch (action.type) {
    case "increment":
      return state+1;
    case "decrement":
      return state-1;
    default:
      return state;
  }
}


function App() {
  //-----------------------------------------------
  const [counter, dispatch] = useReducer(reducer,0);
  //---------------------------------------------
  const[toContact, setToContact]=useState(contacts[0]);
  //-----------------------------------------------
  const[activeIndex, setActiveIndex]=useState(0);
  //----------------------------------------------------------------
  const[firstName, setFirstName]=useState("");
  const[lastName, setLastName]=useState("");
  const fullName=firstName + ' '+ lastName;
  function handleFirstNameChange(e){
    setFirstName(e.target.value);
  }
  function handleLastNameChange(e){
    setLastName(e.target.value);
  }
  //-----------------------------------------------
  const[input,setInput]=useState("");
  const[status, setStatus]=useState("typing");
  const[error, setError]=useState(null);
  if(status==="success"){
    return <h1>That's correct</h1>
  }
  async function submitHandler(e){
    e.preventDefault();
    setStatus("submitting");
    try{
      await submitForm(input);
      setStatus("success");
    }catch(err){
      setStatus('typing');
      setError(err);
    }
  }
  function changeInput(e){
    setInput(e.target.value);
  }
  

  return (
    <>
    <div className="App">
      {/* ---------------------------------------------------------------------- */}
      <h1> City Quiz</h1>
      <form>
        Enter your First name :<input value={firstName} onChange={handleFirstNameChange}></input>
        Enter your last name:<input  value={lastName} onChange={handleLastNameChange}></input>
        <h1>{fullName}</h1>
      </form>
      <hr/>
      {/* ---------------------------------------------------------------------- */}
      <form onSubmit={submitHandler}>
      <textarea value={input} onChange={changeInput} disabled={status==='submitting'}></textarea>
      <button disabled={input.length===0 || status==="submitting"} type='submit' onSubmit={submitHandler}>Submit</button>
      {error !== null && <p className='Error'>{error.message}</p>}
      </form>
      <hr/>
      {/* ---------------------------------------------------------------------- */}
      <Panel title="Ahmedabad" isActive={activeIndex===0} onShow={()=>setActiveIndex(0)}>xyz about Ahmedabad</Panel>
      <Panel title="Unjha" isActive={activeIndex===1} onShow={()=>setActiveIndex(1)}>xyz about Unjha</Panel>
      <hr/>
      {/* ---------------------------------------------------------------------- */}
      <ContactList contacts={contacts} toContact={toContact} onSelect={contact=>setToContact(contact)}/>
      <ChatComp key={toContact.email}contact={toContact}/>
      <hr/>
      {/* ---------------------------------------------------------------------- */}
      
      <Counter dispatch={dispatch} counter={counter} />
      <Counter dispatch={dispatch} counter={counter} />
      <Counter dispatch={dispatch} counter={counter} />
      <Counter dispatch={dispatch} counter={counter} />
      <hr/>
      {/* ---------------------------------------------------------------------- */}
    </div>
    
    </>
   
    
  );
}


export default App;
