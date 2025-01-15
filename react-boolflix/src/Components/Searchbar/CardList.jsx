import { contextUse } from "../../Context/GlobalContext";

export function CardList() {
  const { data } = contextUse();
  console.log(data);

  return (
    <>
      {data != undefined ? (
        data.map((curElem) => (
          <div key={curElem.id}>
            <h2>{"title" in curElem ? curElem.title : curElem.name}</h2>
            <h2>
              {"title" in curElem
                ? curElem.original_title
                : curElem.original_name}
            </h2>
          </div>
        ))
      ) : (
        <h1>Inserisci il nome del film</h1>
      )}
    </>
  );
}
