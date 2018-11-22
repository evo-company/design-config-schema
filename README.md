# @evo/design-config-schema

This package specifies JSON schema for design settings. Such as: colors, background colors, fonts and icons of particular elements of design.

JSON schema should used to annotate and validate design settings which are presented as a JSON document.

To learn more about JSON schema see [json-schema.org](https://json-schema.org)

### Example of design settings

<details><summary>Click to view</summary>

```json
{
  "basic": {
    "externalFontFamily": "https://fonts.googleapis.com/css?family=Ubuntu:400,400i,700,700i&amp;subset=cyrillic",
    "fontFamily": "Ubuntu, sans-serif",
    "themePrimaryColor": "#35A4A9",
    "themeSecondaryColor": "#3882BF",
    "backgroundColor": "#DFDCE3",
    "textColor": "#333",
    "linkColor": "#3882BF",
    "linkHoverColor": "#2F619D"
  },
  "promoPanel": {
    "textColor": "#ffffff",
    "backgroundColor": "#3882BF",
    "button": {
      "textColor": "#ffffff",
      "borderColor": "#ffffff",
      "backgroundColor": "#3882BF"
    }
  },
  "title": {
    "fontFamily": "Ubuntu, sans-serif",
    "textColor": "#333",
    "backgroundColor": "#FFF"
  },
  "buyButton": {
    "fontFamily": "Ubuntu, sans-serif",
    "icon": {
      "file": "",
      "color": "#ffffff",
      "hoverColor": "#ffffff"
    },
    "textColor": "#ffffff",
    "textHoverColor": "#ffffff",
    "backgroundColor": "#5E4DC7",
    "backgroundHoverColor": "#4e3cbf",
    "iconActive": {
      "file": "",
      "color": "#ffffff",
      "hoverColor": "#ffffff"
    },
    "backgroundActiveColor": "#746ba8",
    "textActiveColor": "#ffffff",
    "iconContactUs": {
      "file": "",
      "color": "#ffffff",
      "hoverColor": "#ffffff"
    }
  },
  "header": {
    "textColor": "#333",
    "backgroundColor": "#F2F1F3"
  },
  "slider": {
    "navigation": {
      "backgroundColor": "#FFF",
      "backgroundActiveColor": "#35A4A9"
    },
    "arrowPrev": {
      "icon": {
        "file": "",
        "color": "#333",
        "hoverColor": "#ffffff"
      },
      "backgroundColor": "#FFF",
      "backgroundHoverColor": "#35A4A9"
    },
    "arrowNext": {
      "icon": {
        "file": "",
        "color": "#333",
        "hoverColor": "#ffffff"
      },
      "backgroundColor": "#FFF",
      "backgroundHoverColor": "#35A4A9"
    }
  },
  "sidebar": {
    "textColor": "#333",
    "backgroundColor": "#FFF",
    "linkColor": "#3882BF",
    "linkHoverColor": "#3275ab",
    "title": {
      "fontFamily": "Ubuntu, sans-serif",
      "textColor": "#333",
      "backgroundColor": "#FFF"
    }
  },
  "horizontalMenu": {
    "textColor": "#333",
    "backgroundColor": "#FFF"
  },
  "verticalMenu": {
    "textColor": "#333",
    "backgroundColor": "#FFF"
  },
  "hamburgerMenu": {
    "textColor": "#333",
    "backgroundColor": "#FFF",
    "hamburger": {
      "icon": {
        "file": "",
        "color": "#333"
      }
    },
    "search": {
      "icon": {
        "file": "",
        "color": "#333"
      }
    },
    "phone": {
      "icon": {
        "file": "",
        "color": "#333"
      }
    },
    "cart": {
      "icon": {
        "file": "",
        "color": "#333"
      }
    }
  },
  "groupItem": {
    "backgroundColor": "#FFF",
    "title": {
      "textColor": "#333"
    },
    "counter": {
      "textColor": "#333"
    }
  },
  "catalogItem": {
    "backgroundColor": "#FFF",
    "title": {
      "textColor": "#333"
    },
    "price": {
      "textColor": "#333"
    },
    "oldPrice": {
      "textColor": "rgba(51, 51, 51, 0.85)"
    },
    "label": {
      "textColor": "#ffffff",
      "backgroundColor": "#35A4A9"
    },
    "stateAvailable": {
      "textColor": "#009A00"
    },
    "stateClarify": {
      "textColor": "#C10000"
    },
    "stateOrder": {
      "textColor": "#CC0A91"
    },
    "gift": {
      "icon": {
        "file": "",
        "color": "#ffffff"
      }
    },
    "timer": {
      "icon": {
        "file": "",
        "color": "#ffffff"
      }
    }
  },
  "portfolioItem": {
    "textColor": "rgba(51, 51, 51, 0.85)",
    "backgroundColor": "#FFF",
    "title": {
      "textColor": "#333"
    }
  },
  "userContent": {
    "textColor": "#333",
    "backgroundColor": "#FFF",
    "linkColor": "#3882BF",
    "linkHoverColor": "#3275ab"
  },
  "navigationLink": {
    "fontFamily": "Ubuntu, sans-serif",
    "textColor": "#3882BF",
    "textHoverColor": "#2F619D",
    "backgroundColor": "#FFF",
    "backgroundHoverColor": "#FFF",
    "icon": {
      "file": "",
      "color": "#3882BF",
      "hoverColor": "#2F619D"
    }
  },
  "footer": {
    "textColor": "#ffffff",
    "backgroundColor": "#333",
    "linkColor": "#ffffff",
    "linkHoverColor": "#2F619D"
  },
  "socialNetwork": {
    "facebook": {
      "icon": {
        "file": "",
        "color": "#fff",
        "hoverColor": "#fff"
      }
    },
    "instagram": {
      "icon": {
        "file": "",
        "color": "#fff",
        "hoverColor": "#fff"
      }
    },
    "odnoklassniki": {
      "icon": {
        "file": "",
        "color": "#fff",
        "hoverColor": "#fff"
      }
    },
    "pinterest": {
      "icon": {
        "file": "",
        "color": "#fff",
        "hoverColor": "#fff"
      }
    },
    "tumblr": {
      "icon": {
        "file": "",
        "color": "#fff",
        "hoverColor": "#fff"
      }
    },
    "twitter": {
      "icon": {
        "file": "",
        "color": "#fff",
        "hoverColor": "#fff"
      }
    },
    "vkontakte": {
      "icon": {
        "file": "",
        "color": "#fff",
        "hoverColor": "#fff"
      }
    },
    "youtube": {
      "icon": {
        "file": "",
        "color": "#fff",
        "hoverColor": "#fff"
      }
    }
  }
}
```

</details>

