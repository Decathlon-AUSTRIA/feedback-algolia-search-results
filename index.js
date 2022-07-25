/* START FEEDBACK COMPONENT SCRIPT */
const parentFeedbackComponentFunc = () => {
  // detect if feedbackComponent function already executed
  let executeFunctionControler = false;

  const feedbackComponent = () => {
    // set desktop width:
    const desktopScreen = window.matchMedia("(min-width: 1000px)");
    // hide chatbot if display:
    const chatBotElem = document.getElementById("faqbot-58rZl8DgthS");
    if (chatBotElem) {
      chatBotElem.style.display = "none";
    }
    // remove prev container element if function already executed
    executeFunctionControler = true;

    /* ----- START VARS ----- */
    // store user rate number in a global var
    let userRateNum;
    /* ----- END VARS ----- */

    /* ----- START REUSABLE FUNCTION ----- */

    /* ----- END REUSABLE FUNCTION ----- */

    /* ----- START MAIN ICON + TEXT ----- */
    // create the close icon x element:
    const closeMainIconXElement = document.createElement("div");
    closeMainIconXElement.innerHTML = "X";
    const stylesOfCloseMainIconXElement = {
      position: "absolute",
      top: "2px",
      right: "2px",
      cursor: "pointer",
      color: "#004876",
      fontSize: "8px",
    };
    Object.assign(closeMainIconXElement.style, stylesOfCloseMainIconXElement);

    // create the text element above the icon:
    const textAboveIcon = document.createElement("div");
    textAboveIcon.setAttribute("id", "feedback-component-element-above-icon");
    textAboveIcon.innerHTML =
      "Gib uns Feedback zu deiner Suche <p style='margin:0 !important;font-size:17px'>&#8595;</p>";
    const stylesOfTextAboveIcon = {
      fontSize: "11px",
      fontWeight: "bold",
      background: "#fff",
      color: "#004876",
      position: "fixed",
      bottom: "84px",
      right: "9px",
      zIndex: "100",
      maxWidth: "91px",
      textAlign: "center",
      padding: "4px",
      boxShadow: "rgb(0 0 0 / 15%) 0px 0px 15px -2px",
    };
    Object.assign(textAboveIcon.style, stylesOfTextAboveIcon);
    // desktop styles:
    if (desktopScreen.matches) {
      textAboveIcon.style.fontSize = "13px";
      textAboveIcon.style.maxWidth = "107px";
      textAboveIcon.style.height = "100px";
      textAboveIcon.style.bottom = "100px";
    }
    textAboveIcon.appendChild(closeMainIconXElement);

    // create the icon element:
    const icon = document.createElement("div");
    icon.setAttribute("id", "feedback-component-main-icon");
    icon.innerHTML =
      '<img style="width: 28px" src="https://decathlon-source.eu/general-images/feedback-icon.png" />';
    // desktop styles:
    if (desktopScreen.matches) {
      icon.innerHTML =
        '<img style="width: 35px" src="https://decathlon-source.eu/general-images/feedback-icon.png" />';
    }
    const stylesOfIcon = {
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      backgroundColor: "#004876",
      color: "#fff",
      position: "fixed",
      bottom: "20px",
      right: "30px",
      boxShadow: "0 0 15px -2px rgb(0 0 0 / 15%)",
      zIndex: "100",
      fontSize: "30px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      transition: "0.7s",
    };
    Object.assign(icon.style, stylesOfIcon);
    // desktop styles:
    if (desktopScreen.matches) {
      icon.style.width = "70px";
      icon.style.height = "70px";
    }
    icon.addEventListener("mouseover", function () {
      icon.style.transform = "scale(1.1)";
    });
    icon.addEventListener("mouseleave", function () {
      icon.style.transform = "scale(1.0)";
    });
    document.getElementsByTagName("body")[0].appendChild(icon);
    icon.before(textAboveIcon);
    /* ----- END MAIN ICON + TEXT ----- */

    /* ----- START CONTAINER ELEMENT ----- */
    // create container element:
    const container = document.createElement("div");
    container.setAttribute("class", "search-feedback-component");
    container.setAttribute("id", "search-feedback-component");
    const stylesOfContainer = {
      width: "300px",
      height: "200px",
      padding: "20px",
      backgroundColor: "#fff",
      borderRadius: "10px",
      boxShadow: "0 0 15px -2px rgb(0 0 0 / 15%)",
      position: "fixed",
      bottom: "20px",
      right: "20px",
      zIndex: "100",
      textAlign: "center",
      display: "none",
    };
    Object.assign(container.style, stylesOfContainer);
    document.getElementsByTagName("body")[0].appendChild(container);
    /* ----- END CONTAINER ELEMENT ----- */

    /* ----- START CLOSE AND MINIMIZE ICONS ----- */
    // create the minimize icon:
    const minimizeIcon = document.createElement("div");
    minimizeIcon.innerHTML =
      '<svg aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" d="M14 8v1H3V8h11z"/></svg>';
    const stylesOfMinimizeIcon = {
      position: "absolute",
      top: "2px",
      right: "22px",
      cursor: "pointer",
    };
    Object.assign(minimizeIcon.style, stylesOfMinimizeIcon);
    // append minimize icon to container:
    container.appendChild(minimizeIcon);

    // create the close icon
    const closeIcon = document.createElement("div");
    closeIcon.innerHTML =
      '<svg aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"/></svg>';
    const stylesOfCloseIcon = {
      position: "absolute",
      top: "2px",
      right: "2px",
      cursor: "pointer",
    };
    Object.assign(closeIcon.style, stylesOfCloseIcon);
    // append the close icon to container:
    container.appendChild(closeIcon);
    /* ----- END CLOSE AND MINIMIZE ICONS ----- */

    /* ----- START GENERAL ELEMENTS ----- */
    // create the feedback title element:
    const title = document.createElement("div");
    title.innerHTML = `Hast du mit "${history.state.prod_de.query}" deine gewünschte Auswahl gefunden?`;
    const stylesOfTitle = {
      fontSize: "17px",
      fontWeight: "bold",
      marginBottom: "12px",
    };
    Object.assign(title.style, stylesOfTitle);
    // append title to container:
    container.appendChild(title);

    // create the subtitle element:
    const subtitle = document.createElement("div");
    subtitle.style.fontSize = "12px";
    subtitle.innerHTML = "";
    title.after(subtitle);

    // create the feedback options element:
    const feedbackOptions = document.createElement("div");
    feedbackOptions.style.display = "flex";
    feedbackOptions.style.justifyContent = "center";
    // append feedbackOptions to container:
    container.appendChild(feedbackOptions);

    // create and append the first emoji feedback element:
    const firstFeedbackOption = document.createElement("div");
    firstFeedbackOption.innerHTML = "&#128078;";
    const stylesOfFeedbackOptionElements = {
      fontSize: "42px",
      cursor: "pointer",
      transition: "0.7s",
      margin: "0 22px",
    };
    Object.assign(firstFeedbackOption.style, stylesOfFeedbackOptionElements);
    firstFeedbackOption.addEventListener("mouseover", function () {
      firstFeedbackOption.style.transform = "scale(1.1)";
    });
    firstFeedbackOption.addEventListener("mouseleave", function () {
      firstFeedbackOption.style.transform = "scale(1.0)";
    });
    feedbackOptions.appendChild(firstFeedbackOption);

    // create and append the second emoji feedback element:
    const secondFeedbackOption = document.createElement("div");
    secondFeedbackOption.innerHTML = "&#128533;";
    secondFeedbackOption.style.display = "none";
    Object.assign(secondFeedbackOption.style, stylesOfFeedbackOptionElements);
    secondFeedbackOption.addEventListener("mouseover", function () {
      secondFeedbackOption.style.transform = "scale(1.1)";
    });
    secondFeedbackOption.addEventListener("mouseleave", function () {
      secondFeedbackOption.style.transform = "scale(1.0)";
    });
    feedbackOptions.appendChild(secondFeedbackOption);

    // create and append the third emoji feedback element:
    const thirdFeedbackOption = document.createElement("div");
    thirdFeedbackOption.innerHTML = "&#128528;";

    thirdFeedbackOption.style.display = "none";
    Object.assign(thirdFeedbackOption.style, stylesOfFeedbackOptionElements);
    thirdFeedbackOption.addEventListener("mouseover", function () {
      thirdFeedbackOption.style.transform = "scale(1.1)";
    });
    thirdFeedbackOption.addEventListener("mouseleave", function () {
      thirdFeedbackOption.style.transform = "scale(1.0)";
    });
    feedbackOptions.appendChild(thirdFeedbackOption);

    // create and append the fourth emoji feedback element:
    const fourthFeedbackOption = document.createElement("div");
    fourthFeedbackOption.innerHTML = "&#128578;";
    fourthFeedbackOption.style.display = "none";
    Object.assign(fourthFeedbackOption.style, stylesOfFeedbackOptionElements);
    fourthFeedbackOption.addEventListener("mouseover", function () {
      fourthFeedbackOption.style.transform = "scale(1.1)";
    });
    fourthFeedbackOption.addEventListener("mouseleave", function () {
      fourthFeedbackOption.style.transform = "scale(1.0)";
    });
    feedbackOptions.appendChild(fourthFeedbackOption);

    // create and append the fifth emoji feedback element:
    const fifthFeedbackOption = document.createElement("div");
    fifthFeedbackOption.innerHTML = "&#128077;";
    Object.assign(fifthFeedbackOption.style, stylesOfFeedbackOptionElements);
    fifthFeedbackOption.addEventListener("mouseover", function () {
      fifthFeedbackOption.style.transform = "scale(1.1)";
    });
    fifthFeedbackOption.addEventListener("mouseleave", function () {
      fifthFeedbackOption.style.transform = "scale(1.0)";
    });
    feedbackOptions.appendChild(fifthFeedbackOption);

    // create the inputs container:
    const inputsContainer = document.createElement("div");
    inputsContainer.style.display = "none";
    container.appendChild(inputsContainer);

    // create the input element to get user text
    const inputForUserFeedbackText = document.createElement("textarea");
    inputForUserFeedbackText.setAttribute("rows", "5");
    inputForUserFeedbackText.setAttribute(
      "placeholder",
      "Bitte schreibe uns deinen Kommentar.."
    );
    const stylesOfInputForUserFeedbackText = {
      width: "100%",
      outline: "none",
      border: "1px solid #eee",
    };
    Object.assign(
      inputForUserFeedbackText.style,
      stylesOfInputForUserFeedbackText
    );
    inputsContainer.appendChild(inputForUserFeedbackText);

    // create the send btn
    const feedbackTextSendBtn = document.createElement("button");
    feedbackTextSendBtn.innerHTML = "Senden";
    const stylesOfFeedbackTextSendBtn = {
      margin: "6px 0 10px 0",
      cursor: "pointer",
      backgroundColor: "#0082C3",
      color: "#fff",
      border: "none",
      padding: "4px 8px",
      borderRadius: "5px",
    };
    Object.assign(feedbackTextSendBtn.style, stylesOfFeedbackTextSendBtn);
    inputsContainer.appendChild(feedbackTextSendBtn);

    // create the small text under button
    const smallTextMessage = document.createElement("div");
    smallTextMessage.innerHTML =
      "*Dieses Feedback bleibt unbeantwortet. Bei Anfragen wende dich bitte an unser <a target='_blank' href='https://www.decathlon.at/content/7-kontakt'>Kundenservice</a>";
    smallTextMessage.style.fontSize = "10px";
    feedbackTextSendBtn.after(smallTextMessage);

    // create and append the loading svg image
    const loadingImg = document.createElement("img");
    loadingImg.setAttribute(
      "src",
      "https://decathlon-source.eu/general-images/Eclipse-1s-200px-transparent.svg"
    );
    const stylesOfLoadingAndCheckImg = {
      width: "100px",
      margin: "20px auto 0 auto",
      display: "none",
    };
    Object.assign(loadingImg.style, stylesOfLoadingAndCheckImg);
    container.appendChild(loadingImg);

    // create and append the complete loading image (green check svg img)
    const checkImg = document.createElement("img");
    checkImg.setAttribute(
      "src",
      "https://decathlon-source.eu/general-images/check-icon.svg"
    );
    Object.assign(checkImg.style, stylesOfLoadingAndCheckImg);
    container.appendChild(checkImg);

    // create and append the thanks message after feedback succssfully sent
    const thanksMessage = document.createElement("p");
    thanksMessage.innerHTML = "Vielen Dank für dein Feedback.";
    const stylesOfThanksMessage = {
      color: "#0DB14B",
      fontSize: "14px",
      display: "none",
    };
    Object.assign(thanksMessage.style, stylesOfThanksMessage);
    checkImg.before(thanksMessage);

    /* ----- END GENERAL ELEMENTS ----- */

    /* ----- START FUNCTIONS ----- */

    // onclick close all elements
    function closeAllElements() {
      executeFunctionControler = false;
      textAboveIcon.style.display = "none";
      icon.style.display = "none";
      localStorage.setItem("hide_feedback", "yes");
    }

    // onclick display feedback container element:
    function displayFeedbackElementHandleOnClick() {
      icon.style.display = "none";
      textAboveIcon.style.display = "none";
      container.style.display = "block";
    }

    // onclick hide feedback container and icon elements:
    function closeFeedbackElementHandleOnClick() {
      executeFunctionControler = false;
      icon.style.display = "none";
      container.style.display = "none";
      textAboveIcon.style.display = "none";
    }

    // onclick minimize container element and display the icon:
    function minimizeFeedbackElementHandleOnClick() {
      icon.style.display = "flex";
      container.style.display = "none";
      textAboveIcon.style.display = "block";
    }

    // onclick 1-3 rate icon:
    function lowRateIconHandleOnClick(rateNumber) {
      userRateNum = rateNumber;
      feedbackOptions.style.display = "none";
      inputsContainer.style.display = "block";
      title.innerHTML = "Warum bist du mit dem Suchergebnis nicht zufrieden?*";
      container.style.height = "300px";
      sendDataLowRateFirstClick();
    }

    // handle post req error
    function handleErrorPostReq() {
      // hide loading image:
      loadingImg.style.display = "none";
      closeFeedbackElementHandleOnClick();
      // display error message
      alert("Leider ist bei der Übertragung ein Fehler aufgetreten.");
    }

    // onclick send feedback data to google sheet:
    const sendFeedbackDataToDb = () => {
      // hide elements for loading image:
      feedbackOptions.style.display = "none";
      title.style.display = "none";
      inputsContainer.style.display = "none";

      // display loading image:
      loadingImg.style.display = "block";

      // create data object for db:
      const feedbackData = {
        FOR_KEYWORK: history.state.prod_de.query,
        RATE: userRateNum,
        LOW_RATE_INPUT_TEXT: inputForUserFeedbackText.value,
        DATE: new Date(),
        SCREEN_WIDTH: `${screen.width} px`,
        PROD_DE_PRICE_DESC:
          window.location.href.indexOf("prod_de_price_desc") > -1
            ? "yes"
            : "no",
        PROD_DE_PRICE_ASC:
          window.location.href.indexOf("prod_de_price_asc") > -1 ? "yes" : "no",
      };

      // api post request:
      fetch(
        "https://sheet.best/api/sheets/b9c43623-774b-42b0-ac19-fcd1e979886d",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(feedbackData),
        }
      )
        .then((r) => {
          // success
          if (r.status === 200) {
            executeFunctionControler = false;
            // hide loading image:
            loadingImg.style.display = "none";

            // display complete loading check image
            checkImg.style.display = "block";
            thanksMessage.style.display = "block";

            // close feedback element after 2 sec
            setTimeout(() => {
              container.style.display = "none";
              icon.style.display = "none";
            }, 2000);
            // error in then (res 404)
          } else if (r.status === 404) {
            handleErrorPostReq();
          }
        })
        // error in inner catch
        .catch((err) => {
          handleErrorPostReq();
        });
    };

    function sendDataLowRateCloseIconClick() {
      // create data object for db:
      const feedbackData = {
        FOR_KEYWORK: history.state.prod_de.query,
        RATE: userRateNum,
        LOW_RATE_INPUT_TEXT: "**clicked on close icon**",
        DATE: new Date(),
        SCREEN_WIDTH: `${screen.width} px`,
        PROD_DE_PRICE_DESC:
          window.location.href.indexOf("prod_de_price_desc") > -1
            ? "yes"
            : "no",
        PROD_DE_PRICE_ASC:
          window.location.href.indexOf("prod_de_price_asc") > -1 ? "yes" : "no",
      };

      fetch(
        "https://sheet.best/api/sheets/b9c43623-774b-42b0-ac19-fcd1e979886d",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(feedbackData),
        }
      )
        .then((r) => {
          // success
          if (r.status === 200) {
            console.log("success");
            // error in then (res 404)
          } else if (r.status === 404) {
            console.log("error");
          }
        })
        // error in inner catch
        .catch((err) => {
          handleErrorPostReq();
        });
    }

    /* ----- END FUNCTIONS ----- */

    /* ----- START ELEMENTS ON CLICK EVENT LISTENER ----- */
    firstFeedbackOption.addEventListener("click", () => {
      lowRateIconHandleOnClick("1");
    });
    secondFeedbackOption.addEventListener("click", () => {
      lowRateIconHandleOnClick("2");
    });
    thirdFeedbackOption.addEventListener("click", () => {
      lowRateIconHandleOnClick("3");
    });
    fourthFeedbackOption.addEventListener("click", () => {
      userRateNum = "4";
      sendFeedbackDataToDb();
    });
    fifthFeedbackOption.addEventListener("click", () => {
      userRateNum = "5";
      sendFeedbackDataToDb();
    });
    feedbackTextSendBtn.addEventListener("click", () => {
      sendFeedbackDataToDb();
    });
    minimizeIcon.addEventListener(
      "click",
      minimizeFeedbackElementHandleOnClick
    );
    closeIcon.addEventListener("click", closeFeedbackElementHandleOnClick);
    closeIcon.addEventListener("click", sendDataLowRateCloseIconClick);
    closeMainIconXElement.addEventListener("click", () => {
      closeAllElements();
    });
    icon.addEventListener("click", displayFeedbackElementHandleOnClick);

    /* ----- END ELEMENTS ON CLICK EVENT LISTENER ----- */
  }; // end main function

  /* ---------------------------- */
  // get no-results block element
  const noResultBlockElement =
    document.getElementsByClassName("block--no-result");

  // remove component if exist in page function
  function removeComponentIfExist() {
    document.getElementById("feedback-component-element-above-icon") &&
      document.getElementById("feedback-component-element-above-icon").remove();
    document.getElementById("feedback-component-main-icon") &&
      document.getElementById("feedback-component-main-icon").remove();
    document.getElementById("search-feedback-component") &&
      document.getElementById("search-feedback-component").remove();
  }

  // detect changes in the dom and remove component if no-results block exist
  new MutationObserver(() => {
    if (noResultBlockElement.length > 0) {
      // remove prev search results feedback component
      removeComponentIfExist();
    }
  }).observe(document, {
    subtree: true,
    childList: true,
  });

  // remove prev search results feedback component
  removeComponentIfExist();
  // set execute conroler to false:
  executeFunctionControler = false;
  // call the execute function
  executeFeedbackFunc();

  function executeFeedbackFunc() {
    if (
      window.location.href.indexOf("?prod_de%") > -1 &&
      !executeFunctionControler &&
      localStorage.getItem("hide_feedback") !== "yes"
    ) {
      // hide chatbot if display:
      const chatBotElem = document.getElementById("faqbot-58rZl8DgthS");
      if (chatBotElem) {
        chatBotElem.style.display = "none";
      }

      // execute new feedback component
      feedbackComponent();
    }
  } // end executeFeedbackFunc
}; // end parentFeedbackComponentFunc

/* END FEEDBACK COMPONENT SCRIPT */

/* START EXECUTE PARENT FUNCTION  */
// execute parent function

parentFeedbackComponentFunc();

/* END EXECUTE PARENT FUNCTION  */
