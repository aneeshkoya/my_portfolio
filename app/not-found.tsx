import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-tight">
      <div className="container max-w-3xl">
        <p className="eyebrow">404</p>
        <h1 className="display-heading mt-4">This page is not available.</h1>
        <p className="lead mt-6">The route may have moved, or the placeholder link may not be configured yet.</p>
        <Link className="button button-primary mt-8" href="/">
          Return Home
        </Link>
      </div>
    </section>
  );
}
