export default function Zaawansowane() {
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
          alt="Metody Zaawansowane"
          style={{
            width: "450px",
            borderRadius: "20px",
          }}
        />

        <div style={{ flex: 1 }}>
          <h1 style={{ color: "#d4af37", fontSize: "48px" }}>
            Metody Zarabiania — Zaawansowane
          </h1>

          <p style={{ fontSize: "20px", color: "#ccc" }}>
            Najbardziej rozbudowany pakiet z zaawansowanymi strategiami i sposobami skalowania biznesu.
          </p>

          <h2 style={{ color: "#d4af37", fontSize: "46px" }}>
            200 zł
          </h2>

          <p>✔ Zaawansowane strategie</p>
          <p>✔ Skalowanie biznesu</p>
          <p>✔ Metody premium</p>
          <p>✔ Regularne aktualizacje</p>

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