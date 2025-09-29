// framework utilisé par le serveur node
import express from "express";
// permet de lire les variables d'environnement contenues dans .env
import dotenv from "dotenv";
// permettre de lire le contenu des cookies
import cookieParser from "cookie-parser";
import cors from "cors";

import Stripe from "stripe"; 

// permet de préciser ou sont les routes
import routes from "./routes/index.js";

// récupère la connexion à la base de données
import { connectDB } from "./lib/db.js";

// indique que l'on va utiliser .env
dotenv.config();

const PORT = process.env.PORT;

// indique que notre application utilise express
const app = express();

// indique que l'on va pouvoir traduire le JSON et que l'on va utiliser des cookies
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: [process.env.DEPLOY_FRONT_URL, process.env.CLIENT_URL],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);

// chaque route localhost:3000 sera redirigé vers le dossier routes
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Le serveur est démarré sur le port ${PORT}`);
  connectDB();
});

//abonnement avec stripe
const stripe = new Stripe("sk_test_51S90z2JTQpSZHZb9TwHMtpjd9m8PqfQBs9WMMAANjq9MrimonIh1QPl4sfetVdVvZOijqZlTFpBJSSrxLh8jfUIx00dhSGlSRW"); // clé secrète

// Route pour créer une session Checkout
app.post("/create-checkout-session", async (req, res) => {
  const { priceId } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: "http://localhost:5173/success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "http://localhost:3000/cancel",
    });

    res.json({ url: session.url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route webhook pour gérer les abonnements
app.post("/webhook", express.raw({ type: "application/json" }), (req, res) => {
  // ce handler doit être configuré AVEC la signature Stripe
  const sig = req.headers["stripe-signature"];
  const endpointSecret = "SIGNATURE_WEBHOOK"; // à récupérer sur Stripe

  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    console.log("✅ Abonnement créé :", session);
    // Ici, mets à jour ta base de données utilisateur
  }

  res.json({ received: true });
});

app.listen(3000, () => console.log("🚀 Server running on port 3000"));
app.listen(3000, () => console.log("Server running on port 3000"));