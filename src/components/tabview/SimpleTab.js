import React from "react";
import Comments from "../comment/Comments";
import ContentCmt from "../comment/ContentCmt";

function SimpleTab(props) {
  const [openPop, setopenPop] = React.useState(false);
  const { value, index } = props;
  const [result, setResult] = React.useState([]);

  React.useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos?client_id=LTJyNGcHuqa1iW17fRNq0SfG5jCvBYo8b1KWz2vu408&query=cat`
    )
      .then((res) => res.json())
      .then((data) => {
        //   console.log(data.results);
        setResult(data.results);
      });
  }, []);

  return (
    <div>
      {value === index && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {result.map((item) => {
            return (
              <img
                key={item.id}
                src={item.urls.regular}
                style={{ width: "30%", height: "350px", margin: "2px" }}
                alt=""
                onClick={() => setopenPop(true)}
              />
            );
          })}
          <Comments
            title="Enter your comments"
            openPop={openPop}
            setopenPop={setopenPop}
          >
            <ContentCmt />
          </Comments>
        </div>
      )}
    </div>
  );
}

export default SimpleTab;
