import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./main.css"

function Main(){
    const navigate = useNavigate()

    const onDetectClick = () => {
        navigate("/detect")
    }
    return (
        <div className="h-screen w-screen">
            <Navbar/>
            <div className=" w-screen h-5/6 flex">
                <div className="w-7/12 flex justify-center items-center">
                    <div className=" h-3/6 w-3/6">
                        <h1 className="font-bold text-purple-600 text-4xl">Deteksi Pintar!</h1>
                        <p className="text-xl text-justify mt-5">Gunakan fitur kami untuk mengetahui gejala <span></span>skoliosis dalam diri anda, hanya dengan menggunakan satu gambar!</p>
                        <button onClick={onDetectClick} className=" mt-5 p-2 bg-purple-600 text-white font-bold rounded-md duration-150 hover:border-2 hover:text-purple-600 hover:bg-white hover:border-purple-600">Deteksi Sekarang!</button>
                    </div>
                </div>
                <div className=" w-5/12 flex items-center">
                    <div className="img-main w-4/6 h-4/6"></div>
                </div>
            </div>       
        </div>
    )
}

export default Main;