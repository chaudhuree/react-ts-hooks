import { useEffect, useState } from "react";

export interface Beverage {
  name: string;
  producerName: string;
  beverageName: string;
  beverageColor: string;
  beverageStyle: string;
  producerLocation: string;
  abv: number;
  ibu: number;
  logo: string;
  level: number;
}

//docs: a way to declare function in ts way
// function add(x: number, y: number): number {
//   return x + y;
// }
function useFetchData(url: string): {
  data: Beverage[] | null;
  done: boolean;
} {
  const [data, dataSet] = useState<Beverage[] | null>(null);
  const [done, doneSet] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((d: Beverage[]) => {
        dataSet(d);
        doneSet(true);
      });
  }, [url]);

  return {
    data,
    done,
  };
}

function CustomHookComponent() {
  const { data, done } = useFetchData("/hv-taplist.json");

  return (
    <div>
      {done && (
        // <img src={data![0].logo} alt="Beverage logo" />
        <h4>
          <p>
            Beverage Name: <i>{data![0].beverageName}</i>
          </p>
        </h4>
      )}
    </div>
  );
}

export default CustomHookComponent;
