import { useFormStatus } from 'react-dom';

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex h-12 items-center gap-3 bg-ink px-7 font-mono text-xs uppercase tracking-[0.18em] text-paper transition-all hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal disabled:cursor-not-allowed disabled:opacity-50"
    >
      {pending ? (
        <span className="h-4 w-4 animate-spin rounded-full border border-paper border-t-transparent"></span>
      ) : (
        'Send message →'
      )}
    </button>
  );
}
