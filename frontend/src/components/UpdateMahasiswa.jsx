import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const UpdateMahasiswa = () => {
    const [nama_lengkap, setNama_lengkap] = useState('');
    const [nim, setNim] = useState('');
    const [no_telp, setNo_telp] = useState('');
    const navigate = useNavigate();
    const {mahasiswa_id} = useParams();

    const updateData = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/data/${mahasiswa_id}`, {
                nama_lengkap,
                nim,
                no_telp
            });
        navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getMahasiswaById();
    }, [])

    const getMahasiswaById = async () => {
        const response = await axios.get(`http://localhost:5000/data/${mahasiswa_id}`);
        setNama_lengkap(response.data.nama_lengkap)
        setNim(response.data.nim)
        setNo_telp(response.data.no_telp)
    }
    return (
       <div>
           <form onSubmit={ updateData }>
               <div className="field">
                   <label className="label">Nama Lengkap</label>
                   <input type="text" className="input" placeholder="Nama Lengkap Mahasiswa..." value={ nama_lengkap } onChange={ (e) => setNama_lengkap(e.target.value) } required/>
               </div>
               <div className="field">
                   <label className="label">Nim Mahasiswa</label>
                   <input type="text" className="input" placeholder="Nim Mahasiswa..." value={ nim } onChange={ (e) => setNim(e.target.value) } required/>
               </div>
               <div className="field">
                   <label className="label">No Telpon</label>
                   <input type="text" className="input" placeholder="No Telpon Mahasiswa..." value={ no_telp} onChange={ (e) => setNo_telp(e.target.value) } required/>
               </div>
              <div className="field">
                <button className="button m-1 is-small is-fullwidth is-outlined is-primary">Add Data</button> 
                <Link to="/" className="button m-1 is-small is-fullwidth is-outlined is-danger">Back</Link>
              </div>
           </form>  
       </div>
    )
}
 
export default UpdateMahasiswa

