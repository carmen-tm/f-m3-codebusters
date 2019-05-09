import React from 'react';


class Legend extends React.Component {
    render() {
        return (
            <section class="fieldset__title__container">
                <div class="icon-legend__container">
                    <i class="@@icon icon--fieldset"></i>
                    <legend class="fieldset__title">{this.props.legend}</legend>
                </div>
                <button type="button" class="btn--collapsable" id="@@buttonId">
                    <i id="@@nameId" class="fas fa-chevron-@@upDown arrow"></i>
                </button >
            </section >
        )
    }
}

export default Legend;