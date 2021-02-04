import "./cards.css";
export default function Cards({ data }) {
  return (
    <>
      {data.sprites === undefined ? (
        <div></div>
      ) : (
        <div className="pokecard">
          <img src={data.sprites.other.dream_world.front_default} alt=""></img>
          <div className="card-data">
            <p className="card-texts">
              Name: <span className="card-texts-data">{data.name}</span>
            </p>
            <p className="card-texts">
              HP:{" "}
              <span className="card-texts-data">{data.stats[0].base_stat}</span>
            </p>
            <p className="card-texts">
              Attack:{" "}
              <span className="card-texts-data">{data.stats[1].base_stat}</span>{" "}
            </p>
            <p className="card-texts">
              Defense:
              <span className="card-texts-data">{data.stats[2].base_stat}</span>
            </p>
            <p className="card-texts">
              Type:{" "}
              <span className="card-texts-data">{data.types[0].type.name}</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
