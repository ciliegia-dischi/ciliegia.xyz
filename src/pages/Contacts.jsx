function ContactLink(props) {
  return (
    <p>
      <a href={props.href}>
        {props.children}
      </a>
    </p>
  );
}

function ContactSeparator(props) {
  return (
    <span className="sep">
      •
    </span>
  );
}

function ContactList() {
  return (
    <div className="list">
      <ContactLink href="mailto:eventi@ciliegia.xyz">eventi</ContactLink>
      <ContactSeparator />
      <ContactLink href="mailto:crypto@ciliegia.xyz">x pagare in crypto</ContactLink>
      <ContactSeparator />
      <ContactLink href="mailto:cosenoiose@ciliegia.xyz?subject=Blah%20blah:">lamentele</ContactLink>
      <ContactSeparator />
      <ContactLink href="mailto:chiacchiere@ciliegia.xyz">feedback</ContactLink>
      <ContactSeparator />
      <ContactLink href="mailto:questapartenonimportatantoarrivanotutteallostessoindirizzo@ciliegia.xyz">altro</ContactLink>
    </div>
  );
}

export default function Contacts() {
  return (
    <section id="contacts">
      <div className="container">
        <div className="content">
          <ContactList />
          <ContactLink href="percondividere:eventi@ciliegia.xyz">per condividere quello che volete</ContactLink>
        </div>
      </div>
    </section>
  );
}