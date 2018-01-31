import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';

class NavBar extends PureComponent {
    static propTypes = {
        title: PropTypes.string.isRequired,
        onLeftIconButtonClick:PropTypes.func.isRequired,
        onRightIconButtonClick: PropTypes.func.isRequired,
        onTitleClick:PropTypes.func.isRequired
    };

    render() {
        const { title, onLeftIconButtonClick, onRightIconButtonClick, onTitleClick } = this.props;
        return (
            <AppBar 
                title={title} 
                iconElementRight={ <IconButton><MoreVertIcon /></IconButton>}
                onTitleTouchTap={onTitleClick}
                onLeftIconButtonTouchTap={onLeftIconButtonClick}
                onRightIconButtonTouchTap={onRightIconButtonClick}
                />
        );
    }
}

export default NavBar;
