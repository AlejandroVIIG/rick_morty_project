import ResidentCard from "./ResidentCard";
import { paginationLogic } from "../helpers/pagination";
import { useEffect, useState } from "react";

const ResidentList = ({residents}) => {

    const [currentPage, setCurrentPage] = useState(1);

    const {pages, residentsInCurrentPage} = paginationLogic(currentPage, residents);
    
    console.log(pages);

    const handleNewPage = (newPage) => {
        setCurrentPage(newPage);
    }

    useEffect(() => {
        setCurrentPage(1);
    },[residents])

    return (
        <section className="max-w-[1000px] mx-auto mt-10">
            <section className="grid gap-8 grid-cols-[repeat(auto-fill,_250px)] justify-center">
                {
                    residentsInCurrentPage.map(resident => <ResidentCard key={resident} residentUrl={resident} /> )
                }
            </section>

            {/* paginacion */}
            <ul className="flex justify-center p-4 gap-6 flex-wrap">
                {
                    pages.map(page => (
                        <li key={page}>
                            <button className={`${currentPage === page ? "bg-green-500 p-2 text-white rounded-md" : "bg-black p-2 rounded-md text-white"}`} onClick={() => handleNewPage(page)}>{page}</button>
                        </li>
                    ))
                }
            </ul>
        </section>
    );
}
export default ResidentList