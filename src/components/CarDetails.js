import CarDetailsImg from "../CarDetailsImg.jpg"
const CarDetails = () => {
    return(
        <div className="flex px-28 py-10">
            <div className="flex flex-col">
                <h3 className="text-5xl font-primary font-semibold">Subaru <span className="text-red-600">Impreza</span></h3>
                <div className="py-4">
                    <svg width="100%" height="1">
                        <line x1="0" y1="0" x2="12%" y2="0" stroke="red" strokeWidth="3" />
                    </svg>
                </div>
                <div className="py-3">
                    <h3 className="text-6xl font-semibold">$125<span className="text-3xl text-slate-500 font-normal">/Day</span></h3>
                </div>
                <div className="text-lg">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text. 
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text.
                    </p>
                    <br />
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text.
                    </p>
                    <br />
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text. 
                        Lorem Ipsum has been the industry's standard dummy text. 
                        Lorem Ipsum is simply dummy.
                    </p>
                </div>
                <button className="text-white text-xl bg-red-600 my-5 mr-auto px-8 py-4 hover:bg-red-700 hover:transition-all">Reserve Now</button>
            </div>         
            <img src={CarDetailsImg} alt="Car" className="mx-6 w-full h-full"/>    
        </div>
    );
}

export default CarDetails;