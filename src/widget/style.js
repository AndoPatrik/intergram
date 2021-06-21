
export const desktopWrapperStyle = {
    position: 'fixed',
    bottom: '0px',
    right: '20px',
    zIndex: 2147483647,
    borderRadius: '0.25rem',
    border: '2px solid lightgray',
    borderBottomLeftRadius: '0px',
    borderBottomRightRadius: '0px',
    borderBottom: 'none',
    background: 'rgb(229, 229, 229)',
    boxSizing: 'content-box',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    overflow: 'hidden'
};

export const desktopClosedWrapperStyleChat = {
    position: 'fixed',
    bottom: '0px',
    right: '0px',
    zIndex: 2147483647,
    minWidth: '400px',
    boxSizing: 'content-box',
    overflow: 'hidden',
    minHeight: '120px'
};

export const mobileClosedWrapperStyle = {
    position: 'fixed',
    bottom: 18,
    right: 18,
    zIndex: 2147483647,
    borderRadius: '50%',
    background: 'rgb(229, 229, 229)',
    boxSizing: 'content-box'
};

export const mobileOpenWrapperStyle = {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 2147483647,
    width: '100%',
    height: '100%',
    background: 'rgb(229, 229, 229)',
    overflowY: 'visible',
    boxSizing: 'content-box'
};

export const desktopTitleStyle = {
    height: '40px',
    lineHeight: '30px',
    fontSize: '20px',
    display: 'flex',
    borderRadius: '0.25rem',
    borderBottomLeftRadius: '0px',
    borderBottomRightRadius: '0px',
    borderBottom: '2px solid lightgray',
    justifyContent: 'space-between',
    padding: '3px 10px 0px 10px',
    fontFamily: 'Lato, sans-serif',
    color: 'gray',
    cursor: 'pointer',
};

export const mobileTitleStyle = {
    height: 52,
    width: 52,
    cursor: 'pointer',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    webkitBoxShadow: '1px 1px 4px rgba(101,119,134,.75)',
    boxShadow: '1px 1px 4px rgba(101,119,134,.75)'
};
