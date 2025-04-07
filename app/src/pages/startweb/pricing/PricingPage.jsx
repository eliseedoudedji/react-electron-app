import React, { useState } from "react";
import "./PricingPage.css";
import { Elements, CardElement, useStripe, useElements, } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// Remplace cette clé par ta clé publique Stripe
const stripePromise = loadStripe("pk_test_1234567890");

// Composant pour le paiement par carte avec Stripe
function StripePaymentForm({ onSuccess, onBack }) {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) return;
        setLoading(true);

        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: cardElement,
        });

        if (error) {
            console.error(error);
            setLoading(false);
            return;
        }
        // Simuler un délai pour le traitement du paiement côté serveur
        setTimeout(() => {
            onSuccess();
            setLoading(false);
        }, 1000);
    };

    return (
        <div className="text-center">
            <h4 className="mb-4">Paiement par Carte</h4>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <CardElement
                        className="form-control p-2"
                        options={{
                            style: {
                                base: {
                                    fontSize: "16px",
                                    color: "#495057",
                                    "::placeholder": {
                                        color: "#6c757d"
                                    }
                                },
                                invalid: {
                                    color: "#dc3545"
                                }
                            }
                        }}
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100" disabled={!stripe || loading}>
                    {loading ? "Processing..." : "Payer"}
                </button>
            </form>
            <button className="btn btn-secondary mt-3" onClick={onBack}>
                ⬅ Retour
            </button>
        </div>
    );
}

// Composant pour le paiement avec PayPal
function PayPalPaymentForm({ onSuccess, onBack }) {
    // Options d'initialisation du script PayPal (remplace le client-id par le tien)
    const initialOptions = {
        "client-id": "test", // Utilise ton client-id PayPal ici
        currency: "USD",
        intent: "capture"
    };

    return (
        <div className="text-center">
            <h4 className="mb-4">Paiement avec PayPal</h4>
            <PayPalScriptProvider options={initialOptions}>
                <PayPalButtons
                    style={{ layout: "vertical" }}
                    createOrder={(data, actions) => {
                        return actions.order.create({
                            purchase_units: [{
                                amount: { value: "10.00" } // Exemple de montant
                            }]
                        });
                    }}
                    onApprove={(data, actions) => {
                        return actions.order.capture().then(function (details) {
                            onSuccess();
                        });
                    }}
                    onError={(err) => {
                        console.error(err);
                    }}
                />
            </PayPalScriptProvider>
            <button className="btn btn-secondary mt-3" onClick={onBack}>
                ⬅ Retour
            </button>
        </div>
    );
}

export default function PricingPage() {
    // Les étapes possibles : choose | card | paypal | success
    const [step, setStep] = useState("choose");

    const handlePaymentSuccess = () => {
        setStep("success");
    };

    return (
        <div className="container py-5">
            <div className="fade-in-top text-center mb-4">
                <h1 className="display-5 fw-bold">Paiement sécurisé</h1>
                <p className="text-muted">Choisissez votre méthode de paiement</p>
            </div>

            <div className="fade-in">
                {step === "choose" && (
                    <div className="row g-4 justify-content-center">
                        <div className="col-md-5">
                            <div className="card shadow-lg border-0">
                                <div className="card-body text-center">
                                    <h5 className="fw-bold">Carte Bancaire</h5>
                                    <p>Payer par Visa, Mastercard, etc.</p>
                                    <button className="btn btn-primary w-100" onClick={() => setStep("card")}>
                                        Continuer
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="card shadow-lg border-0">
                                <div className="card-body text-center">
                                    <h5 className="fw-bold">PayPal</h5>
                                    <p>Payer avec votre compte PayPal</p>
                                    <button className="btn btn-warning w-100" onClick={() => setStep("paypal")}>
                                        Continuer
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {step === "card" && (
                    <Elements stripe={stripePromise}>
                        <StripePaymentForm onSuccess={handlePaymentSuccess} onBack={() => setStep("choose")} />
                    </Elements>
                )}

                {step === "paypal" && (
                    <PayPalPaymentForm onSuccess={handlePaymentSuccess} onBack={() => setStep("choose")} />
                )}

                {step === "success" && (
                    <div className="text-center fade-in-top">
                        <h3 className="text-success fw-bold">✅ Paiement réussi !</h3>
                        <p>Merci pour votre achat 🎉</p>
                    </div>
                )}
            </div>
        </div>
    );
}
