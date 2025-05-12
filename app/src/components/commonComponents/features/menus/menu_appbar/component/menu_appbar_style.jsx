function newFunction() {
    return {
        header: {
            borderBottom: "1px solid #ddd",
            backgroundColor: "#ffffff",
            padding: "4px 0",
            height: "36px",
            display: "flex",
            alignItems: "center"
        },
        headerContainer: {
            display: "flex",
            alignItems: "center",
            width: "100%",
            padding: "0 8px"
        },
        menuGroup: {
            display: "flex",
            gap: "12px"
        },
        menuButton: {
            fontSize: "14px",
            padding: "6px 10px",
            color: "#6B7280",
            backgroundColor: "transparent",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "4px"
        },
        menuButtonHover: {
            backgroundColor: "#e5e7eb"
        },
        dropdownMenu: {
            padding: "4px 0",
            backgroundColor: "#ffffff",
            border: "1px solid #ddd",
            borderRadius: "4px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            minWidth: "220px",
            zIndex: 1000,
            position: "absolute",
            top: "36px"
        },
        dropdownItem: {
            fontSize: "14px",
            padding: "8px 12px",
            color: "#6B7280",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            textDecoration: "none",
            cursor: "pointer",
            borderBottom: "1px solid #eee"
        },
        dropdownItemLast: {
            borderBottom: "none"
        },
        submenu: {
            position: "absolute",
            left: "100%",
            top: "0",
            backgroundColor: "#ffffff",
            border: "1px solid #ddd",
            borderRadius: "4px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            minWidth: "180px",
            padding: "4px 0",
            marginLeft: "2px",
            zIndex: 1001
        },
        submenuItem: {
            fontSize: "14px",
            padding: "8px 12px",
            color: "#6B7280",
            display: "block",
            textDecoration: "none",
            borderBottom: "1px solid #eee"
        },
        submenuItemLast: {
            borderBottom: "none"
        },
        icon: {
            fontSize: "16px",
            marginRight: "8px"
        }
    };
}
