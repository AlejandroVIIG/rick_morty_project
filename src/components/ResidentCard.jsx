import { useEffect, useState } from "react";
import axios from "axios";

const ResidentCard = ({residentUrl}) => {

    const [residentInfo, setResidentInfo] = useState(null);

    const bgByStatus = {
        Alive: "bg-green-500",
        Dead: "bg-red-500",
        unknown: "bg-slate-500"
    }

    useEffect(() => {
        axios.get(residentUrl)
             .then(({data}) => setResidentInfo(data))
             .catch(err => console.log(err));
    }, [])

    return (
        <article className="border-solid border-2 border-emerald-500">
            <header className="relative">

                <img src={residentInfo?.image} alt=""/>
                <div className="flex items-center gap-2 absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/50 text-white py-1 px-2">
                    <div className={`h-3 aspect-square rounded-full ${bgByStatus[residentInfo?.status]}`}></div>
                    <span>{residentInfo?.status}</span>
                </div>

            </header>
            <section>
                <h5>{residentInfo?.name}</h5>
                <ul>
                    <li>
                        Species: <span className="text-white">{residentInfo?.species}</span>
                    </li>
                    <li>
                        Origin: <span className="text-white">{residentInfo?.origin.name}</span>
                    </li>
                    <li>
                        Times appear: <span className="text-white">{residentInfo?.episode?.length}</span>
                    </li>
                </ul>
            </section>
        </article>
    )
}
export default ResidentCard