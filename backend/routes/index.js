import express from "express";
import { getAllMahasiswa, 
         createMahasiswa,
         getMahasiswaById,
         updateMahasiswaById,
         deleteMahasiswaById
} from "../controller/MahasiswaController.js";

const route = express.Router();


route.get('/', getAllMahasiswa);
route.get('/:mahasiswa_id', getMahasiswaById);
route.post('/', createMahasiswa);
route.patch('/:mahasiswa_id', updateMahasiswaById);
route.delete('/:mahasiswa_id', deleteMahasiswaById);

export default route;