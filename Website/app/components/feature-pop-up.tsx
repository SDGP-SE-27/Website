"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Fragment } from "react";

interface FeaturePopUpProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export function FeaturePopUp({
  isOpen,
  onClose,
  title,
  description,
  icon,
}: FeaturePopUpProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <Fragment>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/25 z-50"
            onClick={onClose}
          />
          <div className="fixed inset-0 overflow-y-auto z-50">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full max-w-md transform overflow-hidden rounded-2xl bg-black p-6 text-left align-middle shadow-xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex flex-col gap-2 mb-7 mt-3">
                  <div className="mb-1 flex items-center gap-2">
                    <div className="h-8 flex items-center transform transition-transform duration-300">
                      {icon}
                    </div>
                    <h3 className="text-2xl leading-8 text-white flex-shrink-0">
                      {title}
                    </h3>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-base text-gray-500 whitespace-pre-line">
                    {description}
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={onClose}
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </Fragment>
      )}
    </AnimatePresence>
  );
}
