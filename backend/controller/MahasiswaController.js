import Mahasiswa from "../models/mahasiswa.js";

export const getAllMahasiswa = async (req, res) => {
    try{
        const mahasiswa = await Mahasiswa.findAll();
        res.json(mahasiswa);
    }catch (error){
        res.json({ message: error.message });
    }
}

export const getMahasiswaById = async (req, res) => {
    try{
        const mahasiswa = await Mahasiswa.findAll({
            where:{
                mahasiswa_id: req.params.mahasiswa_id
            }
        });
        res.json(mahasiswa[0]);
    }catch (error){
        res.json({ message: error.message });
    }
}

export const createMahasiswa = async (req, res) => {
    try{
        await Mahasiswa.create(req.body);
        res.json({
            "message":"berhasil di buat!"
        });
    }catch (error){
        res.json({ message: error.message });
    }
}

export const updateMahasiswaById = async (req, res) => {
    try{
        await Mahasiswa.update(req.body, {
            where:{
                mahasiswa_id: req.params.mahasiswa_id
            }
        });
        res.json({
            "message":"berhasil di update!"
        });
    }catch (error){
        res.json({ message: error.message });
    }
}

export const deleteMahasiswaById = async (req, res) => {
    try{
        await Mahasiswa.destroy({
            where:{
                mahasiswa_id: req.params.mahasiswa_id
            }
        });
        res.json({
            "message":"berhasil di delete!"
        });
    }catch (error){
        res.json({ message: error.message });
    }
}

