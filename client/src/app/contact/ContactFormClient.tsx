'use client';

import { useMemo, useRef, useState } from 'react';
import { CACBLAZE_EVENT_EXAMPLES, trackEvent } from '@/lib/analytics';

interface ContactFormClientProps {
  reason?: string;
}

export default function ContactFormClient({ reason = 'general' }: ContactFormClientProps) {
  const isContributorFlow = reason === 'contribute';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: isContributorFlow ? 'Contributor Application' : 'General Inquiry',
    message: '',
  });
  const hasTrackedStartRef = useRef(false);

  const subjectOptions = useMemo(
    () =>
      isContributorFlow
        ? ['Contributor Application', 'Topic Pitch', 'Editorial Review', 'Partnership']
        : ['General Inquiry', 'Feedback', 'Report an Issue', 'Partnership'],
    [isContributorFlow]
  );

  const trackStartIfNeeded = () => {
    if (hasTrackedStartRef.current) {
      return;
    }

    hasTrackedStartRef.current = true;

    if (isContributorFlow) {
      CACBLAZE_EVENT_EXAMPLES.contributorApplicationStarted({
        cta_location: 'contact_page',
        section_name: 'contact_form',
        contributor_interest_area: formData.subject,
      });
    } else {
      trackEvent('contact_form_started', {
        page_type: 'contact',
        section_name: 'contact_form',
        cta_location: 'contact_page',
      });
    }
  };

  const handleChange = (field: 'name' | 'email' | 'subject' | 'message', value: string) => {
    trackStartIfNeeded();

    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (field === 'subject') {
      trackEvent(isContributorFlow ? 'contributor_interest_selected' : 'contact_subject_selected', {
        page_type: isContributorFlow ? 'contributor' : 'contact',
        section_name: 'contact_form',
        contributor_interest_area: isContributorFlow ? value : undefined,
        content_type: isContributorFlow ? 'contributor_application' : 'contact_request',
      });
    }
  };

  const handleSubmitClick = () => {
    const baseParams = {
      section_name: 'contact_form',
      cta_location: 'contact_page',
      content_type: isContributorFlow ? 'contributor_application' : 'contact_request',
    };

    const isValid = Boolean(
      formData.name.trim() && formData.email.trim() && formData.message.trim()
    );

    trackEvent(
      isContributorFlow ? 'contributor_application_submit_click' : 'contact_form_submit_click',
      {
        page_type: isContributorFlow ? 'contributor' : 'contact',
        contributor_interest_area: isContributorFlow ? formData.subject : undefined,
        form_valid: isValid,
        ...baseParams,
      }
    );

    if (isValid && isContributorFlow) {
      CACBLAZE_EVENT_EXAMPLES.contributorApplicationSubmitted({
        cta_location: 'contact_page',
        section_name: 'contact_form',
        contributor_interest_area: formData.subject,
      });
    }

    if (isValid && !isContributorFlow) {
      trackEvent('contact_form_ready_for_submission', {
        page_type: 'contact',
        section_name: 'contact_form',
        cta_location: 'contact_page',
        content_type: 'contact_request',
      });
    }
  };

  return (
    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        {isContributorFlow ? 'Apply to Contribute' : 'Send us a message'}
      </h2>
      <p className="text-sm text-gray-600 mb-8">
        {isContributorFlow
          ? 'Tell CACBLAZE what you can contribute and which subject areas you know deeply.'
          : 'Use this form for questions, feedback, partnerships, or support-related inquiries.'}
      </p>
      <form className="space-y-6" onSubmit={(event) => event.preventDefault()}>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(event) => handleChange('name', event.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(event) => handleChange('email', event.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              placeholder="john@example.com"
            />
          </div>
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            {isContributorFlow ? 'Primary Interest Area' : 'Subject'}
          </label>
          <select
            id="subject"
            value={formData.subject}
            onChange={(event) => handleChange('subject', event.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
          >
            {subjectOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            {isContributorFlow ? 'Why you want to contribute' : 'Message'}
          </label>
          <textarea
            id="message"
            rows={6}
            value={formData.message}
            onChange={(event) => handleChange('message', event.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
            placeholder={
              isContributorFlow
                ? 'Share your expertise, topic focus, and editorial strengths.'
                : 'How can we help you?'
            }
          ></textarea>
        </div>
        <button
          type="button"
          onClick={handleSubmitClick}
          className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
        >
          {isContributorFlow ? 'Submit Contributor Interest' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}
