import tugas from "../assets/img/tugas.png"
import website from "../assets/img/website.png"
import skripsi from "../assets/img/skripsi.png"
import app from "../assets/img/app.png"
import database from "../assets/img/database.png"
import data from "../assets/img/data.png"
// import ellipse from "../assets/img/ellipse2.png";
import "./Service.css";


export const Service = ()=>{
    return(
        <div className="service">
            {/* <img src={ellipse} className="service-ellipse" alt="" /> */}

             <div className="service-title">
                <p>Layanan Kami</p>
            </div>
            <div className="service-contaier">
                <div className="service-row-1">
                    <div className="icon-a" href=""><img className="icon" src={tugas} alt=""/> Tugas</div>
                    <div className="icon-a"><img className="icon" src={website} alt="" />Website</div>
                   <div className="icon-a"> <img className="icon" src={skripsi} alt="" />Skripsi</div>
                </div>
                <div className="service-row-2">
                <p className="icon-a-1"> <img className="icon" src={app} alt="" />App <br />                       Android/iOS</p>
                <p className="icon-a-2"> <img className="icon" src={database} alt="" />Database <br />Management</p>
                <p className="icon-a-3"> <img className="icon" src={data} alt="" />Training <br />Data</p>
                </div>
            </div>
        </div>
    )
}