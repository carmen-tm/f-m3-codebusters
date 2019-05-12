import React from 'react';


class Panel extends React.Component {
    render() {
        return (
            <section class="fieldset__title__container">
                {this.props.children}
            </section >
        )
    }
}

export default Panel;