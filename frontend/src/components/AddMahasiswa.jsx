import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AddMahasiswa = () => {
    const [nama_lengkap, setNama_lengkap] = useState('');
    const [nim, setNim] = useState('');
    const [no_telp, setNo_telp] = useState('');
    const [alamat, setAlamat] = useState('');
    const [jurusan, setJurusan] = useState('');

    const navigate = useNavigate();

    const saveData = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/data', {
                nama_lengkap,
                nim,
                no_telp,
                alamat,
                jurusan
            });
        navigate("/");
        } catch (error) {
            console.log(error);
        }
    }
    return (
       <div>
           <form onSubmit={ saveData }>
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
                   <label className="label">Alamat</label>
                   <input type="text" className="input" placeholder="Alamat Mahasiswa..." value={ alamat} onChange={ (e) => setAlamat(e.target.value) } required/>
               </div>
               <div className="field">
                   <label className="label">Jurusan</label>
                   <input type="text" className="input" placeholder="Jurusan..." value={ jurusan} onChange={ (e) => setJurusan(e.target.value) } required/>
               </div>
              <div className="field">
                <button className="button m-1 is-small is-fullwidth is-outlined is-primary">Add Data</button> 
                <Link to="/" className="button m-1 is-small is-fullwidth is-outlined is-danger">Back</Link>
              </div>
           </form>  
       </div>
    )
}
 
export default AddMahasiswa

