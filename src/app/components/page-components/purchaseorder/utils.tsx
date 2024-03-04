export const getPackingListTable: any = (data) => {
  const ratiopackcount = data[0].rationpacksize * 1 ?? 0;
  const odiv: any = gdiv([], {
    css: {
      display: "flex",
      border: "1px solid black",
    },
  });
  const cdivh = gdiv([], {
    css: {
      display: "flex",
      flexDirection: "column",
      flex: "1 1 35%",

      //border: "1px solid black",
    },
  });

  addSpanToHDiv("Clothing", cdivh);
  addSpanToHDiv("Ratio Packs", cdivh);
  addSpanToHDiv("Singles", cdivh);
  addSpanToHDiv("Ratio Packs", cdivh);
  addSpanToHDiv("Total", cdivh, true);

  //finally
  odiv.appendChild(cdivh);

  //R. PAck
  const cdivr = gdiv([], {
    css: {
      display: "flex",
      flexDirection: "column",
      flex: "1 1 10%",
      //border: "1px solid black",
    },
  });
  addSpanToDiv("R.Pack", cdivr);
  addSpanToDiv(ratiopackcount, cdivr);
  addSpanToDiv("  ", cdivr);
  addSpanToDiv("  ", cdivr);
  // addSpanToDiv(" - ", cdivr);
  addEmptySpanToDiv("  ", cdivr, true);

  // addEmptySpanToDiv(" ", cdivr);
  // addEmptySpanToDiv(" ", cdivr);
  //finally
  odiv.appendChild(cdivr);
  //rows
  data.poDetailData.forEach((row) => {
    const cdiv = gdiv([], {
      css: {
        display: "flex",
        flexDirection: "column",
        // flex: "1 1 5%",
        //border: "1px solid black",
        width: "30px",
      },
    });
    addSpanToDiv(row.size, cdiv);
    addSpanToDiv(row.ratiopack * 1, cdiv);
    addSpanToDiv(row.single * 1, cdiv);
    addSpanToDiv(parseInt(row.ratiopack) * 1 * ratiopackcount * 1, cdiv);
    addSpanToDiv(
      parseInt(row.single) + parseInt(row.ratiopack) * ratiopackcount * 1,
      cdiv,
      true
    );
    odiv.appendChild(cdiv);
  });

  const d = gdiv();
  d.appendChild(odiv);

  return d;
};

const addSpanToHDiv = (title, cdiv, noBottomBorder = false) => {
  let borderBottom;
  if (noBottomBorder) {
    borderBottom = "";
  } else {
    borderBottom = "1px solid black";
  }

  const cdivi = gdiv([], {
    css: {
      display: "flex",
      paddingLeft: "3px",
      paddingRight: "3px",
      // flex: "1 1 5%",
      borderBottom,
    },
  });

  const sp = gspan(title, [], {
    //borderBottom: "1px solid black",
    textAlign: "center",
    paddingTop: "3px",
    minHeight: "1rem",
  });
  cdivi.appendChild(sp);
  cdiv.appendChild(cdivi);
};

const addSpanToDiv = (title, cdiv, noBottomBorder = false) => {
  let borderBottom;
  if (noBottomBorder) {
    borderBottom = "";
  } else {
    borderBottom = "1px solid black";
  }

  const cdivi = gdiv([], {
    css: {
      display: "flex",
      paddingLeft: "3px",
      paddingRight: "3px",
      // flex: "1 1 5%",
      borderBottom,
      borderLeft: "1px solid black",
      justifyContent: "center",
    },
  });
  const sp = gspan(title, [], {
    //borderBottom: "1px solid black",
    textAlign: "center",
    paddingTop: "3px",
    color: "black",
    minHeight: "14px",
  });

  cdivi.appendChild(sp);
  cdiv.appendChild(cdivi);
};

const addEmptySpanToDiv = (title, cdiv, noBottomBorder = false) => {
  let borderBottom;
  if (noBottomBorder) {
    borderBottom = "";
  } else {
    borderBottom = "1px solid black";
  }

  const cdivi = gdiv([], {
    css: {
      display: "flex",
      paddingLeft: "3px",
      paddingRight: "3px",
      // flex: "1 1 5%",
      borderBottom,
      borderLeft: "1px solid black",
      justifyContent: "center",
    },
  });
  const sp = gspan(title, [], {
    //borderBottom: "1px solid black",
    textAlign: "center",
    paddingTop: "3px",
    minHeight: "14px",
    color: "white",
  });

  cdivi.appendChild(sp);
  cdiv.appendChild(cdivi);
};

export const gdiv: any = (
  cssClassList = ["pp"],
  options = { text: "", css: {}, attributes: {} }
) => {
  //creation
  const oDiv = document.createElement("DIV");
  if (options.text) {
    console.log("ddddrrrrr", options.text);
    const txtNode = document.createTextNode(options.text);
    oDiv.appendChild(txtNode);
  }
  //set id
  const divId = "div" + DomElementIdGenerator.NextId;
  oDiv.id = divId;
  //add class list
  cssClassList.forEach((element) => {
    oDiv.classList.add(element);
  });
  //set inline css
  if (options.css) {
    Object.keys(options.css).forEach((element) => {
      oDiv.style[element] = options.css[element];
    });
  }

  //set attributes if any
  if (options.attributes) {
    Object.keys(options.attributes).forEach((element) => {
      oDiv.setAttribute(element, options.attributes[element]);
    });
  }
  return oDiv;
};
export const gspan = (
  text = "",
  cssClassList = [],
  css = {},
  options = {
    attributes: {},
  }
) => {
  const span = document.createElement("SPAN");
  const txtNode = document.createTextNode(text);
  span.appendChild(txtNode);

  Object.keys(css).forEach((element) => {
    span.style[element] = css[element];
  });

  cssClassList.forEach((element) => {
    span.classList.add(element);
  });
  Object.keys(options.attributes).forEach((element) => {
    span.setAttribute(element, options.attributes[element]);
  });
  return span;
};
class DomElementIdGenerator {
  static lastGeneratedId = 0;
  constructor() {}
  static get NextId() {
    DomElementIdGenerator.lastGeneratedId++;
    return DomElementIdGenerator.lastGeneratedId;
  }
}

export const getSizeQtyTable = (data) => {
  const ratiopackcount = data[0].ratiopacksize ?? 0;
  const odiv = gdiv([], {
    css: {
      display: "flex",
      border: "1px solid black",
    },
  });
  const cdivh = gdiv([], {
    css: {
      display: "flex",
      flexDirection: "column",
      flex: "1 1 10%",
      //border: "1px solid black",
    },
  });
  //add headers
  const spsizeh = gspan("Size:", [], {
    borderBottom: "1px solid black",
    textAlign: "center",
    paddingTop: "3px",
    paddingLeft: "3px",
    paddingRight: "3px",
    margin: "1px",
  });
  cdivh.appendChild(spsizeh);
  const spqtyh = gspan("Qty:", [], {
    textAlign: "center",
    paddingTop: "3px",
    paddingLeft: "3px",
    paddingRight: "3px",
  });
  cdivh.appendChild(spqtyh);
  odiv.appendChild(cdivh);

  //rows
  data.poDetailData.forEach((row) => {
    const cdiv = gdiv([], {
      css: {
        display: "flex",
        flexDirection: "column",
        // flex: "1 1 5%",
        //border: "1px solid black",
        margin: "1px",
        width: "30px",
      },
    });
    const spsize = gspan(row.size, [], {
      borderBottom: "1px solid black",
      textAlign: "center",
      borderLeft: "1px solid black",
      paddingTop: "3px",
    });
    cdiv.appendChild(spsize);
    const qty: any =
      ratiopackcount * parseInt(row.ratiopack) + parseInt(row.single);
    const spqty = gspan(qty, [], {
      textAlign: "center",
      borderLeft: "1px solid black",
      paddingTop: "3px",
    });
    cdiv.appendChild(spqty);
    odiv.appendChild(cdiv);
  });

  const d = gdiv();
  d.appendChild(odiv);

  return d;
};
