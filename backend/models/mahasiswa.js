import { Sequelize } from "sequelize";
import db from "../utils/database.js";

const { DataTypes } = Sequelize;

const Mahasiswa = db.define('mahasiswa', {
    mahasiswa_id:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nama_lengkap:{
        type: DataTypes.STRING
    },
    nim:{
        type: DataTypes.STRING
    },
    no_telp:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});

export default Mahasiswa;