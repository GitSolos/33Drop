export default function Srednio() {
  return (
    <div
      style={{
        background: "#0b0b0b",
        color: "white",
        minHeight: "100vh",
        padding: "60px",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          gap: "60px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <img
          src="/metody.jpg.png"
          alt="Metody Średniozaawansowane"
          style={{
            width: "450px",
            borderRadius: "20px",
          }}
        />

        <div style={{ flex: 1 }}>
          <h1 style={{ color: "#d4af37", fontSize: "48px" }}>
            Metody Zarabiania — Średniozaawansowane
          </h1>

          <p style={{ fontSize: "20px", color: "#ccc" }}>
            Dla osób, które mają już pierwsze doświadczenie i chcą zwiększyć zyski.
          </p>

          <h2 style={{ color: "#d4af37", fontSize: "46px" }}>
            100 zł
          </h2>

          <p>✔ Bardziej dochodowe metody</p>
          <p>✔ Strategie skalowania</p>
          <p>✔ Lepsze źródła zarobku</p>
          <p>✔ Stałe aktualizacje</p>

          <button
            style={{
              marginTop: "30px",
              background: "#d4af37",
              color: "black",
              padding: "18px 40px",
              border: "none",
              borderRadius: "12px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Kup teraz
          </button>
        </div>
      </div>
    </div>
  );
}