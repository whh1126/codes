import React from 'react'
function Header(props) {
    const { title, price } = props.header
    return (
        <div>
            {
                <h3>
                    {title}
                    <p>{price}</p>
                </h3>
            }
        </div>
    );
}
export default Header;
