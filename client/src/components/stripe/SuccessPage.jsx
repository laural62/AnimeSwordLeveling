// SuccessPage.jsx
import { FaCheckCircle } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";


export default function SuccessPage() {

  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  console.log("Session Stripe:", sessionId);

  return (
    <div className="bg-black flex items-center justify-content flex-col h-[80vh] text-white">
      <FaCheckCircle size={120} color="green" />
      <h1>Paiement réussi !</h1>
      <p>Merci pour ton abonnement.</p>
    </div>
  );
}
