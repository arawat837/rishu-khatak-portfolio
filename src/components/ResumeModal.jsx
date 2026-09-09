import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, FileText, ZoomIn, ZoomOut, Check, ArrowDownToLine } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const ResumeModal = ({ isOpen, onClose }) => {
  const [zoomLevel, setZoomLevel] = useState(100);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-6 overflow-hidden">
        {/* Dark Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-ink-dark/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl h-[92vh] bg-surface border border-line rounded-3xl shadow-2xl flex flex-col overflow-hidden z-10"
          role="dialog"
          aria-modal="true"
          aria-label="Resume Document Viewer"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-line bg-surface-subtle/70">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-ink text-canvas flex items-center justify-center font-serif font-bold text-sm shadow-sm">
                RK
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-serif font-bold text-ink text-lg leading-none">
                    My Resume
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-accent-teal/10 text-accent-teal-dark border border-accent-teal/20">
                    PDF DOCUMENT
                  </span>
                </div>
                <span className="text-xs text-ink-muted">
                  Official candidate document • Rishu Khatak
                </span>
              </div>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full text-ink-muted hover:text-ink hover:bg-canvas border border-transparent hover:border-line transition-all focus:outline-none"
              aria-label="Close Resume Viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* PDF Viewer Body */}
          <div className="flex-1 bg-[#2C343D] relative overflow-hidden flex flex-col items-center justify-center p-2 sm:p-4">
            <iframe
              src={`${personalInfo.pdfUrl}#view=FitH&toolbar=0&navpanes=0`}
              title="Rishu Khatak Resume PDF"
              className="w-full h-full rounded-xl bg-white shadow-lift border-0 transition-transform duration-200"
              style={{
                maxWidth: zoomLevel === 100 ? '900px' : zoomLevel === 120 ? '1080px' : '750px',
              }}
            />
          </div>

          {/* Footer Toolbar */}
          <div className="px-6 py-4 border-t border-line bg-surface flex flex-wrap items-center justify-between gap-4">
            {/* Zoom Controls (Desktop) */}
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-ink-muted">
              <span>Zoom:</span>
              <button
                type="button"
                onClick={() => setZoomLevel(Math.max(80, zoomLevel - 20))}
                className="p-1.5 rounded-lg bg-canvas border border-line hover:border-ink/30 text-ink"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="w-12 text-center font-medium">{zoomLevel}%</span>
              <button
                type="button"
                onClick={() => setZoomLevel(Math.min(120, zoomLevel + 20))}
                className="p-1.5 rounded-lg bg-canvas border border-line hover:border-ink/30 text-ink"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Actions: Download PDF, DOCX, Open in New Tab */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-end flex-wrap">
              <a
                href={personalInfo.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-canvas border border-line text-xs font-medium text-ink hover:bg-surface-subtle transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-accent-teal" />
                <span>Open in New Tab</span>
              </a>

              <a
                href={personalInfo.docxUrl}
                download="Resume-Rishu.docx"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-canvas border border-line text-xs font-medium text-ink-muted hover:text-ink hover:bg-surface-subtle transition-colors"
                title="Download original DOCX format"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Download DOCX</span>
              </a>

              <a
                href={personalInfo.pdfUrl}
                download="Resume-Rishu.pdf"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-ink text-canvas text-xs font-medium tracking-wide shadow-sm hover:bg-ink-dark transition-all group"
              >
                <Download className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-y-0.5" />
                <span className="font-semibold">Download PDF ↓</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
