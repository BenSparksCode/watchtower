import React from 'react'
import { connect } from 'react-redux'

import { } from '../../actions'

import './Footer.scss'

class Footer extends React.Component {
    render() {
        return (
            <footer >
                <div className="footerContainer bg-dark text-white">
                    <p className="footerText">Made by Ben Sparks</p>
                    <div className='socialLinksContainer'>
                        <a href="https://twitter.com/Nebbit123" target="_blank" class="fa fa-twitter fa-lg"></a>
                        <a href="https://www.linkedin.com/in/ben-sparks-a38a667a/" target="_blank" class="fa fa-linkedin fa-lg"></a>
                        <a href="https://www.instagram.com/bensparks0/" target="_blank" class="fa fa-instagram fa-lg"></a>
                    </div>
                </div>
            </footer>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {

    }
}

export default connect(
    mapStateToProps, {

})(Footer)