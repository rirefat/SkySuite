'use client';
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const Search = ({ fromList, destination = "all", checkIn = "", checkOut = "" }) => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();
  const [allowSearch, setAllowSearch] = useState(true);
  const [searchTerm, setSearchTerm] = useState({
    destination: destination || "all",
    checkIn: checkIn || "",
    checkOut: checkOut || ""
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const state = { ...searchTerm, [name]: value };

    if (state.checkIn && state.checkOut) {
      if (new Date(state.checkIn).getTime() > new Date(state.checkOut).getTime()) {
        setAllowSearch(false);
      } else {
        setAllowSearch(true);
      }
    } else {
      setAllowSearch(true);
    }

    setSearchTerm(state);
  };

  const doSearch = () => {
    const params = new URLSearchParams(searchParams.toString());
    if (searchTerm.destination && searchTerm.destination !== "all") {
      params.set("destination", searchTerm.destination);
    } else {
      params.delete("destination");
    }

    if (searchTerm.checkIn && searchTerm.checkOut) {
      params.set("checkIn", searchTerm.checkIn);
      params.set("checkOut", searchTerm.checkOut);
    } else {
      params.delete("checkIn");
      params.delete("checkOut");
    }

    if (pathName.includes("hotels")) {
      replace(`${pathName}?${params.toString()}`);
    } else {
      replace(`/hotels?${params.toString()}`);
    }
  };

  return (
    <>
      <div className="lg:max-h-[250px] mt-6">
        <div id="searchParams" className={fromList ? "!shadow-none" : ""}>
          <div>
            <span>Destination</span>
            <h4 className="mt-2">
              <select onChange={handleChange} value={searchTerm.destination} name="destination" id="destination">
                <option value="all">All Destinations</option>
                <option value="Puglia">Puglia</option>
                <option value="Catania">Catania</option>
                <option value="Calvi">Calvi</option>
                <option value="Palermo">Palermo</option>
                <option value="Frejus">Frejus</option>
                <option value="Paris">Paris</option>
              </select>
            </h4>
          </div>

          <div>
            <span>Check In</span>
            <h4 className="mt-2">
              <input onChange={handleChange} value={searchTerm.checkIn} type="date" name="checkIn" id="checkIn" />
            </h4>
          </div>

          <div>
            <span>Check Out</span>
            <h4 className="mt-2">
              <input onChange={handleChange} value={searchTerm.checkOut} type="date" name="checkOut" id="checkOut" />
            </h4>
          </div>
        </div>
      </div>
      <button
        disabled={!allowSearch}
        onClick={doSearch}
        className="search-btn"
      >
        🔍️ {fromList ? "Modify Search" : "Search Hotels"}
      </button>
    </>
  );
};

export default Search;
