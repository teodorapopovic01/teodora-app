interface Props {
  item: any;
}

const Summary = ({ item }: Props) => {
  function convertToKn(price: number) {
    return Math.round(price * 7.53);
  }

  const yearBuilt = new Date(item?.summary?.yearBuilt).toLocaleDateString(
    "ro-RO"
  );
  return (
    <>
      <div className="wrapper">
        {item?.summary?.area && (
          <>
            {" "}
            <span className="description">
              {item?.summary?.area}
              {"m²"}
            </span>
          </>
        )}
        {item?.summary?.yearBuilt && (
          <>
            <span className="dot"></span>
            <span className="description">{yearBuilt}</span>
          </>
        )}

        {item?.summary?.numberOfRooms && (
          <>
            <span className="dot"></span>
            <span className="description">
              {item?.summary?.numberOfRooms} {"rooms"}
            </span>
          </>
        )}
      </div>
      <div className="prices">
        <div className="price">
          {item?.priceCurrency === "EUR" && "€"}
          {item?.price}
        </div>
        <div className="price-kn">
          {convertToKn(item?.price)} {"kn"}
        </div>
      </div>
    </>
  );
};

export default Summary;
