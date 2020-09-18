import {contentDOM} from './base';
export {renderMenuPage};

const renderMenuPage = () => {
    contentDOM.innerHTML = markup;
}

const markup = `
<div id="menu-container">
    <div id="main-dish-container">

        <div class="category-container">
            <p class="menu-category">Tsukemen</p>

            <div class="dish-card">
                <div class="dish-desc-card">
                    <p class="dish-title">CHARSIU TSUKEMEN</p>
                    <p class="dish-description">Tsukemen served with egg & charsiu (slices of pork belly)</p>
                    <div class="size-card">
                        <p class="size-style">Large: $18.95</p>
                        <p class="size-style">Regular: $17.95</p>
                    </div>
                </div>
                <img src="./images/charsiu_tsukemen.jpg">
            </div>

            <div class="dish-card">
                <div class="dish-desc-card">
                    <p class="dish-title">AJITAMA TSUKEMEN</p>
                    <p class="dish-description">Tsukemen served with flavored soft-boiled egg</p>
                    <div class="size-card">
                        <p class="size-style">Large: $15.95</p>
                        <p class="size-style">Regular: $14.95</p>
                    </div>
                </div>
                <img src="./images/ajitama_tsukemen.jpg">
            </div>

            <div class="dish-card">
                <div class="dish-desc-card">
                    <p class="dish-title">BASIC TSUKEMEN</p>
                    <p class="dish-description">Soup (green onion, charsiu, menma), noodles, seaweed, lime</p>
                    <div class="size-card">
                        <p class="size-style">Large: $14.95</p>
                        <p class="size-style">Regular: $13.95</p>
                    </div>
                </div>
                <img src="./images/basic_tsukemen.jpg">
            </div>
        </div>

        <div class="category-container">
            <p class="menu-category">Ramen</p>

            <div class="dish-card">
                <div class="dish-desc-card">
                    <p class="dish-title">CHARSIU RAMEN</p>
                    <p class="dish-description">Ramen served with charsiu (slices of pork belly)</p>
                    <div class="size-card">
                        <p class="size-style">Large: $18.95</p>
                        <p class="size-style">Regular: $16.95</p>
                    </div>
                </div>
                <img src="./images/charsiu_ramen.jpg">
            </div>

            <div class="dish-card">
                <div class="dish-desc-card">
                    <p class="dish-title">NEGI RAMEN</p>
                    <p class="dish-description">Ramen served with healthy portion of green onion</p>
                    <div class="size-card">
                        <p class="size-style">Large: $15.95</p>
                        <p class="size-style">Regular: $13.95</p>
                    </div>
                </div>
                <img src="./images/negi_ramen.jpg">
            </div>

            <div class="dish-card">
                <div class="dish-desc-card">
                    <p class="dish-title">RAMEN</p>
                    <p class="dish-description">Pork broth with charsiu, kikurage, green onion & seaweed</p>
                    <div class="size-card">
                        <p class="size-style">Large: $13.95</p>
                        <p class="size-style">Regular: $11.95</p>
                    </div>
                </div>
                <img src="./images/regular_ramen.jpg">
            </div>
        </div>

        <div class="category-container">
            <p class="menu-category">Rice Bowls</p>

            <div class="dish-card">
                <div class="dish-desc-card">
                    <p class="dish-title">SALMON + IKURA BOWL</p>
                    <p class="dish-description">Sliced salmon with salmon roe, seaweed & green onion</p>
                    <div class="size-card">
                        <p class="size-style">$9.95</p>
                    </div>
                </div>
                <img src="./images/salmon_ikura_bowl.jpg">
            </div>

            <div class="dish-card">
                <div class="dish-desc-card">
                    <p class="dish-title">CHARSIU BOWL</p>
                    <p class="dish-description">Chopped pork belly, green onion, house sauce, black pepper</p>
                    <div class="size-card">
                        <p class="size-style">$5.95</p>
                    </div>
                </div>
                <img src="./images/charsiu_bowl.jpg">
            </div>

            <div class="dish-card">
                <div class="dish-desc-card">
                    <p class="dish-title">SPICY TUNA BOWL</p>
                    <p class="dish-description">Spicy tuna served over rice, seaweed, green onion</p>
                    <div class="size-card">
                        <p class="size-style">$5.95</p>
                    </div>
                </div>
                <img src="./images/spicy_tuna_bowl.jpg">
            </div>

        </div>

    </div>
    <div id="bottom-container">
        <p id="toppings-title">Toppings</p>
        <div id="toppings-container">
            <p class="toppings" id="left">Egg/$1.50</p>
            <p class="toppings">Charsiu pork/$5.00</p>
            <p class="toppings">Negi/$2.00</p>
            <p class="toppings">Bamboo shoot/$2.00</p>
            <p class="toppings">Seaweed/$1.50</p>
            <p class="toppings" id="right">Woodear mushroom/$1.50</p>
        </div>
    </div>
</div> 
`;