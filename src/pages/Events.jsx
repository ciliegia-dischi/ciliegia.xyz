import { NewsletterForm } from '../components/Newsletter.jsx';

function NessunEvento() {
  return (
    <div className="item">
      <p>
        Non ci sono eventi in programma al momento.
      </p>
    </div>
  );
}

export default function Events() {
  return (
    <section id="events">
      <div className="container">
        <div className="content">
          <div className="card-grid">
            <NessunEvento />
          </div>
        </div>
        <NewsletterForm />
      </div>
    </section>
  );
}
