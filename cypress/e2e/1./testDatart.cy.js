///<reference types= "Cypress"/>


import HP from "../2./HP.JS";
import ClickButton from "../2./ClickButton.JS";
import LoginUser from "../2./LoginUser";
import ProgressBasket from "../2./ProgressBasket";
import DeliveryInformation from "../2./DeliveryInformation";


const hp = new HP();
const clickButton = new ClickButton();
const loginUser = new LoginUser();
const progressBasket = new ProgressBasket();
const deliveryInformation = new DeliveryInformation();








describe("Datart", () => {
    it.only("", ()=> {
        hp.visitHomepage();
        clickButton.clickOnCookies();
        loginUser.LoginU();
        clickButton.hoverMenuHappliances();
        clickButton.filterProductMile();
        clickButton.clickRandomInsertButton();
        clickButton.clickRandomCleaners();
        clickButton.goToBasket();
        progressBasket.addAccessories();
        progressBasket.secondStepBasket();
        progressBasket.priceAndDelivery();
        deliveryInformation.wrongDeliveryInformation();
        deliveryInformation.correctDeliveryInformation();
        deliveryInformation.fourthStepBasket();
        
      

    });



})