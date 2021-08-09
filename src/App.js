import logo from './logo.svg';

import Icon from './components/icons';
import {ToastContainer,toast} from 'react-toastify'
import {Card,CardBody,Container,Button,Col,Row} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
import React,{useState} from 'react';
import './App.css';

const itemArray = new Array(9).fill("empty")


const App = () => {
  const  [isCross,setIsCross] = useState(false)
  const [winMessage,setWinMessage] = useState("")
  const reloadGame = () =>{
  setIsCross(false);
  setWinMessage("");
  itemArray.fill("empty",0,9);
  }
  const checkIsWinner = () => {
  
  }
  const changeItem = (itemNumber) => {
  if (winMessage){
    return toast(winMessage,{type:"success"})
  }
  }
  return (
   <Container className="p-5">
     <ToastContainer position='bottom-center'/>
     <Row>
       <Col md={6} className="offset-md-3">
         <div className="grid">
           {itemArray.map((item,index)=>(
             <Card>
               <CardBody className="box">
                 <Icon name={item} />
               </CardBody>
             </Card>
           ))}
         </div>

       </Col>
     </Row>
   </Container>
  );
}

export default App;
