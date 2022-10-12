import React, { useEffect, useState } from "react";
import Header from "../../organisms/Header/Header";
import "./style.scss";
import PageLayout from "../../layout/Layout";
import Heading from "../../molecules/Heading/Heading";
import Filteroptions from "../../organisms/FilterOptions/FilterOptions";
import Footer from "../../organisms/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useGetPosts } from "../queries/useGetPosts";
import Posts from "../../organisms/Posts/Posts";
import { AiOutlineDown } from "react-icons/ai";
import HeaderMobile from "../../organisms/HeaderMobile/HeaderMobile";
import { setPosts } from "../../store/slices/posts-slice";
const Homepage = () => {
  const store = useSelector<any>((state) => state.posts.posts);
  const dispatch = useDispatch();
  let width = window.screen.width;
  const { data } = useGetPosts();
  const [posts, setPostss] = useState(store);
  const [filters, setFilters] = useState({
    category: "",
    location: "",
    area: "",
    price: "",
    minRooms: "",
    maxRooms: "",
  });

  function filterData(value: string) {
    setFilters({ ...filters, category: value });
    dispatch(setPosts(data));
  }

  useEffect(() => setPostss(store), []);

  function setFiltersValues(value: string | number, name: string) {
    setFilters({ ...filters, [name]: value });
  }
  useEffect(() => {
    data && dispatch(setPosts(data));
  }, [data]);

  function handleFilters() {
    if (filters.category !== "") {
      if (
        filters.area !== "" &&
        filters.price !== "" &&
        filters.minRooms !== "" &&
        filters.maxRooms !== ""
      ) {
        const filteredData = data.filter((item: any) => {
          return (
            item.category === filters.category &&
            item.summary.area <= Number(filters.area) &&
            item.price <= Number(filters.price) &&
            item.summary.numberOfRooms >= Number(filters.minRooms) &&
            item.summary.numberOfRooms <= Number(filters.maxRooms)
          );
        });
        setPostss(filteredData);
      } else if (
        filters.area === "" &&
        filters.price !== "" &&
        filters.minRooms !== "" &&
        filters.maxRooms === ""
      ) {
        const filteredData = data.filter((item: any) => {
          return (
            item.category === filters.category &&
            item.price <= Number(filters.price) &&
            item.summary.numberOfRooms <= Number(filters.maxRooms)
          );
        });
        setPostss(filteredData);
      } else if (
        filters.area !== "" &&
        filters.price === "" &&
        filters.minRooms === "" &&
        filters.maxRooms === ""
      ) {
        const filteredData = data.filter((item: any) => {
          return (
            item.category === filters.category &&
            item.summary.area <= Number(filters.area)
          );
        });
        setPostss(filteredData);
      } else if (
        filters.area === "" &&
        filters.price !== "" &&
        filters.minRooms === "" &&
        filters.maxRooms !== ""
      ) {
        const filteredData = data.filter((item: any) => {
          return (
            item.category === filters.category &&
            item.price <= Number(filters.price) &&
            item.summary.numberOfRooms >= Number(filters.minRooms)
          );
        });
        setPostss(filteredData);
      } else if (
        filters.area === "" &&
        filters.price !== "" &&
        filters.minRooms !== "" &&
        filters.maxRooms !== ""
      ) {
        const filteredData = data.filter((item: any) => {
          return (
            item.category === filters.category &&
            item.price === Number(filters.price) &&
            item.summary.numberOfRooms >= Number(filters.minRooms) &&
            item.summary.numberOfRooms <= Number(filters.maxRooms)
          );
        });
        setPostss(filteredData);
      } else if (
        filters.area === "" &&
        filters.price === "" &&
        filters.minRooms !== "" &&
        filters.maxRooms === ""
      ) {
        const filteredData = data.filter((item: any) => {
          return (
            item.category === filters.category &&
            item.summary.numberOfRooms >= Number(filters.minRooms)
          );
        });
        setPostss(filteredData);
      } else if (
        filters.area === "" &&
        filters.price === "" &&
        filters.minRooms !== "" &&
        filters.maxRooms !== ""
      ) {
        const filteredData = data.filter((item: any) => {
          return (
            item.category === filters.category &&
            item.summary.numberOfRooms >= Number(filters.minRooms) &&
            item.summary.numberOfRooms <= Number(filters.maxRooms)
          );
        });
        setPostss(filteredData);
      } else if (
        filters.area === "" &&
        filters.price === "" &&
        filters.minRooms === "" &&
        filters.maxRooms !== ""
      ) {
        const filteredData = data.filter((item: any) => {
          return (
            item.category === filters.category &&
            item.summary.numberOfRooms <= Number(filters.maxRooms)
          );
        });
        setPostss(filteredData);
      } else if (
        filters.area !== "" &&
        filters.price !== "" &&
        filters.minRooms === "" &&
        filters.maxRooms === ""
      ) {
        const filteredData = data.filter((item: any) => {
          return (
            item.category === filters.category &&
            item.summary.area <= Number(filters.area) &&
            item.price === Number(filters.price)
          );
        });
        setPostss(filteredData);
      } else if (
        filters.area !== "" &&
        filters.price === "" &&
        filters.minRooms !== "" &&
        filters.maxRooms === ""
      ) {
        const filteredData = data.filter((item: any) => {
          return (
            item.category === filters.category &&
            item.summary.area <= Number(filters.area) &&
            item.summary.numberOfRooms >= Number(filters.minRooms)
          );
        });
        setPostss(filteredData);
      } else if (
        filters.area !== "" &&
        filters.price === "" &&
        filters.minRooms === "" &&
        filters.maxRooms !== ""
      ) {
        const filteredData = data.filter((item: any) => {
          return (
            item.category === filters.category &&
            item.summary.area <= Number(filters.area) &&
            item.summary.numberOfRooms <= Number(filters.maxRooms)
          );
        });
        setPostss(filteredData);
      } else {
        const filteredData = data.filter((item: any) => {
          return item.category === filters.category;
        });
        setPostss(filteredData);
      }
    } else if (filters.location !== "") {
      if (
        filters.area !== "" &&
        filters.price !== "" &&
        filters.maxRooms !== "" &&
        filters.minRooms !== ""
      ) {
        const filteredData = data.filter((item: any) => {
          return (
            item.title.toLowerCase().includes(filters.location) &&
            item.summary.area <= Number(filters.area) &&
            item.price <= Number(filters.price) &&
            item.summary.numberOfRooms >= Number(filters.minRooms) &&
            item.summary.numberOfRooms <= Number(filters.maxRooms)
          );
        });
        setPostss(filteredData);
      } else if (
        filters.area === "" &&
        filters.price !== "" &&
        filters.maxRooms !== "" &&
        filters.minRooms !== ""
      ) {
        const filteredData = data.filter((item: any) => {
          return (
            item.title.toLowerCase().includes(filters.location) &&
            item.price <= Number(filters.price) &&
            item.summary.numberOfRooms >= Number(filters.minRooms) &&
            item.summary.numberOfRooms <= Number(filters.maxRooms)
          );
        });
        setPostss(filteredData);
      } else if (
        filters.area === "" &&
        filters.price === "" &&
        filters.maxRooms !== "" &&
        filters.minRooms !== ""
      ) {
        const filteredData = data.filter((item: any) => {
          return (
            item.title.toLowerCase().includes(filters.location) &&
            item.summary.numberOfRooms >= Number(filters.minRooms) &&
            item.summary.numberOfRooms <= Number(filters.maxRooms)
          );
        });
        setPostss(filteredData);
      } else if (
        filters.area === "" &&
        filters.price === "" &&
        filters.maxRooms === "" &&
        filters.minRooms !== ""
      ) {
        const filteredData = data.filter((item: any) => {
          return (
            item.title.toLowerCase().includes(filters.location) &&
            item.summary.numberOfRooms <= Number(filters.maxRooms)
          );
        });
        setPostss(filteredData);
      } else if (
        filters.area !== "" &&
        filters.price === "" &&
        filters.maxRooms !== "" &&
        filters.minRooms !== ""
      ) {
        const filteredData = data.filter((item: any) => {
          return (
            item.title.toLowerCase().includes(filters.location) &&
            item.area <= Number(filters.area) &&
            item.summary.numberOfRooms >= Number(filters.minRooms) &&
            item.summary.numberOfRooms <= Number(filters.maxRooms)
          );
        });
        setPostss(filteredData);
      } else {
        const filteredData = data.filter((item: any) => {
          return item.title.toLowerCase().includes(filters.location);
        });
        setPostss(filteredData);
      }
    } else if (filters.area !== "") {
      if (
        filters.price !== "" &&
        filters.minRooms !== "" &&
        filters.maxRooms !== ""
      ) {
        const filteredData = data.filter((item: any) => {
          return (
            item.summary.area <= Number(filters.area) &&
            item.price <= Number(filters.price) &&
            item.summary.numberOfRooms >= Number(filters.minRooms) &&
            item.summary.numberOfRooms <= Number(filters.maxRooms)
          );
        });
        setPostss(filteredData);
      } else if (
        filters.price === "" &&
        filters.minRooms !== "" &&
        filters.maxRooms !== ""
      ) {
        const filteredData = data.filter((item: any) => {
          return (
            item.summary.area <= Number(filters.area) &&
            item.summary.numberOfRooms >= Number(filters.minRooms) &&
            item.summary.numberOfRooms <= Number(filters.maxRooms)
          );
        });
        setPostss(filteredData);
      } else if (
        filters.price === "" &&
        filters.minRooms === "" &&
        filters.maxRooms !== ""
      ) {
        const filteredData = data.filter((item: any) => {
          return (
            item.summary.area <= Number(filters.area) &&
            item.summary.numberOfRooms <= Number(filters.maxRooms)
          );
        });
        setPostss(filteredData);
      } else if (
        filters.price !== "" &&
        filters.minRooms === "" &&
        filters.maxRooms !== ""
      ) {
        const filteredData = data.filter((item: any) => {
          return (
            item.summary.area <= Number(filters.area) &&
            item.price <= Number(filters.price) &&
            item.summary.numberOfRooms <= Number(filters.maxRooms)
          );
        });
        setPostss(filteredData);
      } else if (
        filters.price !== "" &&
        filters.minRooms !== "" &&
        filters.maxRooms === ""
      ) {
        const filteredData = data.filter((item: any) => {
          return (
            item.summary.area <= Number(filters.area) &&
            item.price <= Number(filters.price) &&
            item.summary.numberOfRooms >= Number(filters.minRooms)
          );
        });
        setPostss(filteredData);
      } else if (
        filters.price !== "" &&
        filters.minRooms === "" &&
        filters.maxRooms === ""
      ) {
        const filteredData = data.filter((item: any) => {
          return (
            item.summary.area <= Number(filters.area) &&
            item.price <= Number(filters.price)
          );
        });
        setPostss(filteredData);
      } else if (
        filters.price === "" &&
        filters.minRooms !== "" &&
        filters.maxRooms === ""
      ) {
        const filteredData = data.filter((item: any) => {
          return (
            item.summary.area <= Number(filters.area) &&
            item.summary.numberOfRooms >= Number(filters.minRooms)
          );
        });
        setPostss(filteredData);
      } else {
        const filteredData = data.filter((item: any) => {
          return item.summary.area === Number(filters.area);
        });
        setPostss(filteredData);
      }
    } else if (filters.price !== "") {
      if (filters.minRooms !== "" && filters.maxRooms !== "") {
        const filteredData = data.filter(
          (item: any) =>
            item.price === Number(filters.price) &&
            item.summary.numberOfRooms >= Number(filters.minRooms) &&
            item.summary.numberOfRooms <= Number(filters.maxRooms)
        );
        setPostss(filteredData);
      } else if (filters.minRooms !== "" && filters.maxRooms === "") {
        const filteredData = data.filter(
          (item: any) =>
            item.price === Number(filters.price) &&
            item.summary.numberOfRooms >= Number(filters.minRooms)
        );
        setPostss(filteredData);
      } else if (filters.minRooms === "" && filters.maxRooms !== "") {
        const filteredData = data.filter(
          (item: any) =>
            item.price === Number(filters.price) &&
            item.summary.numberOfRooms <= Number(filters.maxRooms)
        );
        setPostss(filteredData);
      } else {
        const filteredData = data.filter(
          (item: any) => item.price === Number(filters.price)
        );
        setPostss(filteredData);
      }
    } else if (filters.minRooms !== "") {
      if (filters.maxRooms !== "") {
        const filteredData = data.filter(
          (item: any) =>
            item.summary.numberOfRooms >= Number(filters.minRooms) &&
            item.summary.numberOfRooms <= Number(filters.maxRooms)
        );
        setPostss(filteredData);
      } else {
        const filteredData = data.filter(
          (item: any) => item.summary.numberOfRooms >= Number(filters.minRooms)
        );
        setPostss(filteredData);
      }
    } else if (filters.maxRooms !== "") {
      return data.filter(
        (item: any) => item.summary.numberOfRooms <= Number(filters.maxRooms)
      );
    } else return data.filter((item: any) => item);
  }
  return (
    <div className="homepage">
      {width > 450 ? <Header /> : <HeaderMobile />}
      <PageLayout>
        <Heading width={width} />
        <Filteroptions
          filterData={filterData}
          filters={filters}
          handleFilters={handleFilters}
          setFiltersValues={setFiltersValues}
        />
        <div className="detailed-searched">
          <span>Detaljnija pretraga</span>
          <AiOutlineDown />
        </div>
        <Posts data={posts} />
      </PageLayout>
      {width > 450 && <Footer />}
    </div>
  );
};

export default Homepage;
