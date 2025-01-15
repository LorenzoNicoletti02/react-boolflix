import { contextUse } from "../../Context/GlobalContext";

export function CardList() {
  const { data } = contextUse();

  function LinguaFilm({ filmLanguage }) {
    let bandiera = "";
    if (filmLanguage === "en") {
      bandiera = "../public/images/en.png";
    } else if (filmLanguage === "it") {
      bandiera = "../public/images/it.png";
    } else {
      bandiera = "../public/images/placeholder.png";
    }
    return <img src={bandiera} />;
  }

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

            <div>
              <LinguaFilm filmLanguage={curElem.original_language} />
            </div>

            <div>
              Voto: {"vote_average" in curElem ? curElem.vote_average : "N/A"}
            </div>
          </div>
        ))
      ) : (
        <h1>Inserisci il titolo del film!</h1>
      )}
    </>
  );
}
