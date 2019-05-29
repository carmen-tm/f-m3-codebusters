import React from 'react';

class PanelShare extends React.Component {
  render () {
    const {btnShare, urlCard, messageError, success} = this.props;
    const shareTwitterLink =
      'https://twitter.com/intent/tweet?text=My awesome profile card: ' +
      urlCard;
    console.log (shareTwitterLink);
    return (


      <section id="section-share" className="section-share close">




        <button type="button" className="btn btn-share" onClick={btnShare}>
          <i className="far fa-address-card icon-btn" /> Create your card
        </button>
        <p className="response">{success ? urlCard : messageError}</p>
        <a
          href={shareTwitterLink}
          className={
            success
              ? 'twitter__link btn-twitter'
              : 'twitter__link btn-twitter hidden'
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter twitter-icon" />
          Share on Twitter
        </a>
      </section>
    );
  }
}

export default PanelShare;
