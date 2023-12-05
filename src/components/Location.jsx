import axios from "axios";
import { IconSearch } from "@tabler/icons-react";

const Location = ({locationInfo, setLocationInfo}) => {

    const handleSubmit = e => {
        e.preventDefault();
        const newLocationId = e.target.newLocation.value;
        axios.get(`https://rickandmortyapi.com/api/location/${newLocationId}`)
             .then(({data}) => setLocationInfo(data))
             .catch(err => console.log(err));
    }

    return (
    <section className="flex-col my-2">
        <form onSubmit={handleSubmit} className="text-center my-7">
            <div>
                <input className="border-solid border-2 border-emerald-500" type="number" name="newLocation" placeholder="Type a location ID..."/>
                <button className="bg-emerald-500 text-white border-solid border-2 border-emerald-500" type="submit">Search <IconSearch className="inline h-5" /></button>
            </div>
        </form>

        <article className="text-center border-solid border-2 border-emerald-500 w-fit items-center p-5 mx-auto">
            <h2 className="text-emerald-300">Welcome to {locationInfo?.name}!</h2>
            <ul className="flex gap-3">
                <li>Type: {locationInfo?.type}</li>
                <li>Dimension: {locationInfo?.dimension}</li>
                <li>Population: {locationInfo?.residents.length}</li>
            </ul>
        </article>
    </section>
    )
}
export default Location