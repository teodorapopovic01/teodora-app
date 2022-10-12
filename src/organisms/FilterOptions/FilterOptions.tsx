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
}
const Filteroptions = ({
  filters,
  filterData,
  handleFilters,
  setFiltersValues,
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
        <Input
          placeholder="Kvadratura"
          type="number"
          value={filters.area}
          onChange={(e) => setFiltersValues(e.target.value, "area")}
          suffix={<img src={m2} alt="" />}
        />
        <Input
          placeholder="Cijena do"
          type="number"
          value={filters.price}
          onChange={(e) => setFiltersValues(e.target.value, "price")}
          suffix={<BiEuro />}
        />
        <div className="room-number">
          <Input
            placeholder="Broj soba od"
            value={filters.minRooms}
            type="number"
            onChange={(e) => setFiltersValues(e.target.value, "minRooms")}
          />
          <Input
            placeholder="Broj soba do"
            type="number"
            value={filters.maxRooms}
            onChange={(e) => setFiltersValues(e.target.value, "maxRooms")}
          />
        </div>
        <Button type="primary" onClick={handleFilters}>
          TRAŽI
        </Button>
      </div>
    </div>
  );
};

export default Filteroptions;
