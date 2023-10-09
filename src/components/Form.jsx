import { useState } from 'react'

const Form = () => {
    const [nombre, setNombre] = useState ("")
    const [email,setEmail] = useState ("")
    const [idPurchase, setIdPurchase] = useState ("125646xdgf")

    const handleSubmit = (e) =>{
        e.preventDefault()
        nombre === ""? alert("campo nombre vacío"): alert(`Bienvenido, ${nombre}`)
        email === ""? alert("campo email vacío"): alert(`Registrado, ${email}`)
        console.log("Información enviada")
    }

    return ( 
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{width: '300px', padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 15px rgba(0,0,0,0.2)', backgroundColor: 'linear-gradient(to right, #FFE2EC, #b76e79)'}}>
                <h1 style={{ textAlign: 'center', color: '#B76E79' }}>Formulario</h1>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <input type="text" placeholder='Nombre' onChange={(e) => setNombre(e.target.value)} style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
                    <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
                    <button type='submit' style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#B76E79', color: '#fff' }}>Enviar</button>
                </form>
                <h3 style={{ textAlign: 'center', color: '#B76E79' }}>Id de tu compra: {idPurchase}</h3>
            </div>
        </div>
    )
}

export default Form