"use client";

import { useState } from "react";
import { SoftwareProject } from "@/data/software";
import { ShieldCheck, Lock, CreditCard, QrCode, CheckCircle2, Download, Clock, ArrowRight, Tag, AlertCircle } from "lucide-react";

interface CheckoutModalProps {
  software: SoftwareProject;
  isOpen: boolean;
  onClose: () => void;
}

export default function CheckoutModal({ software, isOpen, onClose }: CheckoutModalProps) {
  const [paymentMethod, setPaymentMethod] = useState<"upi" | "card" | "netbanking">("upi");
  const [coupon, setCoupon] = useState<string>("");
  const [discount, setDiscount] = useState<number>(0);
  const [couponApplied, setCouponApplied] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [isPaid, setIsPaid] = useState<boolean>(false);
  const [downloadToken, setDownloadToken] = useState<string>("");

  const [utrNumber, setUtrNumber] = useState<string>("");
  const [utrError, setUtrError] = useState<string>("");

  if (!isOpen) return null;

  const handleApplyCoupon = () => {
    if (coupon.trim().toUpperCase() === "ATKFIRST20") {
      setDiscount(Math.round(software.priceINR * 0.2));
      setCouponApplied(true);
    } else if (coupon.trim().toUpperCase() === "ATKLABS100") {
      setDiscount(software.priceINR);
      setCouponApplied(true);
    } else {
      alert("Invalid coupon code. Try 'ATKFIRST20' for 20% off or 'ATKLABS100' for demo free access!");
    }
  };

  const finalAmount = Math.max(0, software.priceINR - discount);
  const gstAmount = Math.round(finalAmount * 0.18);
  const totalAmount = finalAmount + gstAmount;

  const handleCompletePayment = () => {
    setUtrError("");

    if (totalAmount > 0 && paymentMethod === "upi") {
      const cleanUtr = utrNumber.trim().replace(/\s+/g, "");
      if (!cleanUtr || cleanUtr.length < 10) {
        setUtrError("Please enter a valid 12-digit UTR / UPI Transaction Reference ID (e.g. 420198765432)");
        return;
      }
    }

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsPaid(true);
      const generatedToken = paymentMethod === "upi" && utrNumber.trim()
        ? `ATK-UTR-${utrNumber.trim().toUpperCase()}`
        : `ATK-DL-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
      setDownloadToken(generatedToken);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-zinc-950 border border-white/15 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-6 text-white relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-zinc-400 hover:text-white text-sm font-mono p-2 hover:bg-white/10 rounded-xl"
        >
          ✕
        </button>

        {!isPaid ? (
          <>
            {/* Header */}
            <div>
              <span className="text-[10px] font-mono font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-1 rounded-full uppercase">
                Direct UPI Instant Gateway
              </span>
              <h2 className="text-xl font-bold mt-2">{software.name} Single License</h2>
              <p className="text-xs text-zinc-400 mt-1 font-mono">Scan QR, submit UTR & unlock instant binary download</p>
            </div>

            {/* Payment Method Selector */}
            <div className="space-y-3">
              <label className="text-xs font-mono text-zinc-400">Select Payment Method</label>
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod("upi")}
                  className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center gap-1.5 ${
                    paymentMethod === "upi"
                      ? "border-cyan-500 bg-cyan-500/10 text-cyan-400"
                      : "border-white/10 bg-white/5 text-zinc-400 hover:bg-white/10"
                  }`}
                >
                  <QrCode className="w-5 h-5" />
                  <span className="text-xs font-semibold">UPI QR / Apps</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod("card")}
                  className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center gap-1.5 ${
                    paymentMethod === "card"
                      ? "border-cyan-500 bg-cyan-500/10 text-cyan-400"
                      : "border-white/10 bg-white/5 text-zinc-400 hover:bg-white/10"
                  }`}
                >
                  <CreditCard className="w-5 h-5" />
                  <span className="text-xs font-semibold">Credit/Debit</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod("netbanking")}
                  className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center gap-1.5 ${
                    paymentMethod === "netbanking"
                      ? "border-cyan-500 bg-cyan-500/10 text-cyan-400"
                      : "border-white/10 bg-white/5 text-zinc-400 hover:bg-white/10"
                  }`}
                >
                  <Lock className="w-5 h-5" />
                  <span className="text-xs font-semibold">Net Banking</span>
                </button>
              </div>
            </div>

            {/* UPI QR & UTR Section */}
            {paymentMethod === "upi" && (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center space-y-3">
                <div className="w-44 mx-auto bg-white rounded-2xl p-2 shadow-xl border border-white/20">
                  <img
                    src="/gpay-qr.png"
                    alt="AtkrsH Google Pay UPI QR Code"
                    className="w-full h-auto rounded-xl object-contain"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-[11px] text-zinc-300 font-mono font-medium">Scan &amp; Pay ₹{totalAmount} with GPay, PhonePe or Paytm</p>
                  <p className="text-[11px] text-cyan-400 font-mono font-bold select-all">UPI ID: atkrsh90-3@okhdfcbank</p>
                </div>

                {/* UTR Input */}
                <div className="pt-2 border-t border-white/10 text-left space-y-1.5">
                  <label className="text-[11px] font-mono text-zinc-300 flex items-center justify-between">
                    <span>Enter 12-Digit UTR / Ref No.</span>
                    <span className="text-[10px] text-zinc-500">Found in payment receipt</span>
                  </label>
                  <input
                    type="text"
                    maxLength={16}
                    placeholder="e.g. 420198765432"
                    value={utrNumber}
                    onChange={(e) => {
                      setUtrNumber(e.target.value);
                      if (utrError) setUtrError("");
                    }}
                    className="w-full px-3 py-2 bg-black border border-white/15 rounded-xl text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500 font-mono"
                  />
                  {utrError && (
                    <p className="text-[10px] text-rose-400 font-mono flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {utrError}
                    </p>
                  )}
                </div>
              </div>
            )}

            {paymentMethod !== "upi" && (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center space-y-2">
                <p className="text-xs text-zinc-300">
                  For Instant Card &amp; NetBanking processing, please pay using our verified UPI ID below or contact support.
                </p>
                <p className="text-xs text-cyan-400 font-mono font-bold">UPI ID: atkrsh90-3@okhdfcbank</p>
              </div>
            )}

            {/* Coupon Code Section */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-zinc-400">Coupon / Promo Code</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Try 'ATKFIRST20' or 'ATKLABS100'"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  className="flex-1 px-3 py-2 bg-black border border-white/10 rounded-xl text-xs text-white uppercase placeholder-zinc-600 focus:outline-none focus:border-cyan-500 font-mono"
                />
                <button
                  type="button"
                  onClick={handleApplyCoupon}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl text-xs font-semibold transition-colors"
                >
                  Apply
                </button>
              </div>
              {couponApplied && (
                <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Coupon applied successfully!
                </span>
              )}
            </div>

            {/* Order Price Breakdown */}
            <div className="bg-black/60 border border-white/10 rounded-2xl p-4 space-y-2 text-xs font-mono">
              <div className="flex justify-between text-zinc-400">
                <span>Software Price</span>
                <span>₹{software.priceINR}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-emerald-400">
                  <span>Discount</span>
                  <span>-₹{discount}</span>
                </div>
              )}
              <div className="flex justify-between text-zinc-400">
                <span>GST (18%)</span>
                <span>₹{gstAmount}</span>
              </div>
              <div className="pt-2 border-t border-white/10 flex justify-between font-bold text-sm text-white">
                <span>Total Payable</span>
                <span className="text-cyan-400">₹{totalAmount}</span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleCompletePayment}
              disabled={isProcessing}
              className="w-full py-3.5 rounded-2xl font-semibold text-sm text-black bg-gradient-to-r from-cyan-400 to-purple-400 hover:opacity-95 shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2"
            >
              {isProcessing ? (
                <>Verifying UTR Reference with Bank...</>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4" />
                  {totalAmount === 0 ? "Unlock Free Download" : `Submit UTR & Unlock Download (₹${totalAmount})`}
                </>
              )}
            </button>
          </>
        ) : (
          /* Payment Verified Success View */
          <div className="text-center space-y-6 py-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white font-sans">Payment &amp; UTR Verified!</h2>
              <p className="text-xs text-zinc-400 mt-1 font-mono">Transaction License: {downloadToken}</p>
            </div>

            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-4 text-left space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-400">Software:</span>
                <span className="text-white font-bold">{software.name} v{software.version}</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-400">Download Link Status:</span>
                <span className="text-emerald-400 font-bold">UNLOCKED ✓</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-amber-400">
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Expiry:</span>
                <span>Expires in 24 Hours</span>
              </div>
            </div>

            <a
              href={`/downloads/${software.id}.exe`}
              download={`${software.id}.exe`}
              className="w-full py-4 rounded-2xl font-bold text-sm text-black bg-gradient-to-r from-emerald-400 to-cyan-400 hover:opacity-95 shadow-xl shadow-emerald-500/25 transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download {software.name}.exe (Verified Binary)
            </a>

            <p className="text-[10px] text-zinc-500 font-mono">Official receipt logged under license key: {downloadToken}</p>
          </div>
        )}

      </div>
    </div>
  );

}
