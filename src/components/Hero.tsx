export default function Hero() {
  return (
    <section
      style={{
        background: "#0b0b0b",
        color: "white",
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "40px",
      }}
    >
      <h1
        style={{
          fontSize: "72px",
          color: "#d4af37",
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        33DROP
      </h1>

      <p
        style={{
          fontSize: "26px",
          maxWidth: "700px",
          lineHeight: "1.6",
          color: "#ddd",
        }}
      >
        Najlepszy sklep z materiałami do zarabiania oraz sprawdzonymi
        dostawcami perfum.
      </p>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "40px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <button
  onClick={() => {
    window.location.href = "/shop";
  }}
  style={{
    background: "#d4af37",
    color: "black",
    padding: "18px 40px",
    border: "none",
    borderRadius: "12px",
    fontSize: "20px",
    fontWeight: "bold",
    cursor: "pointer",
  }}
>
  Wejdź do sklepu
</button>

        <button
          style={{
            background: "transparent",
            color: "#d4af37",
            border: "2px solid #d4af37",
            padding: "18px 40px",
            borderRadius: "12px",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          Dowiedz się więcej
        </button>
      </div>
    </section>
  );
}