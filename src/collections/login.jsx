import { useState } from "react";

const [registrando,setRegistrando]=useState(false)

const functAutenticacion = async(e)=>
    e.preventDefaul();

const correo = e.target.email.value;
const contrseña = e.target.password.value;

// if(registrando){
//     try{
//        // await craeateUsertWith[email] password(auth,correo,contrseña)
//     }
// }