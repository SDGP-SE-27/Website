import { motion } from "framer-motion";
import { XIcon, CircleIcon } from "lucide-react";

interface FeaturePopUpProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function FeaturePopUp({
  isOpen,
  onClose,
  title,
  description,
  icon,
}: FeaturePopUpProps) {
  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scaleX: 0.8, rotateY: 90 }}
            animate={{ opacity: 1, scaleX: 1, rotateY: 1 }}
            exit={{ opacity: 0, scaleX: 0.8, rotateY: 90 }}
            transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
            className="w-full max-w-2xl mx-auto px-4"
          >
            <div className="bg-[#1a1a1a] backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <XIcon className="w-6 h-6" />
              </button>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 transform transition-transform group-hover:scale-110 duration-300">
                  {icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-[#e1e1e1]">
                    {title}
                  </h3>
                  <div className="text-gray-400 leading-relaxed whitespace-pre-line space-y-4">
                    {description.split("\n").map((paragraph, index) => (
                      <p key={index} className="mb-1">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
