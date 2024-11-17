import "bulma/css/bulma.css"; // bulma css
import ProfileCard from "./ProfileCard";
import AlphaZeroImage from "./images/AlphaZero.png";
import StockFishImage from "./images/Stockfish.png";
import LeelaImage from "./images/LeelaChessZero.png";
import KomodoImage from "./images/Komodo.png";

function App() {
  return (
    <>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Modern Chess Engines</p>
        </div>
      </section>
      <div className="columns">
        <div className="column">
          <ProfileCard
            title="Alpha Zero"
            image={AlphaZeroImage}
            text="AlphaZero was developed by DeepMind, an artificial intelligence and research company that was later acquired by Google. It was the first engine to use reinforcement learning and self-play to train its neural networks."
            link="https://www.deepmind.com/blog/alphazero-shedding-new-light-on-chess-shogi-and-go"
          />
        </div>
        <div className="column">
          <ProfileCard
            title="Stockfish"
            image={StockFishImage}
            text="Stockfish is currently the strongest chess engine available to the public. As an open-source engine, an entire community of people is helping to develop and improve it. Like many others, Stockfish has included neural networks in its code to make even better evaluations of chess positions."
            link="https://stockfishchess.org/"
          />
        </div>
        <div className="column">
          <ProfileCard
            title="Leela Chess Zero"
            image={LeelaImage}
            text="Leela Chess Zero is currently the second strongest publicly available chess engine. The engine (which also goes by the names Lc0, LCZero, and Leela) is part of an open-source neural network project started in 2018."
            link="https://lczero.org/"
          />
        </div>
        <div className="column">
          <ProfileCard
            title="Komodo"
            image={KomodoImage}
            text="Chess.com acquired Komodo in 2018 and uses it on our Play Computer page. The engine's ability to run at different playing strengths, with different styles and opening books, has made it a popular choice among players."
            link="https://komodochess.com/"
          />
        </div>
      </div>
    </>
  );
}

export default App;
