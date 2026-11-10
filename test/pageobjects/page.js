import { browser } from '@wdio/globals'

export default class Page {
    
    open (path) {
        return browser.url(`https://rippsam.github.io/sportsEquip/index.html?dept=5${path}`)
    }
}
