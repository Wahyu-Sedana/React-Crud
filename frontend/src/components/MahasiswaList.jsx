import { useState, useEffect } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';

export const MahasiswaList = () => {
    const [mahasiswa, setMahasiswa] = useState([]);

    useEffect(() => {
        getMahasiswa();
    }, []);

    const getMahasiswa = async () => {
        const response = await axios.get('http://localhost:5000/data');
        setMahasiswa(response.data);
    }

    const deleteMahasiswa = async (mahasiswa_id) => {
        await axios.delete(`http://localhost:5000/data/${mahasiswa_id}`);
        getMahasiswa();
    }
  return (
    <div>
        <Link to="/add" className="button is-small is-primary">Add New Data</Link>
        <table className="table is-striped is-fullwidth">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Nama Mahasiswa</th>
                    <th>Nim</th>
                    <th>No Telpon</th>
                    <th colSpan={2}>Action</th>
                </tr>
            </thead>
            <tbody>
                { mahasiswa.map((mhs, index) => (
                    <tr key={ mhs.mahasiswa_id }>
                    <td>{ index + 1 }</td>
                    <td>{ mhs.nama_lengkap }</td>
                    <td>{ mhs.nim }</td>
                    <td>{ mhs.no_telp }</td>
                    <td>
                        <Link to={`/edit/${mhs.mahasiswa_id}`} className="button is-small is-info">Edit</Link>
                    </td>
                    <td>
                        <button onClick={() => deleteMahasiswa(mhs.mahasiswa_id) } className="button is-small is-danger">Delete</button>
                    </td>
                </tr>
                )) }
            </tbody>
        </table>    
    </div>
  )
}
