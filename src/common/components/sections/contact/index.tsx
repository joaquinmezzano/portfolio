'use client';

import toast from 'react-hot-toast';

import Reveal from '@/common/components/shared/reveal';
import { siteMeta } from '@/common/lib/data';
import { useSectionInView } from '@/common/lib/hooks';
import { sendEmail } from '@/common/utils/actions/send-email';

import SubmitBtn from './_components/submit-btn';

export default function Contact() {
  const { ref } = useSectionInView('contact');

  return (
    <section id="contact" ref={ref} className="page-section scroll-mt-20">
      <div className="page-wrap">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <Reveal className="md:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-silk">
              ## 05 · contact
            </p>
            <h2 className="mt-6 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
              Send a note
            </h2>
            <p className="mt-5 max-w-sm leading-relaxed text-silk">
              Hiring for an internship or a junior role, or just want to talk
              code? I read everything I get. The form goes straight to my inbox.
            </p>

            <dl className="mt-8 border-t border-rule font-mono text-sm">
              <div className="flex gap-4 border-b border-rule py-3">
                <dt className="shrink-0 text-silk">email</dt>
                <dd className="text-ink">{siteMeta.email}</dd>
              </div>
              <div className="flex gap-4 border-b border-rule py-3">
                <dt className="shrink-0 text-silk">github</dt>
                <dd>
                  <a
                    href={siteMeta.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-signal underline decoration-signal/40 underline-offset-4 transition-colors hover:decoration-signal"
                  >
                    @joaquinmezzano ↗
                  </a>
                </dd>
              </div>
              <div className="flex gap-4 border-b border-rule py-3">
                <dt className="shrink-0 text-silk">cv</dt>
                <dd>
                  <a
                    href={siteMeta.cv}
                    download
                    className="text-ink underline decoration-silk/40 underline-offset-4 transition-colors hover:decoration-ink"
                  >
                    download pdf ↓
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={0.05} className="md:col-span-7">
            <form
              className="flex flex-col"
              action={async (formData) => {
                const { error } = await sendEmail(formData);

                if (error) {
                  toast.error(error);
                  return;
                }

                toast.success('Email sent successfully!');
              }}
            >
              <label
                htmlFor="senderEmail"
                className="font-mono text-xs uppercase tracking-[0.18em] text-silk"
              >
                your email
              </label>
              <input
                id="senderEmail"
                name="senderEmail"
                type="email"
                required
                maxLength={500}
                placeholder="you@example.com"
                className="mt-2 border-b border-rule bg-transparent py-3 font-body text-lg text-ink outline-none transition-colors placeholder:text-silk/60 focus:border-signal"
              />
              <label
                htmlFor="message"
                className="mt-10 font-mono text-xs uppercase tracking-[0.18em] text-silk"
              >
                your message
              </label>
              <textarea
                id="message"
                name="message"
                required
                maxLength={5000}
                rows={6}
                placeholder="What are you building?"
                className="mt-2 resize-none border-b border-rule bg-transparent py-3 font-body text-lg text-ink outline-none transition-colors placeholder:text-silk/60 focus:border-signal"
              />
              <div className="mt-10">
                <SubmitBtn />
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
