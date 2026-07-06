export default function Products() {
  return (
    <section
      id="produkty"
      style={{
        background: "#111",
        color: "white",
        padding: "80px 40px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "42px",
          color: "#d4af37",
          marginBottom: "50px",
        }}
      >
        Nasze produkty
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            background: "#1b1b1b",
            border: "1px solid #d4af37",
            borderRadius: "12px",
            padding: "30px",
            width: "320px",
            textAlign: "center",
          }}
        >
          <h3 style={{ color: "#d4af37" }}>Dostawca perfum</h3>

          <p>Sprawdzony dostawca z wysoką marżą.</p>

          <h2>99 zł</h2>

          <button
            style={{
              background: "#d4af37",
              color: "#000",
              border: "none",
              padding: "15px 30px",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Kup teraz
          </button>
        </div>

        <div
          style={{
            background: "#1b1b1b",
            border: "1px solid #d4af37",
            borderRadius: "12px",
            padding: "30px",
            width: "320px",
            textAlign: "center",
          }}
        >
          <h3 style={{ color: "#d4af37" }}>Metody zarobku</h3>

          <p>Gotowe poradniki i sprawdzone sposoby zarabiania.</p>

          <h2>149 zł</h2>

          <button
            style={{
              background: "#d4af37",
              color: "#000",
              border: "none",
              padding: "15px 30px",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Kup teraz
          </button>
        </div>
      </div>
    </section>
  );
}