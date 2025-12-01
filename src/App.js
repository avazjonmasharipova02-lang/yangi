import React, { useState } from "react";
import './App.css';

// Header component
function Header() {
  return <h2>Bu Header qismi</h2>;
}

// Content component
function Content() {
  return <p>Bu Content qismi</p>;
}

// Footer component
function Footer() {
  return <p>Bu Footer qismi</p>;
}

// Product component
function Product(props) {
  return (
    <div style={{border: "1px solid #333", padding: "10px", margin: "5px"}}>
      <h3>{props.name}</h3>
      <p>Narxi: {props.price} so'm</p>
    </div>
  );
}

// Student component
function Student(props) {
  return (
    <div style={{border: "1px solid #333", padding: "10px", margin: "10px"}}>
      <h3>Ism: {props.ism}</h3>
      <p>Yosh: {props.yosh}</p>
      <p>Guruh: {props.guruh}</p>
    </div>
  );
}

  //30
  function Card(props) {
  return (
    <div style={{
      border: "1px solid #333",
      borderRadius: "8px",
      padding: "10px",
      margin: "10px",
      textAlign: "center",
      width: "200px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
    }}>
      <img 
        src={props.imgurl} 
        alt={props.title} 
        style={{width: "100%", borderRadius: "5px"}}
      />
      <h3>{props.title}</h3>
    </div>
  );
}

// App component56776687

function App() {
  // Matn almashtirish
  const [txt, setTxt] = useState("Assalomu aleykum");

  // Rang almashtirish
  const [bg, setBg] = useState("blue");

  // Role almashtirish
  const [role, setRole] = useState("Frontend dasturchi");

  // Parol ko'rsatish/yashirish
  const [pass] = useState("123456");
  const [show, setShow] = useState(false);

  // Til almashtirish
  const [greet, setGreet] = useState("Salom");

  // Katta/ kichik harf
  const [big, setBig] = useState(false);

  // Div hajmini o'zgartirish
  const [size, setSize] = useState(100);

  // Tugma matnini almashtirish
  const [btn, setBtn] = useState("Yoqish");

  // Massivlar
  const [salom, setSalom] = useState([
    {title: "salomlar", id: 1},
    {title: "xayrlar", id: 2},
    {title: "omadlar", id: 3}
  ]);

  const [oquvchi, setOquvchi] = useState([
    {name: "Avazjon", id: 1},
    {name: "Dilnura", id: 2},
    {name: "Ruxshona", id: 3}
  ]);

  const deletee = (id) => {
    setSalom((prev) => prev.filter((event) => event.id !== id));
  };


  // Counter
  const [count, setCount] = useState(0);

  // Students data
  const students = [
    {id: 1, ism: "Avazjon", yosh: 16, guruh: "A1"},
    {id: 2, ism: "Dilnura", yosh: 17, guruh: "B2"},
    {id: 3, ism: "Ruxshona", yosh: 16, guruh: "C3"}
  ];

  // Numbers array
  const numbers = [1,2,3,4,5,6,7,8,9,10];
  
  //new
  const [showcontent, setshowcontent] = useState(true);
  const[salom2, alik]=useState([
    {title:"salomlar", id:1},
    {title:"xayrlar", id:2},
    {title:"omadlar", id:3}
  ]);

  // count
   const [count2, setCount2] = useState(0);

   // 19
     const [name, setName] = useState("");

     //20
       const [theme, setTheme] = useState("light");

  // Toggle funksiyasi tugma bosilganda
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
  };

  // Style obyektlari
  const appStyle = {
    backgroundColor: theme === "light" ? "#ffffff" : "#222222",
    color: theme === "light" ? "#000000" : "#ffffff",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s"
  };

//35
  const cards = [
    {id: 1, title: "Tabiat", imgurl: "https://picsum.photos/200/150?random=1"},
    {id: 2, title: "Shahar", imgurl: "https://picsum.photos/200/150?random=2"},
    {id: 3, title: "Dengiz", imgurl: "https://picsum.photos/200/150?random=3"},
  ];

  return (
    <div className="App" style={{padding: "20px"}}>
 

      {/* 2. Rang almashtirish */}
      <div style={{ background: bg, padding: 20, color: "white" }}>
        <h3>Rang: {bg}</h3>
        <button onClick={() => setBg(bg === "blue" ? "red" : "blue")}>Rangni almashtir</button>
      </div>
      <hr />

      {/* 3. Role almashtirish */}
      <h3>{role}</h3>
      <button onClick={() => setRole("React developer")}>React</button>
      <button onClick={() => setRole("JavaScript developer")}>JS</button>
      <hr />

      {/* 4. Parol ko'rsatish/yashirish */}
      <h3>{show ? pass : "*".repeat(pass.length)}</h3>
      <button onClick={() => setShow(!show)}>{show ? "Yashirish" : "Ko'rsat"}</button>
      <hr />

      {/* 5. Til almashtirish */}
      <h3>{greet}</h3>
      <button onClick={() => setGreet(greet === "Salom" ? "Hello" : "Salom")}>Tilni almashtir</button>
      <hr />

      {/* 6. Katta/ kichik harf */}
      <h3>{big ? "FRONTEND" : "frontend"}</h3>
      <button onClick={() => setBig(!big)}>Katta/ kichik</button>
      <hr />

      {/* 7. Div hajmini o'zgartirish */}
      <div style={{ width: size, height: size, background: "#eee", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {size}px
      </div>
      <button onClick={() => setSize(size === 100 ? 200 : 100)}>O'lchamni toggle</button>
      <hr />

      {/* 8. Tugma matnini almashtirish */}
      <button onClick={() => setBtn(btn === "Yoqish" ? "O'chirish" : "Yoqish")}>{btn}</button>
      <hr />

      {/* Salomlar list */}
      <div>
        {salom.map((sat) => (
          <div key={sat.id}>
            <h1>{sat.title}</h1>
            <button onClick={() => deletee(sat.id)}>Delete</button>
          </div>
        ))}
      </div>
      <hr />

      {/* Oquvchi list */}
      <div>
        {oquvchi.map((o) => (
          <div key={o.id}>
            <h2>{o.name}</h2>
            <button onClick={() => setOquvchi(oquvchi.filter((item) => item.id !== o.id))}>O'chirish</button>
          </div>
        ))}
      </div>
      <hr />

      {/* Counter */}

      <hr />

      {/* Header, Content, Footer */}
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
      <hr />

      {/* Products */}
      <div>
        <Product name="Olma" price="8000" />
        <Product name="Banan" price="14000" />
        <Product name="Tarvuz" price="5000" />
        <Product name="Kivi" price="20000" />
        <Product name="Anor" price="12000" />
      </div>
      <hr />

      {/* Students */}
      <h1>Studentlar ro'yxati</h1>
      {students.map((s) => (
        <Student key={s.id} ism={s.ism} yosh={s.yosh} guruh={s.guruh} />
      ))}
      <hr />

      {/* Numbers */}
      <h2>Raqamlar:</h2>
      <div style={{display: "flex", gap: "10px"}}>
        {numbers.map((num) => (
          <div key={num} style={{width: "30px", height: "30px", background: "#eee", display: "flex", alignItems: "center", justifyContent: "center"}}>
            {num}
          </div>
        ))}
      </div>
         <div>
                          <button onClick={() => setshowcontent(false)}>yashirish</button>
            <button onClick={() => setshowcontent(true)}>korsatish</button>
          {showcontent && salom2.map((sat) => {
            return(
              <h1 key={sat.id}>{sat.title}</h1>
            )
          })}
         </div>
              {/* 1. Matn almashtirish */}
      <h2>{txt}</h2>
      <button onClick={() => setTxt(txt === "Assalomu aleykum" ? "Xush kelibsiz" : "Assalomu aleykum")}>
        Matnni almashtir
      </button>
      <hr />

            <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
         <div>
                
        <h1>{count2}</h1>
        <button onClick={() => setCount2(count2 + 1)}>+</button>
         </div>

             <div style={{padding: "20px"}}>
      <h2>Ismingizni kiriting:</h2>
      <input 
        type="text" 
        value={name} // controlled input
        onChange={(e) => setName(e.target.value)} // input o'zgarganda state yangilanadi
        placeholder="Ismingizni yozing"
        style={{padding: "5px", fontSize: "16px"}}
      />
      <h3 style={{marginTop: "20px"}}>
        {name ? `Salom, ${name}!` : "Salom!"}
      </h3>
    </div>

        <div style={appStyle}>
      <h1>{theme === "light" ? "Light Mode" : "Dark Mode"}</h1>
      <button 
        onClick={toggleTheme} 
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          marginTop: "20px"
        }}
      >
        {theme === "light" ? "Dark Mode-ga o‘tkazish" : "Light Mode-ga o‘tkazish"}
      </button>
    </div>


    <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
      {cards.map(card => (
        <Card key={card.id} title={card.title} imgurl={card.imgurl} />
      ))}
    </div>
    </div>
  );
}

export default App;