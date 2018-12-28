# @evo/design-config-schema

This package specifies JSON schema for design settings. Such as: colors, background colors, fonts and icons of particular elements of design.

JSON schema should used to annotate and validate design settings which are presented as a JSON document.

To learn more about JSON schema see [json-schema.org](https://json-schema.org)

### Example of design settings

<details><summary>Click to view</summary>

```json
{
  "fonts": {
    "googleFontUrl": "https://fonts.googleapis.com/css?family=Ubuntu:400,400i,700,700i&amp;subset=cyrillic",
    "fontFamily": "Ubuntu, sans-serif"
  },
  "colors": {
    "linkColor": "#ed5e5e",
    "siteBackgroundColor": "#bd10e0",
    "headerBackgroundColor": "#4a90e2",
    "labelBackgroundColor": "#50e3c2",
    "buttonBackgroundColor": "#f5a623",
    "menuBackgroundColor": "#d0021b",
    "menuColor": "#b8e986",
    "promoBackgroundColor": "#f5a623",
    "promoColor": "#f5f5f5"
  },
  "icons": {
    "hamburger": "",
    "search": "",
    "basket": "",
    "telephone": "",
    "categories": "",
    "novelties": "",
    "discounts": "",
    "gift": "",
    "timer": "",
    "cart": "",
    "inCart": "",
    "mail": "",
    "phone": "",
    "back": "",
    "loadMore": "",
    "arrowRight": "",
    "arrowUp": "",
    "arrowDown": "",
    "listView": "",
    "galleryView": "",
    "largeView": "",
    "noImage": ""
  }
}
```

</details>

