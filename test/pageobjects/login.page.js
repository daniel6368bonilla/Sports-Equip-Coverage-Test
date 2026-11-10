import { $, $$ } from '@wdio/globals'
import Page from './page.js';

class SortPage extends Page {
    
    get sortButton () {
        return $('button.sort-btn')
    }

    get sortOptions () {
        return $$('.sort-option')
    }
    get priceAsc () {
        return $('[data-sort="price-asc"]')
    }
    get productPrices () {
        return $$('.pcard-price')
    }
    get  priceDesc () {
        return $('[data-sort="price-desc"]')
    }
    get  nameAsc () {
        return $('[data-sort="name-asc"]')
    }
    get  nameDesc () {
        return $('[data-sort="name-desc"]')
    }
    get  onSale () {
        return $('[data-sort="on-sale"]')
    }
    get  newArrivals () {
        return $('[data-sort="new"]')
    }
    get  featured () {
        return $('[data-sort="default"]')
    }
    get  productNames () {
        return $$('.pcard-name')
    }
    get  sale () {
        return $$('.badge-sale')
    }
    get firstProduct() {
    return $('.pcard-name')
    }
    get products() {
    return $$('.pcard')
    }

    open () {
        return super.open('');
    }
}


export default new SortPage();
