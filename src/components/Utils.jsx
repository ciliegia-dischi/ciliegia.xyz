export function Link(props) {
  if (props.href === "") {
    return ( // eslint-disable-next-line
      <a disabled>{props.children}</a>
    );
  } else if (props.href) {
    return (
      <a href={props.href}
         target={props.href.startsWith("http") ? "_blank" : "_self"}
         rel="noopener noreferrer">
        {props.children}
      </a>
    );
  }
}

export function VideoEmbed(props) {
  return (
    <iframe src={props.src}
            title={props.title}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen />
  );
}
