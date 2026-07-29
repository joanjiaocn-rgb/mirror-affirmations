import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <p className="eyebrow">Page not found</p>
      <h1>This practice page is not here.</h1>
      <p>Return to the private mirror demo or start from the homepage.</p>
      <div className="hero-actions">
        <Link className="primary-button" href="/demo">
          Open demo
        </Link>
        <Link className="secondary-button" href="/">
          Home
        </Link>
      </div>
    </section>
  );
}
