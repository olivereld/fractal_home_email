import EmailService from "../../services/email.service";
import { Request,Response } from "express";

export const sendEmail = async (req:Request,res:Response) =>{    
  const list = await EmailService.sendEmail();
  res.send(list);
}




