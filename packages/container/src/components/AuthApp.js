import { mount } from 'auth/AuthApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default ({ onSignIn }) => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            initialPath: history.location.pathname,
            onNavigate: (pathname) => {
                const { pathname: containerPathname } = history.location;
                if (containerPathname !== pathname) {
                    history.push(pathname);
                }
            },
            onSignIn,
        });

        history.listen(({ pathname }) => {
            onParentNavigate({ pathname });
        });
    }, [onSignIn, history]);

    return (
        <div ref={ref} />
    )
};
