

export default function ResetPassword() {

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Réinitialiser votre mot de passe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="password"
          placeholder="Nouveau mot de passe"
          value={password}
          
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Confirmer le mot de passe"
          value={confirm}
          
          required
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
        >
          {loading ? "Changement en cours..." : "Changer le mot de passe"}
        </button>
        {message && (
          <p className={`text-center mt-2 ${message.startsWith("✅") ? "text-green-600" : "text-red-500"}`}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
}