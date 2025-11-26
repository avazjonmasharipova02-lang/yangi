import './App.css';
import Hello from './script';
import { useState } from 'react'; 

//1
function App() {
  const [matn, setMatn] = useState("Assalomu alaykum");
  function matnniAlmashtir() {
    if (matn === "Assalomu alaykum") {
      setMatn("Xush kelibsiz");
    } else {
      setMatn("Assalomu alaykum");
    }
  }
  //2
  const [rang, setRang] = useState("blue");
  function rangniAlmashtir() {
    setRang(rang === "blue" ? "red" : "blue");
  }


  // 1. Matn almashtirish
  const [txt, setTxt] = useState("Assalomu aleykum");

  // 2. Rang almashtirish
  const [bg, setBg] = useState("blue");

  // 3. Role almashtirish
  const [role, setRole] = useState("Frontend dasturchi");

  // 4. Parol ko'rsatish/yashirish
  const [pass] = useState("123456");
  const [show, setShow] = useState(false);

  // 5. Til almashtirish
  const [greet, setGreet] = useState("Salom");

  // 6. Katta/ kichik harf
  const [big, setBig] = useState(false);

  // 7. Div hajmini o'zgartirish
  const [size, setSize] = useState(100);

  // 8. Tugma matnini almashtirish
  const [btn, setBtn] = useState("Yoqish");

  //yangi 1
  const [salom, alik] = useState([
    {title: "salomlar", id: 1},
    {title: "xayrlar", id: 2},
    {title: "omadlar", id: 3}
  ]);
  const deletee = (id) => {
    alik((pre) => {
    return pre.filter((event) => {
      return event.id !== id;
    });
    });
  };

  return (
    <div className="App">
    <div style={{ padding: 20 }}>
      {/* 1 */}
      <h2>{txt}</h2>
      <button onClick={() => setTxt(txt === "Assalomu aleykum" ? "Xush kelibsiz" : "Assalomu aleykum")}>
        Matnni almashtir
      </button>
      <hr />

      {/* 2 */}
      <div style={{ background: bg, padding: 20, color: "white" }}>
        <h3>Rang: {bg}</h3>
        <button onClick={() => setBg(bg === "blue" ? "red" : "blue")}>Rangni almashtir</button>
      </div>
      <hr />
    
      {/* 3 */}
      <h3>{role}</h3>
      <button onClick={() => setRole("React developer")}>React</button>
      <button onClick={() => setRole("JavaScript developer")}>JS</button>

      <hr />

      {/* 4 */}
      <h3>{show ? pass : "*".repeat(pass.length)}</h3>
      <button onClick={() => setShow(!show)}>{show ? "Yashirish" : "Ko'rsat"}</button>
      <hr />

      {/* 5 */}
      <h3>{greet}</h3>
      <button onClick={() => setGreet(greet === "Salom" ? "Hello" : "Salom")}>Tilni almashtir</button>
      <hr />

      {/* 6 */}
      <h3>{big ? "FRONTEND" : "frontend"}</h3>
      <button onClick={() => setBig(!big)}>Katta/ kichik</button>
      <hr />

      {/* 7 */}
      <div style={{ width: size, height: size, background: "#eee", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {size}px
      </div>
      <button onClick={() => setSize(size === 100 ? 200 : 100)}>O'lchamni toggle</button>
      <hr />

      {/* 8 */}
      <button onClick={() => setBtn(btn === "Yoqish" ? "O'chirish" : "Yoqish")}>{btn}</button>
      {/* yangi 1 */}
      <div>
        {salom.map((sat) => {
     
            <div key={sat.id}>
              <h1>{sat.title}</h1>
              <button onClick={() => deletee(sat.id)}>Delete</button>
              </div>
          
        }
      )}
      </div>
    </div>
  






    </div> 
     );
}

export default App;