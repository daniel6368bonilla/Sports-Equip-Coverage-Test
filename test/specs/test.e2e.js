import { expect } from '@wdio/globals'
import SortPage from '../pageobjects/login.page.js'


describe('Sports Equip Sort Tests', () => {
    it('should display the sort dropdown', async () => {
        await SortPage.open()
        const originalProducts = await SortPage.products
        const originalFirst = await originalProducts[0].getAttribute('data-product-id')

        await SortPage.sortButton.click()
        const options = await SortPage.sortOptions
        expect(options.length).toBe(7)
        await SortPage.priceAsc.click()
        const prices = await SortPage.productPrices
        
        for (let i = 0; i < prices.length - 1; i++) {
        const currentPrice = Number((await prices[i].getText()).replace('$', ''))
        const nextPrice = Number((await prices[i + 1].getText()).replace('$', ''))
        expect(currentPrice <= nextPrice).toBe(true)
}
        await SortPage.sortButton.click()
        await SortPage.priceDesc.click()
        const pricesDesc = await SortPage.productPrices

        for (let i = 0; i < pricesDesc.length - 1; i++) {
        const currentPrice = Number((await pricesDesc[i].getText()).replace('$', ''))
        const nextPrice = Number((await pricesDesc[i + 1].getText()).replace('$', ''))
        expect(currentPrice >= nextPrice).toBe(true)
}
        await SortPage.sortButton.click()
        await SortPage.nameAsc.click()
    
        const names= await SortPage.productNames
        for (let i = 0; i < names.length - 1; i++) {
        const currentName = await names[i].getText()
        const nextName = await names[i + 1].getText()

        expect(currentName.localeCompare(nextName) <= 0).toBe(true)
}
        await SortPage.sortButton.click()
        await SortPage.nameDesc.click()

        const namesDesc = await SortPage.productNames

        for (let i = 0; i < namesDesc.length - 1; i++) {
        const currentName = await namesDesc[i].getText()
        const nextName = await namesDesc[i + 1].getText()

        expect(currentName.localeCompare(nextName) >= 0).toBe(true)
}
        await SortPage.sortButton.click()
        await SortPage.onSale.click()

        await expect($('.pcard:first-child .badge-sale')).toBeDisplayed() 

        const before = await SortPage.products[0].getAttribute('data-product-id')

        await SortPage.sortButton.click()
        await SortPage.newArrivals.click()
        
        const after = await SortPage.products[0].getAttribute('data-product-id')
        expect(before).not.toBe(after)

        await SortPage.sortButton.click()
        await SortPage.featured.click()
        const featuredProducts = await SortPage.products
        
        const featuredFirst = await featuredProducts[0].getAttribute('data-product-id')
        expect(featuredFirst).toBe(originalFirst)

        await expect(SortPage.sortButton).toBeDisplayed()
    })
})

