import { Request, Response } from "express";
import createUser from '../services/CreateUser'


export function helloworld(request :Request, response: Response) {

    const user = createUser({email:'mrb0305@gmail.com', password: '123456', techs: ['Node.js', 'React.js','React Native', {title: 'JavaScript', experience:100}]})

    return response.json({message: "Hello World"})
}