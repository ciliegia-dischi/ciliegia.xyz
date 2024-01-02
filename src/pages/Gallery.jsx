import React from 'react';

let galleryItems = {}
galleryItems['misc'] = toMap(require.context('../../public/img/gallery/misc/', false, /\.(png|jpe?g|webp|gif|tiff)$/));

function toMap(ctx) {
  return ctx.keys().map(ctx);
}

function GalleryItem(props) {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });

    const curDom = domRef.current;
    observer.observe(curDom);
    return () => observer.unobserve(curDom);
  }, []);

  return (
    <div key={props.key}
         className={"item " + (isVisible ? 'is-visible' : '')}
         style={{backgroundImage: "url('" + props.src + "')"}}
         ref={domRef} />
  );
}

function Gallery(props) {
  const imagesDir = galleryItems[props.section];

  return(
    <div className="card-grid">
      {
        imagesDir.map((image, index) => (
          <GalleryItem key={index} src={image} />
        ))
      }
    </div>
  )
}

export default function Music() {
  return (
    <section id="gallery">
      <div className="container">
        <div className="content">
          <Gallery section="misc" />
        </div>
      </div>
    </section>
  );
}
