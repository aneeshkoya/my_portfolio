"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <section className="section-tight">
      <div className="container max-w-3xl">
        <p className="eyebrow">Error</p>
        <h1 className="display-heading mt-4">Something went wrong.</h1>
        <p className="lead mt-6">Please retry the page. If it persists, check the deployment logs.</p>
        <button className="button button-primary mt-8" type="button" onClick={reset}>
          Retry
        </button>
      </div>
    </section>
  );
}
