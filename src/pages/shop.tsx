export default function Shop() {
  const products = [
    {
      name: "Dostawca Perfum",
      price: "80 zł",
      desc: "Sprawdzony dostawca z wysoką marżą.",
      image: "dostawca.jpg",
      link: "/produkt/dostawca",
    },
    {
      name: "Metody Zarobku Początkujący",
      price: "50 zł",
      desc: "Najlepsze sposoby zarabiania online dla początkujących.",
      image: "metody.jpg.png",
      link: "/produkt/poczatkujacy",
    },
    {
      name: "Metody Zarobku Średniozaawansowane",
      price: "100 zł",
      desc: "Bardzo dobre metody dla osób z większym budżetem.",
      image: "metody.jpg.png",
      link: "/produkt/srednio",
    },
    {
      name: "Metody Zarobku Zaawansowane",
      price: "200 zł",
      desc: "Kompletny zestaw materiałów premium.",
      image: "metody.jpg.png",
      link: "/produkt/zaawansowane",
    },
  ];

  return (
    <div
      style={{
        background: "#0b0b0b",
        minHeight: "100vh",
        color: "white",
        padding: "60px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#d4af37",
          fontSize: "50px",
          marginBottom: "60px",
        }}
      >
        Sklep 33DROP
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        {products.map((product, index) => (
          <div
            key={index}
            style={{
              width: "330px",
              background: "#1b1b1b",
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid #333",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "25px" }}>
              <h2 style={{ color: "#d4af37" }}>{product.name}</h2>

              <p>{product.desc}</p>

              <h3>{product.price}</h3>

              <button
                onClick={() => {
                  window.location.href = product.link;
                }}
                style={{
                  width: "100%",
                  background: "#d4af37",
                  color: "black",
                  border: "none",
                  padding: "15px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: "18px",
                  marginTop: "15px",
                }}
              >
                Kup teraz
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}