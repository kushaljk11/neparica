'use client';

import React, { useState } from 'react';
import { SERVICES } from '@/data/services';
import { SOLUTIONS } from '@/data/solutions';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    honeypot: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to submit form. Please check your inputs.');
      } else {
        setStatus('success');
        setSuccessMessage(data.message || 'Your inquiry has been successfully sent!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
          honeypot: ''
        });
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network connection error. Please try again or call us directly.');
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-[#E5E9EF] p-7 sm:p-10 shadow-lg">
      <h3 className="text-2xl font-bold text-[#141820] mb-2">
        Send Us a Message
      </h3>
      <p className="text-sm text-[#647080] mb-6">
        Fill out the form below and an IT consultant from our Chicago team will respond within 24 hours.
      </p>

      {status === 'success' && (
        <div className="mb-6 p-5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <div className="font-semibold text-sm">Message Sent Successfully</div>
            <div className="text-xs sm:text-sm mt-0.5">{successMessage}</div>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="mb-6 p-5 rounded-xl bg-red-50 border border-red-200 text-red-800 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div>
            <div className="font-semibold text-sm">Submission Error</div>
            <div className="text-xs sm:text-sm mt-0.5">{errorMessage}</div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Anti-spam honeypot */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="honeypot">Leave blank</label>
          <input
            type="text"
            id="honeypot"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-[#141820] uppercase tracking-wider mb-1.5">
            Full Name <span className="text-[#A31718]">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. John Doe"
            className="w-full px-4 py-2.5 rounded-lg border border-[#E5E9EF] bg-white text-sm text-[#141820] placeholder-[#9BAAAA] focus:outline-none focus:ring-2 focus:ring-[#0F3A5F]/20 focus:border-[#0F3A5F] transition-all"
          />
        </div>

        {/* Grid for Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-[#141820] uppercase tracking-wider mb-1.5">
              Email Address <span className="text-[#A31718]">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@company.com"
              className="w-full px-4 py-2.5 rounded-lg border border-[#E5E9EF] bg-white text-sm text-[#141820] placeholder-[#9BAAAA] focus:outline-none focus:ring-2 focus:ring-[#0F3A5F]/20 focus:border-[#0F3A5F] transition-all"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-semibold text-[#141820] uppercase tracking-wider mb-1.5">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(630) 000-0000"
              className="w-full px-4 py-2.5 rounded-lg border border-[#E5E9EF] bg-white text-sm text-[#141820] placeholder-[#9BAAAA] focus:outline-none focus:ring-2 focus:ring-[#0F3A5F]/20 focus:border-[#0F3A5F] transition-all"
            />
          </div>
        </div>

        {/* Service / Solution of Interest */}
        <div>
          <label htmlFor="service" className="block text-xs font-semibold text-[#141820] uppercase tracking-wider mb-1.5">
            Service or Solution of Interest
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg border border-[#E5E9EF] bg-white text-sm text-[#141820] focus:outline-none focus:ring-2 focus:ring-[#0F3A5F]/20 focus:border-[#0F3A5F] transition-all"
          >
            <option value="">Select an area of interest...</option>
            <optgroup label="IT Services">
              {SERVICES.map((s) => (
                <option key={s.slug} value={s.title}>
                  {s.title}
                </option>
              ))}
            </optgroup>
            <optgroup label="Software Solutions">
              {SOLUTIONS.map((s) => (
                <option key={s.slug} value={s.title}>
                  {s.title}
                </option>
              ))}
            </optgroup>
            <option value="General Consultation">General IT Consultation</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-[#141820] uppercase tracking-wider mb-1.5">
            Project Overview or Message <span className="text-[#A31718]">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your business goals, timeline, and current technical challenges..."
            className="w-full px-4 py-2.5 rounded-lg border border-[#E5E9EF] bg-white text-sm text-[#141820] placeholder-[#9BAAAA] focus:outline-none focus:ring-2 focus:ring-[#0F3A5F]/20 focus:border-[#0F3A5F] transition-all"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full py-3 px-6 rounded-lg bg-[#0F3A5F] text-white font-semibold text-sm hover:bg-[#0a2740] shadow-sm hover:shadow transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer active:scale-[0.99]"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Sending Message...</span>
              </>
            ) : (
              <>
                <span>Submit Inquiry</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
