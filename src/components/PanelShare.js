import React from 'react';

class PanelShare extends React.Component{
  render(){
    return(
      <section id="section-share" className="section-share">
        <button type="button" className="btn btn-share" onClick={this.props.btnShare}><i className="far fa-address-card icon-btn"></i> Create your card</button>
        <p className="response">{this.props.urlCard}</p>
        <a href="" className={this.props.twitter ? "twitter__link btn-twitter" : "twitter__link btn-twitter hidden"}>
            <i className="fab fa-twitter twitter-icon"></i>
            Share on Twitter
        </a>
    </section>
    )
  }

}

export default PanelShare;