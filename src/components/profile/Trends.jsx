import { useEffect, useState } from "react";
import { getTop5Hash } from "../../tweetServices";

function Trends() {
  const [topTrending, setToptrending] = useState([]);

  //Fetch top 5 hashtag from db
  useEffect(() => {
    const fetchData = async () => {
      const trending = await getTop5Hash();
      setToptrending(trending);
    };
    fetchData();
  }, []);
  return (
    <div
      className="mt-2 p-2 bg-light w-100 rounded-4"
      style={{ marginLeft: "25px" }}
    >
      <p>
        <b className="trend-heading text-sm">Trends for you</b>
      </p>
      <ul className="list-unstyled p-2">
        {topTrending.map((t, index) => (
          <li key={index}>
            <b> {t._id}</b>
            <p>{t.count}K</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Trends;
