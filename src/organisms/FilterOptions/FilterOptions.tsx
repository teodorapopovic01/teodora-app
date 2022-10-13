import { Button, Input, Radio, Select } from "antd";
import { Option } from "antd/lib/mentions";
import { BiEuro } from "react-icons/bi";
import "./style.scss";
import m2 from "../../assets/images/metarsq.svg";
import React from "react";
interface Props {
  filters: any;
  filterData: (value: string) => void;
  handleFilters: () => void;
  setFiltersValues: (value: any, name: string) => void;
  errorMessage?: string;
}
const Filteroptions = ({
  filters,
  filterData,
  handleFilters,
  setFiltersValues,
  errorMessage,
}: Props) => {
  // const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key === "Enter") handleFilters();
  // };
  return (
    <div className="filters">
      <div className="radios">
        <Radio>Kupujem</Radio>
        <Radio>Iznajmljujem</Radio>
      </div>
      <div className="inputs">
        <Select onChange={filterData}>
          <Option value="houses">Kuća</Option>
          <Option value="flats">Stan</Option>
        </Select>
        <Input
          placeholder="Lokacija"
          value={filters.location}
          onChange={(e) => setFiltersValues(e.target.value, "location")}
        />
        <div className="input-wrapper">
          <Input
            placeholder={"Kvadratura"}
            type="text"
            value={filters.area}
            onChange={(e) => setFiltersValues(e.target.value, "area")}
            suffix={<img src={m2} alt="" />}
          />
          {errorMessage && <span className="warning">{errorMessage}</span>}
        </div>
        <div className="input-wrapper">
          <Input
            placeholder="Cijena do"
            type="text"
            value={filters.price}
            onChange={(e) => setFiltersValues(e.target.value, "price")}
            suffix={<BiEuro />}
          />
          {errorMessage && <span className="warning">{errorMessage}</span>}
        </div>
        <div className="room-number">
          <div className="input-wrapper-first">
            <Input
              placeholder="Broj soba od"
              value={filters.minRooms}
              type="text"
              onChange={(e) => setFiltersValues(e.target.value, "minRooms")}
            />
            {errorMessage && <span className="warning">{errorMessage}</span>}
          </div>
          <div className="input-wrapper-second">
            <Input
              placeholder="Broj soba do"
              type="text"
              value={filters.maxRooms}
              onChange={(e) => setFiltersValues(e.target.value, "maxRooms")}
            />
          </div>
        </div>
        <Button type="primary" onClick={handleFilters}>
          TRAŽI
        </Button>
      </div>
    </div>
  );
};

export default Filteroptions;
