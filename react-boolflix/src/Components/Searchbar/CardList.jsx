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
            <h3>
              {"title" in curElem
                ? curElem.original_title
                : curElem.original_name}
            </h3>
            <h4>
              {/* Qui utilizziamo original_language */}
              {curElem.original_language
                ? curElem.original_language
                : "Lingua non disponibile"}
            </h4>
          </div>
        ))
      ) : (
        <h1>Inserisci il titolo del film!</h1>
      )}
    </>
  );
}
