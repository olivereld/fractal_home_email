import express,{ Application } from "express";
import CORS from "cors";
import bodyParser from "body-parser";
import path from 'path';
import { EmailSender } from "./routes";
class Server {
  private app:Application;
  private port:string;
  constructor(){
    this.port = process.env.PORT || '5000';
    this.app = express();
    this.app.set('views', path.join(__dirname+'/../','views'));
    this.app.set('view engine', 'ejs');    
  }

  middlewares(){
    this.app.use(CORS());
    this.app.use(bodyParser.json())       
  } 
  routes(){    
    this.app.use('/email',EmailSender)    
    this.app.use('/',(req:any,res:any) => {      
      res.send({message:'ok'})
    });   
    //this.app.use('*',InvalidRouter);
  }

  listen(){
    this.app.listen(this.port, ()=>{
      console.log('Server init on port ' + this.port);
    })
  }
}

export default Server;