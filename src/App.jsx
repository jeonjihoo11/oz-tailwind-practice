import "./App.css";
import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";






function App() {
  return (
    <main>
      <Header />
      <section className="flex flex-wrap gap-5 p-5">
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </section>
    </main>
  );
}







function App() {
  return (
    <section className="flex flex-wrap gap-5 p-5">
      <div className="flex flex-col items-start gap-1">
        <img
          src={content.img}
          alt={content.title}
          "className=w-[300px] rounded-[10px] mb-[3px]"
        />
        <span className="text-[12px] text-[#d7fa00] border border-[#d7fa00] px-[5px] py-[4px] rounded-[3px]">
          모집중
        </span>
        <div className="text-[18px] font-semibold">{content.title}</div>
        <p className="text-[12px] text-gray-400">{content.subtitle}</p>
      </div>
    </section>
  );
}

export default App;
