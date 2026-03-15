import { useState, useRef, useEffect, FormEvent } from "react";
import { X, Send } from "lucide-react";
import { useWhatsAppModal } from "@/contexts/WhatsAppModalContext";
import { whatsappLink } from "@/config/siteConfig";

const WEBHOOK_URL = "https://SEU-WEBHOOK-AQUI.com/webhook"; // TODO: substituir pela URL real

const WhatsAppIcon = ({ size = 24 }: { size?: number }) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="currentColor">
    <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.129 6.745 3.047 9.379L1.054 31.49l6.311-2.022A15.89 15.89 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0Zm9.335 22.594c-.39 1.1-1.932 2.013-3.175 2.28-.852.18-1.964.324-5.709-1.227-4.795-1.986-7.882-6.853-8.12-7.172-.23-.319-1.927-2.567-1.927-4.894s1.22-3.472 1.653-3.948c.39-.432 1.036-.648 1.654-.648.2 0 .38.01.541.019.433.019.65.043.936.722.358.852 1.228 2.994 1.336 3.213.11.219.219.516.068.816-.143.308-.268.497-.487.764-.219.267-.428.472-.647.759-.2.248-.424.515-.176.948.248.432 1.104 1.82 2.37 2.948 1.631 1.452 3.004 1.904 3.436 2.113.432.21.685.176.936-.105.26-.29 1.104-1.285 1.396-1.727.284-.443.576-.367.964-.22.39.148 2.472 1.167 2.896 1.38.424.218.706.324.814.504.104.181.104 1.052-.286 2.15Z" />
  </svg>
);

/** Capitaliza a primeira letra de cada palavra */
function capitalizeWords(value: string): string {
  return value.replace(/\b\w/g, (char) => char.toUpperCase());
}

/** Aplica máscara de telefone: (XX) X XXXX-XXXX */
function phoneMask(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits.length ? `(${digits}` : "";
  if (digits.length <= 3) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits[2]} ${digits.slice(3)}`;
  return `(${digits.slice(0, 2)}) ${digits[2]} ${digits.slice(3, 7)}-${digits.slice(7)}`;
}

function extractDigits(masked: string): string {
  return masked.replace(/\D/g, "");
}

const WhatsAppModal = () => {
  const { isOpen, close } = useWhatsAppModal();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [sending, setSending] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setName("");
      setPhone("");
      setNameError("");
      setPhoneError("");
      setSending(false);
    }
  }, [isOpen]);

  // close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    if (isOpen) window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, close]);

  // close on backdrop click
  const handleBackdrop = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      close();
    }
  };

  const validate = (): boolean => {
    let valid = true;
    const trimmed = name.trim();
    const words = trimmed.split(/\s+/).filter(Boolean);
    if (words.length < 2) {
      setNameError("Envie seu nome completo");
      valid = false;
    } else {
      setNameError("");
    }

    const digits = extractDigits(phone);
    if (digits.length < 11) {
      setPhoneError("Insira um número válido com DDD");
      valid = false;
    } else {
      setPhoneError("");
    }

    return valid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSending(true);
    const payload = {
      nome: name.trim(),
      whatsapp: extractDigits(phone),
    };

    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        mode: "no-cors",
      });
    } catch {
      // fail silently – still redirect
    }

    // Redirect to WhatsApp
    const msg = `Olá! Meu nome é ${payload.nome}. Vim pelo site e quero fazer uma avaliação de meu imóvel.`;
    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
    setSending(false);
    close();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={handleBackdrop}
    >
      <div
        ref={modalRef}
        className="w-full max-w-md animate-in fade-in zoom-in-95 duration-200 rounded-2xl overflow-hidden shadow-2xl"
      >
        {/* Header – WhatsApp style */}
        <div className="flex items-center gap-3 bg-[#075E54] px-5 py-4">
          <WhatsAppIcon size={28} />
          <div className="flex-1">
            <p className="text-sm font-bold text-white">Andrade Missão Engenharia</p>
            <p className="text-xs text-white/70">Normalmente responde em minutos</p>
          </div>
          <button
            onClick={close}
            className="rounded-full p-1 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* Chat bubble area */}
        <div className="bg-[#ECE5DD] px-5 py-6">
          <div className="mb-4 max-w-[85%] rounded-xl rounded-tl-none bg-white px-4 py-3 shadow-sm">
            <p className="text-sm text-[#303030]">
              Olá! 👋 Para agilizar seu atendimento, informe seus dados abaixo:
            </p>
            <span className="mt-1 block text-right text-[10px] text-[#999]">agora</span>
          </div>
        </div>

        {/* Form area */}
        <form onSubmit={handleSubmit} className="bg-[#F0F0F0] px-5 py-5 space-y-4">
          <div>
            <label className="mb-1 block text-xs font-semibold text-[#555]">Seu nome completo</label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(capitalizeWords(e.target.value));
                if (nameError) setNameError("");
              }}
              placeholder="Ex: João da Silva"
              className={`w-full rounded-lg border bg-white px-4 py-3 text-sm text-[#303030] outline-none transition-colors placeholder:text-[#aaa] focus:ring-2 focus:ring-[#25D366] ${
                nameError ? "border-[#e74c3c]" : "border-[#ddd]"
              }`}
            />
            {nameError && <p className="mt-1 text-xs font-medium text-[#e74c3c]">{nameError}</p>}
          </div>

          <div>
            <label className="mb-1 block text-xs font-semibold text-[#555]">Seu WhatsApp</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => {
                setPhone(phoneMask(e.target.value));
                if (phoneError) setPhoneError("");
              }}
              placeholder="(14) 9 9668-1221"
              className={`w-full rounded-lg border bg-white px-4 py-3 text-sm text-[#303030] outline-none transition-colors placeholder:text-[#aaa] focus:ring-2 focus:ring-[#25D366] ${
                phoneError ? "border-[#e74c3c]" : "border-[#ddd]"
              }`}
            />
            {phoneError && <p className="mt-1 text-xs font-medium text-[#e74c3c]">{phoneError}</p>}
          </div>

          <button
            type="submit"
            disabled={sending}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3.5 text-base font-bold text-white shadow-md transition-all hover:bg-[#20bd5a] disabled:opacity-60"
          >
            <Send size={18} />
            {sending ? "Enviando..." : "Enviar e abrir WhatsApp"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default WhatsAppModal;
