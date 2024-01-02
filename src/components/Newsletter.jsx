export function NewsletterForm() {
  return (
    <div id="mc_embed_shell">
      <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
      <div id="mc_embed_signup">
        <form
          action="https://xyz.us12.list-manage.com/subscribe/post?u=fd8b9656ded6234ae7833c6df&amp;id=1e4055162c&amp;f_id=00684be0f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
        >
          <div id="mc_embed_signup_scroll">
            <h2>Se abbiamo novità ti scriviamo?</h2>
            <div className="indicates-required">
              <span className="asterisk">*</span> campo obbligatorio
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">
                Email <span className="asterisk">*</span>
              </label>
              <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required="" value="" />
              <span id="mce-EMAIL-HELPERTEXT" className="helper_text"></span>
            </div>
            <div className="mc-field-group input-group">
              <strong>Formato email</strong>
              <ul>
                <li>
                  <input type="radio" name="EMAILTYPE" id="mce-EMAILTYPE0" value="html" checked="true" />
                  <label htmlFor="mce-EMAILTYPE0">html</label>
                </li>
                <li>
                  <input type="radio" name="EMAILTYPE" id="mce-EMAILTYPE1" value="text" />
                  <label htmlFor="mce-EMAILTYPE1">text</label>
                </li>
              </ul>
            </div>
            <p>
              <a href="https://us12.campaign-archive.com/home/?u=fd8b9656ded6234ae7833c6df&amp;id=1e4055162c">
                Vedi archivio.
              </a>
            </p>
            <div id="mce-responses" className="clear foot">
              <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
              <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
            </div>
            <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
              {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
              <input type="text" name="b_fd8b9656ded6234ae7833c6df_1e4055162c" tabIndex="-1" value="" />
            </div>
            <div className="optionalParent">
              <div className="clear foot">
                <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Invia" />
              </div>
            </div>
          </div>
        </form>
      </div>
      <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);`,
        }}
      ></script>
    </div>
  );
}
