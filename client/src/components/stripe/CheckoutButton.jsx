// CheckoutButton.jsx

function CheckoutButton({ priceId }) {
  const handleClick = async () => {
    const res = await fetch("http://localhost:3000/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ priceId }),
    });

    const data = await res.json();
    if (data.url) {
      window.location.href = data.url; // redirection vers Stripe Checkout
    } else {
      console.error("Erreur : pas d'URL Stripe reçue", data);
    }
  };

  return <button onClick={handleClick} target="blank">S'abonner</button>;
}

export default CheckoutButton;
